<template>
  <div id="app">
    <!-- 顶部 -->
    <mt-header fixed title="Vue项目实战开发"></mt-header>
    <!-- 占位 -->
    <div style="height:40px;width:100%"></div>
    <router-view />
    <!-- 底部 -->
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/tabbar";
export default {
  name: "App",
  components: {
    Tabbar
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
