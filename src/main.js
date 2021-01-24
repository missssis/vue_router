import Vue from 'vue'
import App from './App.vue'
import store from "./store";

//引入路由
import router from './router.js'

Vue.config.productionTip = false

new Vue({

  store,
  router,
  render: h => h(App),
}).$mount('#app')
