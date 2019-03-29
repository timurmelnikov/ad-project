import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import * as fb from 'firebase'
import * as cfg from './fb_cfg'

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
    fb.initializeApp(cfg.config)
    fb.auth().onAuthStateChanged(user => {
      if(user){
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
