import 'es6-promise/auto'
import 'babel-polyfill'

import Vue from 'vue'
import store from './store'
import router from './router'
import i18n from '@molgenis/molgenis-i18n-js/dist/molgenis-i18n.esm'

import { sync } from 'vuex-router-sync'
import { INITIAL_STATE } from './store/state'

import App from './App'

import 'bootstrap/dist/css/bootstrap.css' // Bootstrap import

sync(store, router)

if (window.__webpack_public_path__) {
  /* eslint-disable no-undef, camelcase */
  __webpack_public_path__ = window.__webpack_public_path__
  /* eslint-enable */
}

Vue.use(i18n, {
  lng: INITIAL_STATE.lng,
  fallbackLng: INITIAL_STATE.fallbackLng,
  namespace: 'biobank-explorer',
  callback () {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      store,
      router,
      template: '<App />',
      components: {App}
    })
  }
})