<template>
  <a-layout class="layout">
    <a-layout>
      <InformationBaseHeader/>
    </a-layout>
  </a-layout>
</template>

<script>
    import InformationBaseHeader from "./InformationBaseHeader";
    export default {
        name: "InformationBaseLayout",
        components: {InformationBaseHeader,}
    }
</script>

<style lang="less" scoped>
  body {
    // 打开滚动条固定显示
    overflow-y: scroll;

    &.colorWeak {
      filter: invert(80%);
    }
  }
  .layout{
    .layout-content {
      margin: 24px 0px 0px;
      height: 64px;
      padding: 0 12px 0 0;
    }
  }

</style>
