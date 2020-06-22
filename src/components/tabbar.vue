<template>
  <div class="tabbarWrap">
    <routerLink to="/home" tag="div" class="tabbar">
      <span class="icon iconfont icon-shouye"></span>
      <span>首页</span>
    </routerLink>
    <routerLink to="/vip" tag="div" class="tabbar">
      <span class="icon iconfont icon-yonghu"></span>
      <span>会员</span>
    </routerLink>
    <routerLink to="/cart" tag="div" class="tabbar">
      <span class="icon iconfont icon-gouwuche" style="font-size: 1.5rem"></span>
      <span>购物车</span>
    </routerLink>
    <routerLink to="/search" tag="div" class="tabbar">
      <span class="icon iconfont icon-suosou"></span>
      <span>搜索</span>
    </routerLink>
  </div>
</template>

<script>
export default {
  name: "tabbar"
};
</script>

<style scoped>
.tabbarWrap {
  background-color: rgb(247, 247, 247);
  width: 100%;
  height: 55px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-top: 1px solid #cccccc;
  display: flex;
  align-items: center;
}
.tabbar {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.8rem;
  color: rgb(146, 146, 146);
}
.tabbar span:nth-child(1) {
  font-size: 1.2rem;
}
.router-link-active {
  color: rgb(43, 194, 247);
}
</style>