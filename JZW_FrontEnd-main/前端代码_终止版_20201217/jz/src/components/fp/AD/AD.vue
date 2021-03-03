<template>
  <div>
    <div class="block">
      <ADblock v-for="(ad,index) in ads" :key="index" :content="ad" class="adb"></ADblock>
    </div>
  </div>
</template>
<script>
import ADblock from "./ADblock";
export default {
  data() {
    return {
      ads:[
        {
          image: [
            require('./swiper1.jpg'),
            require('./swiper2.jpg'),
            require('./swiper3.jpg'),
            require('./swiper4.jpg'),
          ],
          fn:'a'
        },
        {
          image: [
            require('./swiper1.jpg'),
            require('./swiper2.jpg'),
            require('./swiper3.jpg'),
            require('./swiper4.jpg'),
          ],
        },
        {
          image: [
            require('./swiper1.jpg'),
            require('./swiper2.jpg'),
            require('./swiper3.jpg'),
            require('./swiper4.jpg'),
          ],
        },
        {
          image: [
            require('./swiper1.jpg'),
            require('./swiper2.jpg'),
            require('./swiper3.jpg'),
            require('./swiper4.jpg'),
          ],
        },
        {
          image: [
            require('./swiper1.jpg'),
            require('./swiper2.jpg'),
            require('./swiper3.jpg'),
            require('./swiper4.jpg'),
          ],
        },
        {
          image: [
            require('./swiper1.jpg'),
            require('./swiper2.jpg'),
            require('./swiper3.jpg'),
            require('./swiper4.jpg'),
          ],
        },
        {
          image: [
            require('./swiper1.jpg'),
            require('./swiper2.jpg'),
            require('./swiper3.jpg'),
            require('./swiper4.jpg'),
          ],
        },
        {
          image: [
            require('./swiper1.jpg'),
            require('./swiper2.jpg'),
            require('./swiper3.jpg'),
            require('./swiper4.jpg'),
          ],
        },
        {
          image: [
            require('./swiper1.jpg'),
            require('./swiper2.jpg'),
            require('./swiper3.jpg'),
            require('./swiper4.jpg'),
          ],
        },
        {
          image: [
            require('./swiper1.jpg'),
            require('./swiper2.jpg'),
            require('./swiper3.jpg'),
            require('./swiper4.jpg'),
          ],
        },
      ],
    };
  },
  created(){
    // axios获取数据
  },
  components: {
    ADblock
  }
};
</script>
<style scoped>
.block{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

}
.adb{
  width: 19%;
  display: inline-block;
}
</style>
