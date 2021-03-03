<template>
<div>
  <div class="root-container">
    <Header></Header>
    <div class="title"><span>产品存证</span></div>
    <router-link to="/productSubmiss">
      <div class="block">产品上链</div>
    </router-link>

    <div class="block">产品检索</div>
    <Footer></Footer>
  </div>
</div>
</template>

<script>
import Header from "@/components/CHVersion/Header";
import Footer from "@/components/CHVersion/Footer";


export default {
  name: "BlockChainHome",
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
  width: 100%;
  display: block;
  height: 50px;
  line-height: 30px;
  color: #000;
  font-family: "黑体";
  text-align: center;
  font-size: 20px;
  /*border: solid black 4px;*/
  line-height: 50px;
  font-weight: bold;
  /*background-color: #a90000;*/
}

.title span {
  display: block;
  width: 100px;
  margin: auto;
}
.block {
  display: inline-block;
  width: 220px;
  height: 100px;
  margin: 80px 50px;
  border: 2px #000 solid;
  line-height: 100px;
  border-radius: 5px;
}
</style>