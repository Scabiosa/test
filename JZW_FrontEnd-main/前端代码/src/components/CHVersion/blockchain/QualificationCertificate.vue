<template>
<div class="certificate-container">
  <StepBar v-bind:stepId="4"></StepBar>
  <h3>请上传产品资质认定证书</h3>
  <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
    <el-button slot="trigger" type="primary">选取文件</el-button>
<!--    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>-->
    <div slot="tip" class="el-upload__tip">文件大小不超过500kb</div>
  </el-upload>
  <div class="foot-button">
    <el-button type="primary" @click="submit()">下一步</el-button>
    <el-button @click="goBack">上一步</el-button>
  </div>
</div>
</template>

<script>
import StepBar from "@/components/CHVersion/blockchain/StepBar";

export default {
  name: "QualificationCertificate",
  components:{
    StepBar,
  },
  data() {
    return {
      fileList: [
        {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        ]
    };
  },
  methods: {
    // submitUpload() {
    //   this.$refs.upload.submit();
    // },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    goBack(){
      this.$emit('lastStep');
      this.$router.push({ path:'/inforFill4'  })
    },
    submit(){
      this.$emit('nextStep');
      console.log('success submit!');
      this.$router.push({ path:'/inforFill6'  })
    },
  }
}
</script>

<style scoped>
.certificate-container{
  margin: 0 auto;
  width: 80%;
}
.foot-button{
  margin: auto;
  margin-top: 40px;
}
</style>