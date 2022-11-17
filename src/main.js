import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from "./router"

new Vue({
  render: h => h(App),
  // 注册路由： 底下写法 key:value 一致省略value [router小写]
  router


}).$mount('#app')
