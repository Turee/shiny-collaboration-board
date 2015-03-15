(ns collab-board.routes.home
  (:require [collab-board.layout :as layout]
            [compojure.core :refer [defroutes GET]]
            [clojure.java.io :as io]
            [clojure.data.json :as json])
  (:use org.httpkit.server))

(defn home-page []
  (layout/render
    "home.html"))

(def paths (atom {}))

(def clients (atom {}))

(defn path-update [req]
  ;(println (str req))
  (with-channel req channel
  	(swap! clients assoc channel true)
  	(doseq [[id pth] @paths]
  		(println (str "Sending path: " id pth))
  		(send! channel (json/write-str {"id" id "path" pth "action" "ADD"})))
    (on-close channel 
    	(fn [status] 
    		(println "channel closed: " status)
    		(swap! clients dissoc channel)))
    (on-receive channel 
		(fn [data-str] 
		  (println (str "Received message: " data-str))
          (let [data (json/read-str data-str)
          	    clients (->> @clients
      	    				(map (fn [[k v]] k))
          	    			(filter (fn [c2] (not (= c2 channel)))))
          	    id (get data "id")
          	    action (get data "action")
          	    pth (get data "path")]
      	    (println (str "Received action " action " id " id))
      	    (if (= "ADD" action)
      			(swap! paths assoc id pth))
      	    (if (= "REMOVE" action)
      	    	(swap! paths dissoc id))
      		(println (str "Sending updates to " (count clients) " clients"))
      		(doseq [client clients] (send! client data-str)))))))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/path-updates" [] path-update))
