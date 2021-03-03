<template>
  <div class="Wrapper">
    <div class="tab">
      <div class="desc">{{$t('frontpage.subnetDesc')}}</div>
      <div class="tab-item" @click="notExistHint">{{$t('subnet.policyinfo')}}</div>
      <div class="tab-item" @click="notExistHint">{{$t('subnet.cloudexpo')}}</div>
      <div class="tab-item" @click="notExistHint">{{$t('subnet.tenderngbidding')}}</div>
      <div class="tab-item" @click="notExistHint">{{$t('subnet.investmentfinancing')}}</div>
      <!-- <div class="tab-item">{{$t('subnet.leasetransfer')}}</div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    notExistHint(){
      alert(this.$t("message.comingsoon"));
    }
  }
};
</script>
<style scoped>
.Wrapper {
  height: 50px;
  line-height: 50px;
  margin-top: -10px;
}
.desc {
  display: inline-block;
  background: #CAF982;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  padding: 0 20px;
  /* margin-right: -60px; */
}
.tab{
    display: inline-block;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.tab-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  border-radius: 5px;
  padding: 0 20px;
  margin: 5px 20px;
}
</style>
