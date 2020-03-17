import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/fonts/iconfont.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
import Echarts from 'echarts'
Vue.prototype.echarts = Echarts
Vue.use(Echarts);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
