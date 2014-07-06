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
