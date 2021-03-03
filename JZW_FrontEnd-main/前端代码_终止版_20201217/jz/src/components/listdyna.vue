<template>
<div class="listdynadiv">
  <div class="maindiv">
    <div class="itemdiv">
      <listitem title="test1"/>
    </div>
    <div class="itemdiv">
      <listitem title="test2"/>
    </div>
  </div>

  <div class="maindiv">
    <div class="itemdiv">
      <listitem title="test3"/>
    </div>
    <div class="itemdiv">
      <listitem title="test4"/>
    </div>
  </div>
</div>
</template>

<script>
    import Listitem from "./listitem";
    export default {
        name: "listdyna",
        components: {Listitem}
    }
</script>

<style lang="less" scoped>
  .listdynadiv{
    margin-top: 20px;
    overflow: hidden;
    .maindiv {
      //float: left;
      //margin-left: 10%;
      width: 100%;
      overflow: hidden;
      margin-top: 5px;
      //height: 250px;
      .itemdiv {
        //float: left;
        display: inline-block;
        background-color: rgba(44, 88, 69, 0.06);
        //margin-top: 10px ;
        //margin-left: 10px;
        width: 49.8%;
        height: 500px;
        //overflow:auto;
      }
    }
  }
</style>
