<template>
  <div>
    <el-carousel trigger="click" height="300px" :interval="5000">
      <el-carousel-item v-for="(item,index) in content.image" :key="index">
        <img :src="item" class="carousel-img"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    content: Object
  }
};
</script>
<style scoped>
.el-carousel {
  margin-top: 20px;
}
.carousel-img{
  width: 100%;
  height: 280px;
}
</style>