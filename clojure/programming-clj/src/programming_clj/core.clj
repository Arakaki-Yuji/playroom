(ns programming-clj.core
  (:require
   [taoensso.timbre :as timbre
    :refer (log  trace  debug  info  warn  error  fatal  report
                 logf tracef debugf infof warnf errorf fatalf reportf
                 spy get-env log-env)]
   [taoensso.timbre.profiling :as profiling
    :refer (pspy pspy* profile defnp p p*)]
   [taoensso.timbre.appenders.core :as appenders]))

;; ログの吐き出し先を設定する
(timbre/merge-config! {:appenders {:spit (appenders/spit-appender {:fname "resources/logs/debug.log"})}})

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))

(defn -main
  "I don't do a whole lot."
  []
  (foo "Yuji Arakaki"))
