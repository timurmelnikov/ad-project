import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import * as fb from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  created () {
    const config = {
      apiKey: 'AIzaSyDop2Pm1MifPhEq898KQvP-3hKrIjI5TdA',
      authDomain: 'itc-ads-986a4.firebaseapp.com',
      databaseURL: 'https://itc-ads-986a4.firebaseio.com',
      projectId: 'itc-ads-986a4',
      storageBucket: 'itc-ads-986a4.appspot.com',
      messagingSenderId: '400160213250'
    }
    fb.initializeApp(config)
  }
})
