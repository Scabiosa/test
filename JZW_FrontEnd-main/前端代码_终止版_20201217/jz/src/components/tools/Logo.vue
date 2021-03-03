<template>
  <div class="logo">
    <router-link :to="{name:'homepage'}">
      <img src="~@/assets/logo.png" alt="logo">
      <h1 v-if="showTitle">{{title}}</h1>
    </router-link>
  </div>
</template>

<script>
    import { mixin } from '@/utils/mixin.js'

    export default {
        name: "Logo",
        mixins: [mixin],

        props:{
            title: {
                type: String,
                default: 'YZ web',
                required: false
            },
            showTitle:{
                type: Boolean,
                default: true,
                required: false
            }
        }
    }
</script>

<style lang="less" scoped>
  /*缩小首页布 局顶部的高度*/
  @height: 59px;
  .layout {
    .ant-layout-header {
      .header {
        .logo {
          height: @height !important;
          line-height: @height !important;
          box-shadow: none !important;
          transition: background 300ms;
          display: inline-block;
          a {
            color: white;

            &:hover {
              color: rgba(255, 255, 255, 0.8);
            }
          }

          img, h1 {
            display: inline-block;
            vertical-align: middle;
          }

          img {
            height: 32px;
          }

          h1 {
            color: white;
            font-size: 18px;
            margin: 0 0 0 8px;
            font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-weight: 600;
          }

          &.light .logo {
            background-color: #2db7f5;
          }
        }
      }
    }
  }
</style>
