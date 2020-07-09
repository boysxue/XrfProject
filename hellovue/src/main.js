import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import echarts from 'echarts'
import axios from 'axios'
import moment from 'moment'; 

Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.prototype.$moment = moment
// router.beforeEach((to, from, next) => {
//   if(store.state.userInfo || to.path=="/login") {
//     next()
//   } else {
//     next({
//       path:'/login'
//     })
//   }
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
