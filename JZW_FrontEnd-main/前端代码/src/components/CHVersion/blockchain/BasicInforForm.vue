<template>
  <div class="productForm">
    <StepBar v-bind:stepId="0"></StepBar>
    <el-form :model="productForm" :rules="rules" ref="ruleForm" label-position="right" class="demo-ruleForm" label-width="160px">
      <el-form-item label="产品名称" prop="name">
        <el-input v-model="productForm.name"></el-input>
      </el-form-item>
      <el-form-item label="产品型号" prop="number">
        <el-input v-model="productForm.number"></el-input>
      </el-form-item>
      <el-form-item label="营业执照代码" prop="licenseCode">
        <el-input v-model="productForm.licenseCode"></el-input>
      </el-form-item>
      <el-form-item label="生产企业名称" prop="companyName">
        <el-input v-model="productForm.companyName"></el-input>
      </el-form-item>
      <el-form-item label="产品发布日期" required>
        <el-col :span="11">
          <el-form-item prop="date">
            <el-date-picker type="date" placeholder="选择日期" v-model="productForm.date" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="产品简介" prop="desc">
        <el-input type="textarea" v-model="productForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
        <el-button @click="goBack">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import StepBar from "@/components/CHVersion/blockchain/StepBar";

export default {
  name: "BasicInforForm",
  components:{
    StepBar,
  },
  data() {
    return {
      productForm: {
        name: '',
        number: '',
        licenseCode: '',
        companyName: '',
        date: '',
        desc: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入产品名称', trigger: 'blur' },
        ],
        number: [
          { required: true, message: '请输入产品型号', trigger: 'blur' },
        ],
        licenseCode: [
          { required: true, message: '请输入营业执照代码', trigger: 'blur' },
        ],
        companyName: [
          { required: true, message: '请输入生产企业名称', trigger: 'blur' },
        ],
        date: [
          { type: 'date', required: true, message: '请选择产品发布日期', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写产品简介', trigger: 'blur' }
        ],

      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('nextStep');
          console.log('success submit!');
          this.$router.push({ path:'/inforFill2'  })
          // alert(JSON.stringify(this.productForm));
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    },
    goBack(){
      this.$emit('lastStep');
      this.$router.push({ path:'/productSubmiss'  })
    },
  },
}
</script>

<style scoped>
.productForm{
  margin: 20px auto;
  padding: 0 40px;
  width: 90%;
}


</style>