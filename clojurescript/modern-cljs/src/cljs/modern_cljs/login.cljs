(ns modern-cljs.login)

(defn validate-form []
  (let [email (.getElementByid js/document "email")
        password (.getElementByid js/document "password")]
        (if (and (> (count (.-value email)) 0)
                 (> (count (.-value password)) 0))
          true
          (do (js/alert "Please, complete the form!")
              false))))
