import Vue from 'vue'
import App from './App.vue'

require("./scss/index.scss");

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')