//对于axios 进行二次封装
import axios from "axios";
//引入进度条
import nprogress from 'nprogress';
//引入进度条样式
import "nprogress/nprogress.css"
//nprogress 里面的方法 start：进度条开始 done:进度条结束

//1.利用axios 对象的方法create, 去创建一个axios实例
//2.request就是axios，只不过稍微配置一下
const requests =axios.create({
    //配置对象
    //基础路径，发送请求的时候，路径当中就会出现api
    baseURL:'/mock',
    //代表请求超时的时间5秒
    timeout:5000,
});

//请求拦截器：再发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((confing)=>{
    //confing: 配置对象，对象里面有一个属性很重要，headers 请求头
    //进度条开始
    nprogress.start()
    return confing
});

//响应拦截器：
requests.interceptors.response.use((res)=>{
    //成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情
    //进度条结束
    nprogress.done()
    return res.data;
    
},(error)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('faile'))
})


//对外暴露
export default requests;