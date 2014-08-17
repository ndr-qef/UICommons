(ns lt.plugins.uicommons.utilia
  (:require [lt.object :as object]
            [lt.util.dom :as dom]
            [crate.core :as crate]))

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

(defn merge-content [obj content]
  (object/merge! obj {:content (if (vector? content)
                                 (crate/html content)
                                 content)}))

(defn re-template [obj template & [opts]]
  (let [new-content (crate/html template obj)]
    (merge-content obj new-content)))


(defn append-obj [parent child]
  (dom/append (->content parent) (->content child)))

(defn cssel [& xs]
  (keyword (reduce str (map name xs))))

(defn ->class-str [& strings]
  (->> (into [] strings) (filter identity) (interpose " ") (apply str)))
