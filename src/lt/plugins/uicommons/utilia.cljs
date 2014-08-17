(ns lt.plugins.uicommons.utilia
  (:require [lt.object :as object]
            [lt.util.dom :as dom]))

(defn deep-merge [& xs]
  (let [ms (map #(or % {}) xs)]
    (apply
     (fn f [& ys]
       (if (every? map? ys)
         (apply merge-with f ys)
         (last ys)))
     ms)))

(defn deep-merge! [obj & xs]
  (swap! obj deep-merge xs))


(defn ^boolean atom? [x]
  (satisfies? IDeref x))


(defn ->content [x]
  (if (atom? x)
    (object/->content x)
    x))

(defn append-obj [parent child]
  (dom/append (->content parent) (->content child)))

(defn cssel [& xs]
  (keyword (reduce str (map name xs))))

(defn ->class-str [& strings]
  (->> (into [] strings) (filter identity) (interpose " ") (apply str)))
