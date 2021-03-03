<template>
  <div class="step-container">
    <el-steps :space="200" :active="stepId" finish-status="success" align-center>
      <el-step title="基本信息"></el-step>
      <el-step title="技术规格"></el-step>
      <el-step title="产品实物图"></el-step>
      <el-step title="知识产权"></el-step>
      <el-step title="资质认定证书"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: "StepBar",
  props:{
    stepId: Number
  }
}
</script>

<style scoped>
.step-container{
  margin: auto;
  margin-bottom: 30px;
  width: 80%;
}
</style>