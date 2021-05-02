import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import router from './src/routes/index.js';
import store from './src/store/index.js';
import axios from 'axios';
import App from './App.vue';
import VueAxios from 'vue-axios';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
