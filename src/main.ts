import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 使用elementUI组件库 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

/* 配置后端请求 */
import server from './common/server';
Vue.prototype.$server = server;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
