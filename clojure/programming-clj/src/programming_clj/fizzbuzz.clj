(ns programming-clj.fizzbuzz)

(defn start
  [x]
  (take x (map fizzbuzz-filter (whole-number))))

(defn whole-number
  []
  (iterate inc 1))

(defn fizzbuzz-filter
  [x]
  (cond
    (string? (fizzbuzz x)) (fizzbuzz x)
    (string? (buzz x)) (buzz x)
    (string? (fizz x)) (fizz x)
    :else x))

(defn fizz
  [x]
  (if (= (rem x 3) 0)
    "fizz"
    x))

(defn buzz
  [x]
  (if (= (rem x 5) 0)
    "buzz"
    x))

(defn fizzbuzz
  [x]
  (if (= (rem x 15) 0)
    "fizzbuzz"
    x))
