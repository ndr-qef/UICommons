(ns lt.plugins.uicommons.selector-test
  (:require [lt.plugins.uicommons.selector :as sel]
            [lt.objs.command :as cmd]))


;;;; common test parameters

(def greek-alphabet ["alpha" "beta" "gamma" "delta" "epsilon" "zeta" "eta"
                     "theta" "iota" "kappa" "lambda" "mu" "nu" "xi" "omicron"
                     "pi" "rho" "sigma" "tau" "upsilon" "phi" "chi" "psi"
                     "omega"])
(def hebrew-abjad ["aleph" "bet" "gimel" "daled" "he" "vav" "zayin" "heth"
                   "teth" "yud" "kaph" "lamed" "mem" "nun" "samech" "aying"
                   "pe" "tsade" "qoph" "reish" "shin" "taw"])
(defn items [n]
  (vec (for [i (range n)]
         {:key (str i)
          :greek (nth (cycle greek-alphabet) i)
          :hebrew (nth (cycle hebrew-abjad) i)})))

(defn selector-transform [original scored highlighted item]
  (str "<h3>" highlighted "</h3><p>" (:greek item) "</p>"))


;;;; test selector

(def selector (sel/selector {:key :key
                             :placeholder "selector"
                             :items (fn [] (items 30))
                             :transform selector-transform}))

(cmd/command {:command ::test-selector
              :desc "UICommons: test selector"
              :options selector
              :exec (fn [])})


;;;; test exec-selector

(def exec-selector (sel/exec-selector {:key :key
                                       :placeholder "exec-selector"
                                       :items (fn [] (items 30))
                                       :transform selector-transform}))

(cmd/command {:command ::test-exec-selector
              :desc "UICommons: test exec-selector"
              :options exec-selector
              :exec (fn [item]
                      (println "Exec selector: " item))})


;;;; test multimode-selector

(def test-modes [{:key :key
                  :button-text "key"
                  :default true}
                 {:key :greek
                  :button-text "greek"}
                 {:key :hebrew
                  :button-text "hebrew"}])

(def multimode-selector (sel/multimode-selector {:key :key
                                                 :modes test-modes
                                                 :placeholder "multimode-selector"
                                                 :items (fn [] (items 30))
                                                 :transform selector-transform}))

(cmd/command {:command ::test-multimode-selector
              :desc "UICommons: test multimode-selector"
              :options multimode-selector
              :exec (fn [item])})
