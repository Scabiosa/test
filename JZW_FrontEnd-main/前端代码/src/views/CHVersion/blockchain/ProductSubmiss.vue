<template>
  <div>
    <div class="root-container">
      <Header></Header>
      <div class="title"><span>产品上链</span></div>
      <!--    <router-link to="/layout">-->
      <!--    </router-link>-->
      <div class="container">
        <router-link to="/inforFill1">
          <div class="block">新产品上链</div>
        </router-link>

        <div class="block">待审核上链产品</div>
        <div class="block">已上链产品</div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/CHVersion/Header";
import Footer from "@/components/CHVersion/Footer";

export default {
  name: "ProductSubmiss",
  components: {
    Header,
    Footer,
  },
}
</script>

<style scoped>
.root-container {
  width: 1180px;
  margin: auto;
}

.title {
  /*width: 100%;*/
  display: block;
  height: 40px;
  line-height: 40px;
  color: #000;
  font-family: "黑体";
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
  /*background-color: #a90000;*/
}

.title span {
  display: block;
  width: 100px;
  margin: auto;
  /*border: solid #797979 2px;*/
}
.block {
  display: inline-block;
  width: 200px;
  height: 100px;
  margin: 80px 50px;
  border: 2px #000 solid;
  line-height: 100px;
  border-radius: 5px;
}
.container{
  border: 2px solid #797979;
  width: 80%;
  margin: 30px auto;
}
</style>