<template>
<div class="upload-result-container">
  <StepBar v-bind:stepId="5"></StepBar>
  <div class="result-text">
    <h4>商品信息已经成功提交!</h4>
  </div>
  <div class="foot-button">
    <router-link to="/inforFill1">
      <el-button @click="informationFill">再次上链</el-button>
    </router-link>
    <router-link to="/productSubmiss">
      <el-button>返回</el-button>
    </router-link>
  </div>
</div>
</template>

<script>
import StepBar from "@/components/CHVersion/blockchain/StepBar";

export default {
  name: "UploadResult",
  components:{
    StepBar,
  },
  methods:{
    informationFill(){
      this.$emit('clearStep');
    }

  }
}
</script>

<style scoped>
.upload-result-container{
  margin: 0 auto;
  width: 80%;
}
.result-text{
  border: #797979 solid 2px;
  width: 60%;
  height: 80px;
  margin: 0 auto;
}
.foot-button{
  margin: auto;
  margin-top: 40px;
}
</style>