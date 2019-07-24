// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入gswweb所需代码
import gswweb from 'gswweb'
import gswwebcss from 'gswweb/dist/gswweb.min.css'
Vue.use(gswweb)
//引入gswweb所需代码

//引入es7所需代码
import "@babel/polyfill"
//引入es7所需代码

// 引入自身插件
import gswPay from './lib/gswPay/lib/index'
Vue.use(gswPay);
// 使用插件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
