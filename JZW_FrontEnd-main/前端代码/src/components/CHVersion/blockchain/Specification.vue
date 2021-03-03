<template>
<div class="specification-container">
  <StepBar v-bind:stepId="1"></StepBar>
  <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
    <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains" :key="domain.key"
        :prop="'domains.' + index + '.value'"
        :rules="{required: true, message: '键值对不能为空', trigger: 'blur'}">
      <el-col :span="7"><el-input v-model="domain.key"></el-input></el-col>
      <el-col :span="12"><el-input v-model="domain.value"></el-input></el-col>
      <el-button @click.prevent="removeDomain(domain)">删除</el-button>
    </el-form-item>
    <el-form-item>
      <el-button @click="addDomain">增加键值对</el-button>
      <el-button type="primary" @click="submitForm('dynamicValidateForm')">下一步</el-button>
      <el-button @click="goBack">上一步</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import StepBar from "@/components/CHVersion/blockchain/StepBar";

export default {
  name: "Specification",
  components:{
    StepBar,
  },
  data() {
    return {
      dynamicValidateForm: {
        domains: [{
          key: '重量',
          value: '10kg',
        }],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('nextStep');
          console.log('success submit!');
          this.$router.push({ path:'/inforFill3'  })
          // alert(JSON.stringify(this.dynamicValidateForm));
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    goBack(){
      this.$emit('lastStep');
      this.$router.push({ path:'/inforFill1'  })
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        key: '',
        value: '',
      });
    }
  }
}
</script>

<style scoped>
.specification-container{
  margin: 0 auto;
  width: 80%;
}
</style>