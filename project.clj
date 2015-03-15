(defproject collab-board "0.1.0-SNAPSHOT"

  :description "FIXME: write description"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [http-kit "2.1.16"]
                 [org.clojure/data.json "0.2.6"]
                 [selmer "0.8.2"]
                 [com.taoensso/timbre "3.3.1"]
                 [com.taoensso/tower "3.0.2"]
                 [markdown-clj "0.9.64"]
                 [environ "1.0.0"]
                 [im.chit/cronj "1.4.3"]
                 [compojure "1.3.2"]
                 [ring/ring-defaults "0.1.3"]
                 [ring/ring-session-timeout "0.1.0"]
                 [ring-middleware-format "0.4.0"]
                 [noir-exception "0.2.3"]
                 [bouncer "0.3.2"]
                 [prone "0.8.0"]
                 [org.clojure/clojurescript "0.0-3058" :scope "provided"]
                 [reagent-forms "0.4.4"]
                 [reagent-utils "0.1.3"]
                 [secretary "1.2.1"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [cljs-ajax "0.3.10"]]

  :min-lein-version "2.0.0"
  :uberjar-name "collab-board.jar"
  :repl-options {:init-ns collab-board.handler}
  :jvm-opts ["-server"]

  :main collab-board.core

  :plugins [;[lein-ring "0.9.1"]
            [lein-environ "1.0.0"]
            [lein-ancient "0.6.0"]
            [lein-cljsbuild "1.0.4"]]
  

  :ring {:handler collab-board.handler/app
         :init    collab-board.handler/init
         :destroy collab-board.handler/destroy
         :auto-reload true
         :uberwar-name "collab-board.war"}
  
  
  :clean-targets ^{:protect false} ["resources/public/js"]
  
  
  :cljsbuild
  {:builds
   {:app
    {:source-paths ["src-cljs"]
     :compiler
     {:output-dir "resources/public/js/out"
      :externs ["react/externs/react.js"]
      :optimizations :none
      :output-to "resources/public/js/app.js"
      :source-map "resources/public/js/out.js.map"
      :pretty-print true}}}}
  
  
  :profiles
  {:uberjar {:omit-source true
             :env {:production true}
             :hooks [leiningen.cljsbuild]
              :cljsbuild
              {:jar true
               :builds
               {:app
                {:source-paths ["env/prod/cljs"]
                 :compiler {:optimizations :advanced :pretty-print false}}}} 
             
             :aot :all}
   :production {:ring {:open-browser? false
                       :stacktraces?  false
                       :auto-reload?  false}}
   :dev {:dependencies [[ring-mock "0.1.5"]
                        [ring/ring-devel "1.3.2"]
                        [pjstadig/humane-test-output "0.6.0"]
                        [leiningen "2.5.1"]
                        [figwheel "0.2.5-SNAPSHOT"]
                        [weasel "0.6.0-SNAPSHOT"]
                        [com.cemerick/piggieback "0.1.6-SNAPSHOT"]]
         
         :source-paths ["env/dev/clj"]
         
         
         :plugins [[lein-figwheel "0.2.3-SNAPSHOT"]]
         
         :cljsbuild {:builds {:app {:source-paths ["env/dev/cljs"]}}} 
         
         
         :figwheel
         {:http-server-root "public"
          :server-port 3449
          :css-dirs ["resources/public/css"]
          :ring-handler collab-board.handler/app}
         
         
         :injections [(require 'pjstadig.humane-test-output)
                      (pjstadig.humane-test-output/activate!)]
         :env {:dev true}}})
