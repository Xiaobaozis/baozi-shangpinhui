//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router"

//使用插件
Vue.use(VueRouter)
    //引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

//先把VueRouter原型对象的push备份一份
let originPush =VueRouter.prototype.push

//重写push | replace
//第一个参数 ：告诉原来的push方法，往哪里跳（传递哪些参数）
VueRouter.prototype.push=function(loction,resolve,reject){
    if(resolve&&reject){
        //call||apply的区别
        //相同点：都可以调用函数一次，都可以篡改函数的上下文一次
        //不同点：call与apply ，call传递参数用逗号隔开，apply方法执行，传递数组
        originPush.call(this,loction,resolve,reject)
    }else{
        originPush.call(this,loction,()=>{},()=>{})
    }
}
// 配置路由
export default new VueRouter({
    //配置路由
    routes: [{
            path: '/home',
            component: Home,
            meta: { show: true }
        }, {
            path: '/login',
            component: Login,
            meta: { show: false }

        }, {
            path: '/register',
            component: Register,
            meta: {show:false }

        }, {
            path: '/search/:keyword?',
            component: Search,
            meta: { show: true },
            name:'search',
            //路由组件能不能传递Props数据？ 可以
            //布尔值的写法：只能传递params
            // props:true,
            //对象写法：额外给路由组件传递一些props
            // props:{a:1,b:2}
            //函数写法：可以params参数、query参数，通过props传递给路由组件
            props:($route)=>({ keyword:$route.params.keyword,k:$route.query.k})

        },
        //重定向，在项目跑起来的时候，访问/，立马让他定向到首页

        {
            path: '*',
            redirect: "/home"
        }
    ]
})