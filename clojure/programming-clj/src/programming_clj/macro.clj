(ns programming-clj.macro)

(defmacro unless
  "Similar to if but negates the condition"
  [condition & forms]
  `(if (not ~condition)
     ~@forms))

(defmacro unsplice
  [& coll]
  `(do ~@coll))
