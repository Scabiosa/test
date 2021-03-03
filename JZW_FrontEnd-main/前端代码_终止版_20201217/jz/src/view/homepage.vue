<template>
    <div>
      <!-- <searchpage>
        <advertisement/>
        <listdyna/>
      </searchpage> -->
      <fp></fp>
    </div>
</template>

<script>
  import GlobalLayout from "../components/layouts/global/GlobalLayout";
  import searchpage from "../components/searchpage";
  import advertisement from "../components/advertisement";
  import listdyna from "../components/listdyna";
  import fp from "../components/fp/FrontPage/FrontPage"
    export default {
        name: "homepage",
        components: {
            GlobalLayout,
            searchpage,
            advertisement,
            listdyna,
            fp,
        },
    }
</script>

<style scoped>

</style>
