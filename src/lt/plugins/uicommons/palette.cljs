(ns lt.plugins.uicommons.palette
  (:require [lt.object :as object]
            [lt.objs.command :as command]
            [lt.util.dom :as dom]
            [crate.binding :refer [bound]]
            [lt.plugins.uicommons.utilia :as utl :refer [deep-merge]])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn ->class [palette opts]
  (let [{:keys [classes visible?]} palette]
    (apply utl/->class-str
           (conj classes
                 (if visible? "visible")))))

;;;; defaults

(def classes #{"uicommons"
               "palette auto"
               "overlay"})

(defn palette-template [this obj|node opts]
  [:div {:class (bound this #(->class % opts))}
   (utl/->content obj|node)])

(def statuses {:collapsed {:classes #{"collapsed"}
                           :template :palette}
               :mini      {:classes #{"small"}
                           :template :palette}
               :normal    {:classes #{"normal"}
                           :template :palette}
               :auto      {:classes #{"auto"}
                           :template :palette}})

(def defaults {:classes classes
               :templates {:palette palette-template}
               :statuses statuses})

(behavior ::show
          :triggers #{:show!}
          :reaction (fn [this]
                      (object/merge! this {:visible? true})))

(behavior ::hide
          :triggers #{:hide!}
          :reaction (fn [this]
                      (object/merge! this {:visible? false})))

(behavior ::toggle
          :triggers #{:toggle!}
          :reaction (fn [this]
                      (object/update! this [:visible?] not)))


;;;; status and minification

(defn status! [palette status]
  (let [status-map (:statuses @palette)
        old ((:status @palette) status-map)
        new (status status-map)
        minus (:classes old)
        plus (:classes new)
        tpl (:template new)
        tpl-old (:template old)]
    (object/merge! palette {:status status})
    (object/update! palette [:classes] #(apply conj (apply disj % minus) plus))
    (when-not (keyword-identical? tpl tpl-old)
      (utl/re-template palette tpl))))

(behavior ::status!
          :triggers #{:set-status!}
          :reaction (fn [this status-key]
                      (status! this status-key)))


;;; constructor

(defn init-palette [this content {:keys [templates] :as opts}]
  (let [template (:palette templates)]
    (template this content opts)))

(object/object* ::palette
                :tags #{:uicommons.palette}
                :visible? false
                :minifiers {}
                :status :normal
                :defaults defaults
                :init (fn [this content opts]
                        (let [opts (deep-merge defaults opts)]
                          (object/merge! this opts)
                          (init-palette this content opts))))

(defn palette [content & [opts]]
  (object/create ::palette content opts))
