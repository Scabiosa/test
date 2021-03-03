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
  name: "footer",
  components: {}
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  text-align: center;
  background: aliceblue;
  border: lightgrey 1px solid;
  height: 50px;
}
  .copyright {
    padding: 10px;
    color: darkgray;
    font-size: 19px;
  }

</style>
