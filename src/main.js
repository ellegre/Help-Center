import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from 'vue-axios'
import "./styles/_globals.scss";

import "./assets/fonts/biotif/Biotif-Regular.ttf";
import "./assets/fonts/biotif/Biotif-Light.ttf";



Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App)
}).$mount("#app");

Vue.use(VueAxios, axios)