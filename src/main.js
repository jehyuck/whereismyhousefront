import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import select from "@/assets/js/selectbox-search"

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import { BootstrapVue, IconsPlugin  } from 'bootstrap-vue';
// import "@/assets/js/.min.js";
// import jsbn from "@/assets/js/jsbn"
// import jsbn from "@/assets/js/"

require('@/assets/css/bootstrap.min.css');
require('@/assets/css/LineIcons.2.0.css');
require('@/assets/css/animate.css');
require('@/assets/css/tiny-slider.css');
require('@/assets/css/glightbox.min.css');
require('@/assets/css/main.css');

// Vue.use(jsbn);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// Vue.use(select);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
