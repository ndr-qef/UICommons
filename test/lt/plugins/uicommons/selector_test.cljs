(ns lt.plugins.uicommons.selector-test
  (:require [lt.plugins.uicommons.selector :as sel]
            [lt.objs.command :as cmd]))


;;;; common test paramters

(def items [{:key "0"
             :a "alpha"
             :b "beta"}
            {:key "1"
             :a "aleph"
             :b "bet"}])

(defn selector-transform [original scored highlighted item]
  (str "<h3>" highlighted "</h2><p>" (:a item) "</p>"))


;;;; test selector

(def selector (sel/selector {:key :key
                             :placeholder "selector"
                             :items (fn [] items)
                             :transform selector-transform}))

(cmd/command {:command ::test-selector
              :desc "UICommons: test selector"
              :options selector
              :exec (fn [])})


;;;; test exec-selector

(def exec-selector (sel/exec-selector {:key :key
                                       :placeholder "exec-selector"
                                       :items (fn [] items)
                                       :transform selector-transform}))

(cmd/command {:command ::test-exec-selector
              :desc "UICommons: test exec-selector"
              :options exec-selector
              :exec (fn [item]
                      (println "Exec selector: " item))})


;;;; test multimode-selector

(def test-modes [{:key :key
                  :button-text "Key"
                  :default true}
                 {:key :a
                  :button-text "a"}
                 {:key :b
                  :button-text "b"}])

(def multimode-selector (sel/multimode-selector {:key :key
                                                 :modes test-modes
                                                 :placeholder "multimode-selector"
                                                 :items (fn [] items)
                                                 :transform selector-transform}))

(cmd/command {:command ::test-multimode-selector
              :desc "UICommons: test multimode-selector"
              :options multimode-selector
              :exec (fn [item] )})
