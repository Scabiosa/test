<template>
<div product-picture-container>
  <StepBar v-bind:stepId="2"></StepBar>
  <h3>请上传产品实物图</h3>
  <div slot="tip" class="el-upload__tip">上传数量小于等于3个</div>
  <el-upload action="#" list-type="picture-card" :auto-upload="false" ref="pictureUpload" :limit="3" :on-exceed="handleExceed">
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
      <span class="el-upload-list__item-actions">
        <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
          <i class="el-icon-zoom-in"></i>
        </span>
        <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
  </el-upload>
  <el-dialog :visible.sync="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="">
  </el-dialog>
  <div class="foot-button">
    <el-button type="primary" @click="submit()">下一步</el-button>
    <el-button @click="goBack">上一步</el-button>
  </div>

</div>
</template>

<script>
import StepBar from "@/components/CHVersion/blockchain/StepBar";

export default {
  name: "ProductPicture",
  components:{
    StepBar,
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    };
  },
  methods: {
    handleRemove(file) {
      this.$refs.pictureUpload.handleRemove(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    goBack(){
      this.$emit('lastStep');
      this.$router.push({ path:'/inforFill2'  })
    },
    submit(){
      this.$emit('nextStep');
      console.log('success submit!');
      this.$router.push({ path:'/inforFill4'  })
    },
  }

}
</script>

<style scoped>
.product-picture-container{
  margin: 0 auto;
  width: 80%;
}
.foot-button{
  margin: auto;
  margin-top: 40px;
}
</style>