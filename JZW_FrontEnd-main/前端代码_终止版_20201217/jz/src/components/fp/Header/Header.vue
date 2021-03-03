<template>
  <div>
      <!-- <Nav></Nav> -->
      <Subnets></Subnets>
      <Databases></Databases>
  </div>
</template>
<script>
import Nav from "./Nav"
import Subnets from "./Subnets"
import Databases from "./Databases"
export default {
  components: {
      Nav,
      Subnets,
      Databases,
  }
};
</script>
<style scoped>

</style>