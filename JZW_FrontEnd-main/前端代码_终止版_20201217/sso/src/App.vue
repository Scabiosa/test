<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Header></Header>
    <div class="main">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./view/header";
import Footer from "./view/footer";
export default {
  name: 'App',
  components: {Footer, Header},
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<style>
#app {
  height: 100%;
}
.main{
}
</style>
