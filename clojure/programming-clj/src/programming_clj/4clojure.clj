(ns programming-clj.4clojure)


(defn pack-a-sequence [seq]
  (partition-by #(identity %) seq))

(pack-a-sequence [:a :a :b :b :c])
(pack-a-sequence [1 1 2 1 1 1 3 3])
(pack-a-sequence [[1 2] [1 2] [3 4] [1 2]])

(def drop-every-nth-item
  (fn [seq nth]
    (-> (map #(if (= (count %) nth)
                (drop-last 1 %)
                %)
             (partition-all nth seq))
        (flatten))))

(def drop-every-nth-item-2
  #(apply concat (partition-all (dec %2) %2 %1)))

(drop-every-nth-item-2 [1 2 3 4 5 6 7 8] 3)
(= (drop-every-nth-item [1 2 3 4 5 6 7 8] 3) [1 2 4 5 7 8])

(def replicate-a-sequence
  (fn [seq num] (mapcat
                 #(take num (cycle (list %)))
                 seq)))

(= (replicate-a-sequence [1 2 3] 2) '(1 1 2 2 3 3))
(= (replicate-a-sequence [[1 2] [3 4]] 2) '([1 2] [1 2] [3 4] [3 4]))

(def fibs-seq
  #(take %
         ((fn fibs [a b]
            (cons a (lazy-seq (fibs b (+ a b)))))
          1 1)))

(fibs-seq 3)
