<template>
<div class="intellectual-property-container">
  <StepBar v-bind:stepId="3"></StepBar>
  <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
    <div class="patent">
      <div class="head">
        <div class="title">
          <h3>产品外观设计专利</h3>
        </div>
        <div class="btn">
          <el-button @click="addDomain">增加专利数</el-button>
        </div>
      </div>
      <div v-for="domain in dynamicValidateForm.domains" :key="domain.key" class="content">
        <div class="patent-content">
          <el-form-item label="名称">
            <el-input v-model="domain.name"></el-input>
          </el-form-item>
          <el-form-item label="专利号">
            <el-input v-model="domain.number"></el-input>
          </el-form-item>
        </div>
        <div class="patent-btn">
          <el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </div>
      </div>
    </div>
    <div class="patent">
      <div class="head">
        <div class="title">
          <h3>产品商标</h3>
        </div>
        <div class="btn">
          <el-button @click="addDomain1">增加商标数</el-button>
        </div>
      </div>
      <div v-for="domain in dynamicValidateForm.domains1" :key="domain.key" class="content">
        <div class="patent-content">
          <el-form-item label="注册号">
            <el-input v-model="domain.number"></el-input>
          </el-form-item>
        </div>
        <div class="patent-btn">
          <el-button @click.prevent="removeDomain1(domain)">删除</el-button>
        </div>
      </div>
    </div>
  </el-form>
  <div class="foot-button">
    <el-button type="primary" @click="submit()">下一步</el-button>
    <el-button @click="goBack">上一步</el-button>
  </div>
</div>
</template>

<script>
import StepBar from "@/components/CHVersion/blockchain/StepBar";

export default {
  name: "IntellectualProperty",
  components:{
    StepBar,
  },
  data() {
    return {
      dynamicValidateForm: {
        domains: [{
          name: 'XXX1',
          number: 1234,
        },{
          name: 'XXX2',
          number: 12345,
        }],
        domains1: [{
          number: 1234,
        },{
          number: 12345,
        }],
      }
    };
  },
  methods: {
    goBack(){
      this.$emit('lastStep');
      this.$router.push({ path:'/inforFill3'  })
    },
    submit(){
      this.$emit('nextStep');
      console.log('success submit!');
      this.$router.push({ path:'/inforFill5'  })
    },
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       console.log('success submit!');
    //       this.$router.push({ path:'/inforFill5'  })
    //     } else {
    //       console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // },

    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        name: 'x',
        number: 0,
        key: Date.now(),
      });
    },
    removeDomain1(item) {
      var index = this.dynamicValidateForm.domains1.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains1.splice(index, 1)
      }
    },
    addDomain1() {
      this.dynamicValidateForm.domains1.push({
        number: 0,
        key: Date.now(),
      });
    },
  }
}
</script>

<style scoped>
.foot-button{
  margin: auto;
  margin-top: 40px;
}
.patent{
  border: #797979 solid 2px;
  width: 80%;
  margin: 10px auto;
}
.content{
  border: #797979 solid 2px;
  width: 80%;
  margin: 10px auto;
  padding-top: 10px;
}
.head{
  width: 80%;
}
.btn{
  width:20%;
  display: inline-block;
}
.title{
  display: inline-block;
  width: 80%;
}
.patent-content{
  width: 75%;
  display: inline-block;
  /*border: solid 1px #000;*/
}
.patent-btn{
  width: 20%;
  /*border: solid 1px #000;*/
  display: inline-block;

}

</style>