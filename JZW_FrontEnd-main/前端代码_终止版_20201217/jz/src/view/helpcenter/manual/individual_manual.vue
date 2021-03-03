<template>
  <iframe
    width="100%"
    height="100%"
    frameborder="0"
    :src=manualURL ></iframe>
</template>

<script>
    export default {
        name: "individual_manual",
      data(){
          return{
            manualURL: '../../../static/userManual_preview/userManual.html',
          }
      },
      created() {
      }
    }
</script>

<style scoped>

</style>
