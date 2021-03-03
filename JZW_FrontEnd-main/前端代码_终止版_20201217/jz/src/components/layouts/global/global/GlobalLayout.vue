<template>
  <a-layout class="layout">
  <a-layout>
    <GlobalHeader/>
  </a-layout>

  <a-layout-content :style="{ height: '100%' }">
    <div style="margin: 12px 12px 0;">
      <transition name="page-toggle">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </div>
  </a-layout-content>

  <a-layout-footer style="padding: 0px">
    <GlobalFooter/>
  </a-layout-footer>
</a-layout>
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
  body {
    // 打开滚动条固定显示
    overflow-y: scroll;

    &.colorWeak {
      filter: invert(80%);
    }
  }
  .layout{
    .layout-content {
      margin: 24px 24px 0px;
      height: 64px;
      padding: 0 12px 0 0;
    }
  }

</style>
