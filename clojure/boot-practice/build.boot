(set-env!
 :resource-paths #{"src"}
 :dependencies '[[org.clojure/tools.namespace "0.2.7"]])

(deftask null-task
  "Does nothing."
  []
  clojure.core/identity)
