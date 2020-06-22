import Vue from 'vue'
import App from './App.vue'
import router from './router'

//style
import './assets/sass/index.sass'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')