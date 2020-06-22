<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in arr">
          <img :src="item.image" alt />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "banner",
  data() {
    return {
      arr: []
    };
  },
  methods: {
    getData() {
      this.$ajax.get("/shop/getAds").then(res => {
        this.arr = res;
        this.$nextTick(() => {
          this.getSwiper();
        });
      });
    },
    getSwiper() {
      var swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
@import "swiper/css/swiper.min.css";
.swiper-container {
  width: 100%;
  height: 180px;
}
.swiper-slide {
  text-align: center;
  /* font-size: 18px; */
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>