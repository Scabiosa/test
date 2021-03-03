<template>
  <div class="wrapper">
    <a-layout class="layout">
      <GlobalHeader/>

    <!-- <a-layout-content id="diff-layout" :style="{ height: '100%', paddingTop: '112px' }"> -->
      <!-- <div style="margin: 12px 12px 0;"> -->
        <transition name="page-toggle">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      <!-- </div> -->
    <!-- </a-layout-content> -->

    <!-- <a-layout-footer style="padding: 0px">
      <GlobalFooter/>
    </a-layout-footer> -->
  </a-layout>
  </div>
</template>

<script>
    import GlobalHeader from '@/components/layouts/global/GlobalHeader'
    import GlobalFooter from '@/components/layouts/global/GlobalFooter'
    export default {
        name: "GlobalLayout",
        components: {
            GlobalFooter,
            GlobalHeader,
        },
    }
</script>

<style lang="less" scoped>
  .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
