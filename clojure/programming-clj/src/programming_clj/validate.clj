(ns programming-clj.validate
  (:require [schema.core :as s]))

(defrecord Recipe
    [name        s/Str
     description s/Str
     ingredients [Ingredient]
     steps       [s/Str]
     servings    s/Int])

(defrecord Ingredient
    [name s/Str
     quantity s/Int
     unit     s/Keyword])
