(ns lt.plugins.uicommons
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.plugins.uicommons.selector :as selector]
            [lt.plugins.uicommons.utilia :as utl])
  (:require-macros [lt.macros :refer [behavior]]))

(behavior ::overrule-defaults!
          :trigger {:object.instant :overrule-defaults!}
          :type :user
          :reaction (fn [this defaults]
                      (utl/deep-merge! this {:defaults defaults})))

