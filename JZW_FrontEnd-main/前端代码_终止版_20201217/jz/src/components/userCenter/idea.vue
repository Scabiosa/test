<template>
  <div class="common">
    <div class="title">{{$t('suggestion.suggestion')}}</div>
    <el-button type="primary" class="button" size="medium">{{$t('button.send')}}</el-button>
    <el-input
      type="textarea"
      placeholder="请输入您的建议"
      v-model="textarea"
      maxlength="30"
      show-word-limit>
    </el-input>
  </div>
</template>

<script>
  export default {
    name: "idea",
    data(){
      return{
        textarea:[]
      }
    }
  }
</script>

<style scoped>
  .common{
    margin-top:20px;
    margin-left:55px;
    text-align:left;
  }
  .title{
    /*样式*/
    background-color:#3F3F3F;
    width:90px;
    height:31px;
    /*文字样式*/
    color:white;
    text-align:center;
    line-height:31px;
  }
  .button{
    float:right;
    margin-bottom:10px;
    margin-top:-40px;
  }
</style>
