<template>
<el-container>
  <el-header>
    <el-menu mode="horizontal" style="background-color: #1F2D3D;" @select="handleItem">
      <el-menu-item index="/index">主页</el-menu-item>
      <el-menu-item index="/user">用户管理</el-menu-item>
      <el-menu-item index="/msg">信息管理</el-menu-item>
      <el-menu-item index="/order">订单管理</el-menu-item>
    </el-menu>

  </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
</el-container>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      activeIndex: this.$route.path
    }
  },
  methods:{
    handleItem:function (key,keyPath) {
      console.log("key:",key," keyPath:",keyPath);
      this.$router.push(key); //route-view  切换路由
    }
  }
}
</script>

<style>

</style>
