import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './util/rem'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Picker } from 'vant';
import { Dialog } from 'vant';
import { DatetimePicker } from 'vant';

Vue.use(DatetimePicker);
Vue.use(Dialog);
Vue.use(Picker);
Vue.use(Vant);
Vue.use(VueRouter,)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://apiz.forhoo.com.cn'  //关键代码
// 是否允许跨域携带cookie信息
// axios.defaults.withCredentials = true;
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
