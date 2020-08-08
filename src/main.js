import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import VueAnime from "vue-animejs";
import router from './router'

Vue.use(VueAnime);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
