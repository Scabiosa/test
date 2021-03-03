<template>
  <a-layout-header
    :style="{ padding: '0' }">

    <div class="header">

      <Logo/>
      <MainMenu/>
      <Tools/>
      <user-menu :theme="theme"/>
    </div>
  </a-layout-header>
</template>

<script>
  import Logo from "../../tools/Logo";
  import MainMenu from "../../tools/MainMenu";
  import Tools from "../../tools/Tools";
  export default {
    name: "InformationHeader",
    components: {Logo, MainMenu, Tools},

  }

</script>

<style lang="less" scoped>
  @height: 59px;
  .layout {
    min-height: 100vh !important;
    overflow-x: hidden;

    .ant-layout-header {
      height: @height;
      line-height: @height;

      .header {
        height: 64px;
        padding: 0 12px 0 0;
        //background: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
        position: relative;

        z-index: 2;
        color: white;
        height: @height;
        background-color: rgba(0, 0, 0, 0.73);
        transition: background 300ms;

        .user-wrapper {
          display: inline-block;
        }

        .tools-wrapper {
          float: right;
          height: 59px;
          overflow: hidden;

        }
      }
    }
  }
</style>
