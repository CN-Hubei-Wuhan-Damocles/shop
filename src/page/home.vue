<template>
  <div class="home">
    <banner></banner>
    <div class="select">
      <router-link tag="div" to="/home/news">
        <img src="../../static/img/menu1.png" alt />
        <span>我的页面</span>
      </router-link>
      <router-link tag="div" to="/home/imgs">
        <img src="../../static/img/menu2.png" alt />
        <span>点击查看</span>
      </router-link>
      <router-link tag="div" to="/home/goods">
        <img src="../../static/img/menu3.png" alt />
        <span>应用列表</span>
      </router-link>
      <router-link tag="div" to="/home/message">
        <img src="../../static/img/menu4.png" alt />
        <span>留言反馈</span>
      </router-link>
      <router-link tag="div" to="/home/videos">
        <img src="../../static/img/menu5.png" alt />
        <span>视频专区</span>
      </router-link>
      <router-link tag="div" to="/home/contact">
        <img src="../../static/img/menu6.png" alt />
        <span>联系我们</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Banner from "../components/banner";
export default {
  name: "home",
  components: {
    Banner
  }
};
</script>

<style scoped>
.select {
  font-size: 0.8rem;
  color: #666666;
  display: flex;
  flex-wrap: wrap;
}
.select > div {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}
.select > div img {
  width: 75%;
  margin-bottom: 10px;
}
</style>
