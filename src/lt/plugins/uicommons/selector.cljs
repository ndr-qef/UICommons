(ns lt.plugins.uicommons.selector
  (:require [lt.object :as object]
            [lt.objs.sidebar.command :as scmd]
            [lt.util.dom :as dom])
  (:require-macros [lt.macros :refer [defui behavior]]))


;;;; base selector

;;; defaults

(defn raise-selection [this item event]
  (dom/prevent event)
  (dom/stop-propagation event)
  (object/raise this :set-selection! item)
  (object/raise this :select! item))

(defn ->list-node [this itemize size]
  (for [x (range size)]
    (itemize this x)))

(defn default-template [this {:keys [size templates ::list-node]}]
  (let [{:keys [input item]} templates]
    [:div.filter-list.empty
     (input this)
     [:ul list-node]]))


(def defaults {:size 100
               :templates {:selector default-template
                           :input scmd/input
                           :item scmd/item}})


;;; constructor

(defn init-flist [this {:keys [size templates] :as opts}]
  (let [template (:selector templates)
        item (:item templates)
        list-node (->list-node this item size)]
    (object/merge! this (merge {:lis (vec list-node)} opts))
    (template this (merge opts {::list-node list-node}))))

(object/object* ::selector
                :tags #{:filter-list :uicommons.selector}
                :selected 0
                :items []
                :placeholder "search"
                :search ""
                :init (fn [this opts]
                        (init-flist this (merge defaults opts))))


(defn selector [opts]
  (let [sel (object/create ::selector opts)
        refresh! (or (:refresh-trigger opts) :refresh!)]
    (doto sel
      (object/refresh!)  ; reload tags/behaviors in case `opts` merges any
      (object/raise refresh!))))


;;;; extended selectors

(defn extended-selector [opts ext-tags]
  (selector (assoc-in opts [:tags] (apply conj #{:filter-list} ext-tags))))


;;;; command-friendly executor

(defn exec-selector [opts]
  (extended-selector opts [:uicommons.selector.exec]))

(behavior ::exec-selected!
          :triggers #{:select}
          :reaction (fn [this item]
                      (scmd/exec-active! item)))

