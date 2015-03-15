(ns collab-board.core
  (:require [collab-board.handler :refer [app]]
    [ring.adapter.jetty :refer [run-jetty]])
  (:gen-class)
  (:use org.httpkit.server))

(defn -main [& args]
  (let [port (Integer/parseInt (or (System/getenv "PORT") "3000"))]
  	(println "Starting server....")
    (run-server app {:port port :join? false})))
