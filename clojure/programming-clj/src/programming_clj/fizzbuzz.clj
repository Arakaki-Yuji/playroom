(ns programming-clj.fizzbuzz)

(defn whole-number
  []
  (iterate inc 1))

(defn fizzbuzz-filter
  [x]
  (cond
    (= (rem x 15) 0) "fizzBuzz"
    (= (rem x 5)  0) "buzz"
    (= (rem x 3)  0) "fizz"
    :else x))

(defn start
  [x]
  (take x (map fizzbuzz-filter (whole-number))))
