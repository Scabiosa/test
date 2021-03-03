<template>
  <div class="FrontPage">
    <Header></Header>
    <Search></Search>
    <AD></AD>
    <News></News>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../Header/Header'
import Search from '../Search/Search'
import News from '../News/News'
import AD from '../AD/AD'
import Footer from '../Footer/Footer'

export default {
  name: "FrontPage",
  components: {
      Header,
      Search,
      News,
      AD,
      Footer
  }
};
</script>
<style scoped>
.FrontPage{
  overflow: hidden;
  width: 100%;
}
</style>