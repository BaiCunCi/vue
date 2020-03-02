// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Iheader from "./components/Iheader"
import Ilist from "./components/Ilist"

Vue.config.productionTip = false;
Vue.component(Iheader.name,Iheader);
Vue.component(Ilist.name,Ilist);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
