(ns lt.plugins.uicommons.selector
  (:require [lt.object :as object]
            [lt.objs.sidebar.command :as scmd]
            [lt.util.dom :as dom]
            [lt.plugins.uicommons.utilia :as utl :refer [deep-merge]])
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
  (let [input (:input templates)]
    [:div.filter-list.uicommons_selector.empty
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
                        (init-flist this (deep-merge defaults opts))))


(defn selector [opts]
  (let [sel (object/create ::selector opts)
        refresh! (or (:refresh-trigger opts) :refresh!)]
    (doto sel
      (object/refresh!)  ; reload tags/behaviors in case `opts` merges any
      (object/raise refresh!))))


;;;; extended selectors

(defn extended-selector [opts ext-tags]
  (selector (assoc-in opts [:tags] (apply conj #{:filter-list :uicommons.selector} ext-tags))))


;;;; command-friendly executor

(defn exec-selector [opts]
  (extended-selector opts [:uicommons.selector.exec]))

(behavior ::exec-selected!
          :triggers #{:select}
          :reaction (fn [this item]
                      ;; FIXME: decouple from sidebar
                      (scmd/exec-active! item)))


;;;; multimode selector

(defn order-comparison [x y]
  (let [x-priority (:order x)
        y-priority (:order y)
        comparison (compare x-priority y-priority)]
    (if-not (zero? comparison)
      comparison
      (compare x y))))


;;; defaults

(def css-mode-prefix "uicommons_selector-search-by-")

(defui mode-button [this mode]
  (let [default? (:default mode)
        button-text (:button-text mode)
        id  (::id mode)]
    [:div {:id id
           :class (utl/->class-str "button"
                                   "mode-selector"
                                   (if default? "active-mode"))}
     button-text])
  :click (fn [] (object/raise this :search-by mode)))

(defn multimode-template [this {:keys [modes templates ::list-node]}]
  (let [{:keys [input mode-button]} templates]
   [:div.filter-list.uicommons_selector.empty
    (input this)
    [:div.mode-selection (map #(mode-button this %) modes)]
    [:ul list-node]]))


(def multimode-defaults {:templates {:selector multimode-template
                                     :mode-button mode-button}})


;;; methods for changing mode

(defn complementary-modes [selector new-mode]
  (let [modes (:modes @selector)]
    (remove #(= new-mode %) modes)))

(defn ->str-id [val-id] (str "#" val-id))

(defn emphasize-mode [msel mode]
  (let [active-id (->str-id (::id mode))
        inactive-ids (map #(->str-id (::id %))
                           (complementary-modes msel mode))]
    (dom/add-class (dom/$ active-id) :active-mode)
    (doseq [id inactive-ids]
      (dom/remove-class (dom/$ id) :active-mode))))


(behavior ::search-by
          :triggers #{:search-by}
          :reaction (fn [this search-mode]
                      (object/merge! this search-mode)
                      (emphasize-mode this search-mode)))


;;; constructor

(defn add-id [modes]
  (for [n (range (count modes))]
    (merge (nth modes n) {::id (str css-mode-prefix n)})))


(defn multimode-selector [opts]
  (let [opts (deep-merge multimode-defaults
                         (update-in opts [:modes] add-id))]
    (extended-selector opts [:uicommons.selector.multimode])))

