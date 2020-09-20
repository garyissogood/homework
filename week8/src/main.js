import Vue from 'vue';
// 非同步工具
import axios from 'axios';
import VueAxios from 'vue-axios';
// JQuery
import jquery from 'jquery';
// bootstrap
import 'bootstrap';
// bus
import './bus';
// 驗證套件
import {
  ValidationObserver,
  ValidationProvider, configure, localize, extend,
} from 'vee-validate';
// 規則檔案（ex: email...）
import * as rules from 'vee-validate/dist/rules';
// 語系檔案
import zhTW from 'vee-validate/dist/locale/zh_TW.json';
// Loading 套件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App.vue';
import router from './router';
// require styles
import 'swiper/swiper-bundle.css';

Vue.use(VueAwesomeSwiper);

window.$ = jquery;

// 套件加入到 Vue 藍圖內(原型內)
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

Vue.component('Loading', Loading);

// vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
}); // 所有驗證規則
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
localize('tw', zhTW);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
