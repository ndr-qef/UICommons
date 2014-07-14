(ns lt.plugins.uicommons.utilia
  (:require [lt.object :as object]
            [lt.util.dom :as dom]))

(defn deep-merge [& xs]
  (if (every? map? xs)
    (apply merge-with deep-merge xs)
    (last xs)))

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
