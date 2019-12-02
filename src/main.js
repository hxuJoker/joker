import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from "view-design"
import 'view-design/dist/styles/iview.css'
import config from '@/config'
import { post, fetch }  from "./api/axios";
Vue.prototype.$get=fetch;
Vue.prototype.$post=post;
Vue.config.productionTip = false
Vue.prototype.$config = config
Vue.use(ViewUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
