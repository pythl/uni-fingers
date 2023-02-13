import Vue from "vue";
import App from "./App";
import uView from "uview-ui";
import http from "./http/index";
import store from "./store";
Vue.use(uView);
Vue.config.productionTip = false;
Vue.prototype.$http = http;
App.mpType = "app";
Vue.prototype.$store = store;
const app = new Vue({
  store,
  ...App,
});
app.$mount();
