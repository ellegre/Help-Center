import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import "./styles/_globals.scss";

import "./assets/fonts/biotif/Biotif-Regular.ttf";
import "./assets/fonts/biotif/Biotif-Light.ttf";



Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

new Vue({
  render: h => h(App)
}).$mount("#app");

//Vue.use(Axios)