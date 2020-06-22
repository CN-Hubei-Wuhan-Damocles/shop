// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入自适应字体大小
import './assets/js/rem'
// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// 引入封装的ajax交互方法
import ajax from './api/ajax'
Vue.prototype.$ajax=ajax
// 引入自定义font字体
import './assets/font/iconfont.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
