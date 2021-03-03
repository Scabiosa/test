<template>
<div class="abc-container">
  <h1>abc界面</h1>
  <ul id="main">
    <li><router-link  to="/abc1" >1界面</router-link></li>
    <li><router-link  to="/abc2">2界面</router-link></li>
  </ul>
  <router-view>
  </router-view>
</div>
</template>

<script>
export default {
  name: "ABC"
}
</script>

<style scoped>
.abc-container{
  width: 100%;
}
</style>