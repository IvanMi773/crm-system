import Vue from "vue";
import Vuelidate from 'vuelidate'
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import 'materialize-css/dist/js/materialize'
import dateFilter from '@/filters/DateFilter'
import MessagePlugin from '@/utils/Message.plugin'

Vue.use(Vuelidate)
Vue.use(MessagePlugin)

Vue.config.productionTip = false;
Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
