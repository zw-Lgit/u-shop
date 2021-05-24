import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入vant
import  Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// 全局引入样式和rem
import './assets/css/reset.css'
import './assets/js/remScale'

// 全局引入过滤器
import './filters'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
