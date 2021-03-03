<template>
  <div class="footer">

    <div class="copyright">
      Copyright
      <a-icon type="copyright"/>
      2019 <span>{{$t('pub.copyright')}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GlobalFooter"
    }
</script>

<style lang="less" scoped>
  .footer {
    padding: 0 16px;
    margin: 48px 0 24px;
    text-align: center;
    background: #000000;
    height: 50px;
  .copyright {
    padding: 10px;
    color: rgba(255, 255, 255, 0.45);
    font-size: 19px;
  }
  }
</style>
