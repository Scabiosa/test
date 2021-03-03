<template>
  <div>
    <div class="root-container">
      <Header></Header>
      <div class="title"><span>产品上链</span></div>
      <div class="container">
<!--        <StepBar v-bind:stepId="step"></StepBar>-->
<!--        <BasicInforForm v-if="step==0" @nextStep="stepAdd" @lastStep="stepSub"></BasicInforForm>-->
<!--        <Specification v-if="step==1" @nextStep="stepAdd" @lastStep="stepSub"></Specification>-->
<!--        <ProductPicture v-if="step==2" @nextStep="stepAdd" @lastStep="stepSub"></ProductPicture>-->
<!--        <IntellectualProperty v-if="step==3" @nextStep="stepAdd" @lastStep="stepSub"></IntellectualProperty>-->
<!--        <QualificationCertificate v-if="step==4" @nextStep="stepAdd" @lastStep="stepSub"></QualificationCertificate>-->
<!--        <UploadResult v-if="step==5" @clearStep="stepClear"></UploadResult>-->
        <router-view>
        </router-view>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/CHVersion/Header";
import Footer from "@/components/CHVersion/Footer";
// import BasicInforForm from "@/components/CHVersion/blockchain/BasicInforForm";
// // import StepBar from "@/components/CHVersion/blockchain/StepBar";
// import Specification from "@/components/CHVersion/blockchain/Specification";
// import ProductPicture from "@/components/CHVersion/blockchain/ProductPicture";
// import QualificationCertificate from "@/components/CHVersion/blockchain/QualificationCertificate";
// import UploadResult from "@/components/CHVersion/blockchain/UploadResult";
// import IntellectualProperty from "@/components/CHVersion/blockchain/IntellectualProperty";

export default {
  name: "InforFill",

  data(){
    return {
      step: 0,
    }
  },
  components: {
    Header,
    Footer,
    // BasicInforForm,
    // // StepBar,
    // Specification,
    // ProductPicture,
    // QualificationCertificate,
    // UploadResult,
    // IntellectualProperty
  },
  methods:{
    stepAdd(){
      this.step++;
      console.log(this.step);
    },
    stepSub(){
      this.step--;
      console.log(this.step);
    },
    stepClear(){
      this.step=0;
      console.log(this.step);
    }
  }
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
  line-height: 50px;
  font-weight: bold;
}

.title span {
  display: block;
  width: 100px;
  margin: auto;
}
.container{
  margin: 0 auto;
  width: 75%;
  border: 2px solid #797979;
  padding: 40px 0;
}

</style>