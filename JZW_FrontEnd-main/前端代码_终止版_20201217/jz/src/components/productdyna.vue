<template>
    <div class="test">啦啦啦{{a}}</div>
</template>

<script>
    export default {
        name: "productdyna",
        data() {
            return {
                a:1
            }
        }
    }
</script>

<style scoped>
  .test{
      height: 40vh;
      background-color: #42b983;
  }
</style>
