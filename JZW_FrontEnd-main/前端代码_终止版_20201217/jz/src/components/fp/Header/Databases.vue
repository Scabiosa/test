<template>
  <div class="Wrapper">
    <div class="tab">
      <div class="tab-item" ><a href="/#/news">{{$t('netclass.news')}}</a></div>
      <div class="tab-item"><a href ="/#/products">{{$t('netclass.products')}}</a></div>
      <div class="tab-item"><a href="/#/companys">{{$t('netclass.companys')}}</a></div>
      <div class="tab-item"><a href="/#/services">{{$t('netclass.services')}}</a></div>
      <div class="tab-item"><a href="/#/purchases">{{$t('netclass.purchases')}}</a></div>
      <div class="tab-item"><a href="/#/technologys">{{$t('netclass.technologys')}}</a></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.Wrapper {
  height: 80px;
  line-height: 90px;
  background: #027DB4;
}
.tab{
    display: inline-block;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.tab-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  padding: 0 20px;
  margin: 5px 20px;
  background: white;
}
</style>