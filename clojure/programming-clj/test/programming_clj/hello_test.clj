(ns programming-clj.hello_test
  (:require [programming-clj.hello :as h])
  (:use clojure.test))

(deftest first-test
  (testing "Arithmetic"
  (testing "with positive integers"
    (is (= 4 (+ 2 2))))
  (testing "with negative integers"
    (is (= -4 (+ -2 -2)))
    (is (= -1 (- 3 4))))))

(deftest greeting
  (is (= "Hello! Yuji" (h/greeting "Yuji"))
      "greeting to Yuji"))
