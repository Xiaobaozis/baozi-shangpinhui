<!--  -->
<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、search显示 ，登录、注册隐藏 -->
    <!-- 利用路由元素信息解决当前问题的好处：一行代码就可以解决 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
//引入
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //通知vuex 发请求，获取数据，存储于仓库当中
    //派发一个action，获取商品分类的三级列表的数据
    this.$store.dispatch("categoryList");
  },
};
</script>
<style lang="less" scoped></style>
