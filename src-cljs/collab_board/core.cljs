(ns collab-board.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [POST]])
  (:require-macros [secretary.core :refer [defroute]]))

(def state (atom  
  {:is-drawing false 
   :is-erasing false
   :ctrl-down false
   :current-path []
   :paths {}
   :paths-by-points {}
   }))

(def canvas 
    (.getElementById js/document "collab-board"))

(def ctx 
  (.getContext canvas "2d"))

(defn debug [s]
  (.debug js/console s))

(def socket
  (js/WebSocket. (str "ws://" (.-host js/location) "/path-updates")))

(defn get-uuid [] 
  (.uuid js/window))

;Sends path update message
(defn send-path [pth id action] 
  (let [msg (.stringify js/JSON (clj->js {"id" id "path" pth "action" action}))]
    (debug (str "sending message " msg))
    (.send socket msg)))

;Adds new path with id and points [[x y] ...]
(defn add-path [id pth]
  ;(debug (str "adding path " id pth))
  (swap! state assoc-in [:paths id] pth)
  (doseq [p pth]
    (swap! state 
      assoc-in [:paths-by-points p] 
       (set (concat [id] (get-in @state [:paths-by-points p]))))))

;Sends path removed message
(defn send-remove-path [id]
  (send-path [] id "REMOVE"))

;Removes path by UUID
(defn remove-path [id]
  (debug (str "Removing path " id))

  (let [points (get-in @state [:paths id])]
    (swap! state assoc :paths (dissoc (:paths @state) id))
    (doseq [p points]
      (swap! state assoc :paths-by-points (dissoc (:paths-by-points @state) p)))))

;Removes paths that contain point p, returns true if paths were removed
(defn remove-paths-by-point [p]
  (let [paths (get-in @state [:paths-by-points p])]
    ;(debug (str "Removing path by point " p " found: " paths))
    ;(debug (str "All paths: " (get-in @state [:paths-by-points])))
    (doseq [pth paths]
      (remove-path pth)
      (send-remove-path pth))
    (not (empty? paths))))

;Adds path and sends path update
(defn add-send-path [pth]
  (let [id (get-uuid)]
    (add-path id pth)
    (send-path pth id "ADD")))


; ====== DRAWING ======
(defn begin-path []
  (.beginPath ctx))

(defn move-to [[x y]]
  ;(debug (str "moving to x " x " y " y ))
  (.moveTo ctx x y))

(defn line-to [[x y]]
  (.lineTo ctx x y))

(defn stroke []
  (.stroke ctx))

;Returns xy coordinates of mouse event
(defn get-xy [ev]
  [(.-offsetX ev) (.-offsetY ev)])

;Renders path [[x y] [x2 y2] ...]
(defn render-path [pth]
  ;(debug (str "Rendering path: " pth))
  (begin-path)
  (move-to (get pth 0))
  (doseq [p (drop 1 pth)]
    (do 
      ;(debug (str "Rendering point " p))
      (line-to p)
      (stroke)
      (move-to p))))

;Redraw paths
(defn redraw []
  (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
  (let [paths (map (fn [[k v]] v) (:paths @state))]
    (debug (str paths))
    (doseq [pth paths]
      (render-path pth))))
; ====== END DRAWING ======

; ====== EVENTS ======
(defn canvas-mousedown [ev]
  ;(debug (str "Current paths: " (:paths @state)))
  (if (not (:ctrl-down @state))
    ((swap! state assoc :is-drawing true)
     (begin-path)
     (move-to (get-xy ev)))
    (swap! state assoc :is-erasing true)))

(defn canvas-mouseup [ev]
  (let [pth (:current-path @state)]
    (if (:is-drawing @state)
      (add-send-path pth))
    (swap! state assoc :current-path [])
    (swap! state assoc :is-drawing false)
    (swap! state assoc :is-erasing false)))
  
(defn on-path-update [ev]
  ;(debug (str "Received message" (.-data ev)))
  (let [data (.-data ev)
        parsed (js->clj (.parse js/JSON data))
        pth (get parsed "path")
        id (get parsed "id")
        action (get parsed "action")]
    (if (= action "ADD")
      (do
       (add-path id pth)
       (render-path pth)))
    (if (= action "REMOVE")
      (do 
        (remove-path id)
        (redraw)))))

; Draws or erases path
(defn canvas-mousemove [ev]
  (if (:is-drawing @state)
    (let [xy (get-xy ev)]
      (swap! state assoc :current-path (conj (:current-path @state) xy))
      (line-to xy)
      (stroke)
      (move-to xy)))
  (if (:is-erasing @state) 
    (let [[px py] (get-xy ev)]
      (doall 
        (doseq [x (map (fn [i] (+ i px)) (range -2 2)) ;Search near the point
                y (map (fn [i] (+ i py)) (range -2 2))]
          (if (remove-paths-by-point [x y])
            (redraw)))))))
    

(defn key-down [ev]
  (if (= (.-which ev) 17);lctrl
    (swap! state assoc :ctrl-down true)))

(defn key-up [ev]
  (if (= (.-which ev) 17)
    (swap! state assoc :ctrl-down false)));lctrl

; ====== END EVENTS ======

; Init
(defn init! []
  (debug "Initializing")
  (.addEventListener canvas "mousedown" canvas-mousedown)
  (.addEventListener canvas "mouseup" canvas-mouseup)
  (.addEventListener canvas "mousemove" canvas-mousemove)
  (.addEventListener socket "message" on-path-update)
  (.addEventListener canvas "contextmenu" (fn [ev] false))
  (.addEventListener js/window "keydown" key-down)
  (.addEventListener js/window "keyup" key-up))


