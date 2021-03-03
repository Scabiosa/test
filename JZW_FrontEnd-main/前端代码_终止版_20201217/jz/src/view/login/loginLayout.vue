<template>
  <div id="loginLayout">
    <Header></Header>
    <div class="main">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./header";
import Footer from "../../components/layouts/global/GlobalFooter";
export default {
  name: "loginLayout",
  components:{Header, Footer},
}
</script>

<style scoped>

</style>
