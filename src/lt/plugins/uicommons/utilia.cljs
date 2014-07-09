(ns lt.plugins.uicommons.utilia
  (:require [lt.object :as object]
            [lt.util.dom :as dom]))

(defn deep-merge [& vals]
  (if (every? map? vals)
    (apply merge-with deep-merge vals)
    (last vals)))

(defn ^boolean atom? [x]
  (satisfies? IDeref x))

(defn ->content [x]
  (if (atom? x)
    (object/->content x)
    x))

(defn append-obj [parent child]
  (dom/append (->content parent) (->content child)))
