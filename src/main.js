import Vue from "vue";
import App from "./App.vue";
import "./styles/_globals.scss";

import "./assets/fonts/biotif/Biotif-Regular.ttf";
import "./assets/fonts/biotif/Biotif-Light.ttf";


Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
