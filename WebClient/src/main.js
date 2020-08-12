import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/bootstrap4-business-tycoon.min.css'

import Axios from "axios";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// axios挂载
Vue.prototype.$api = Axios;
//基地址
Vue.prototype.serverUrl = 'https://push.xuthus.cc';
//授权回调地址
Vue.prototype.github = 'https://github.com/login/oauth/authorize?client_id=&redirect_uri=';
Vue.prototype.gitee = 'https://gitee.com/oauth/authorize?client_id=&redirect_uri=&response_type=code&scope=user_info';
Vue.prototype.osc = 'https://www.oschina.net/action/oauth2/authorize?response_type=code&client_id=&state=xuthus&redirect_uri=';
// 当前年份
Vue.prototype.fullYear = new Date().getFullYear();

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
