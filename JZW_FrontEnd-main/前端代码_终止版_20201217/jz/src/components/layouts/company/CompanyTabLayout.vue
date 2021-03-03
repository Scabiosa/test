<template>
    <!--<a-tabs
      @contextmenu.native="e => onContextmenu(e)"
      :active-key="activePage"
      class="tab-layout-tabs"
      style="height:52px"
      :hide-add="true"
      type="editable-card">
      <a-tab-pane :id="page.fullPath" :key="page.fullPath" v-for="page in pageList">
        <span slot="tab" :pagekey="page.fullPath">{{ page.meta.title }}</span>
      </a-tab-pane>
    </a-tabs>-->
  <CompanyLayout>
    <el-tabs>
      <el-tab-pane label="用户管理" name="first"/>
      <el-tab-pane label="配置管理" name="second"/>
      <el-tab-pane label="角色管理" name="third"/>
      <el-tab-pane label="定时任务补偿" name="fourth"/>
    </el-tabs>
    <div style="margin: 12px 12px 0;">
      <transition name="page-toggle">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </div>
  </CompanyLayout>
</template>

<script>
  import CompanyLayout from "./CompanyLayout";
    export default {
        name: "CompanyTabLayout",
        components:{
            CompanyLayout
        },
        methods:{
            changePage(key){
                this.activePage = key
            },
            callback(key){
                console.log(key);
            }
        }
    }
</script>

<style lang="less" scoped>
  .page-transition-enter {
    opacity: 0;
  }

  .page-transition-leave-active {
    opacity: 0;
  }

  .page-transition-enter .page-transition-container,
  .page-transition-leave-active .page-transition-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  /*美化弹出Tab样式*/
  .ant-tabs-nav-container {
    margin-top: 4px;
  }

  /* 修改 ant-tabs 样式 */
  .tab-layout-tabs.ant-tabs {
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    background-color: white;
    padding: 0 20px;

    .ant-tabs-bar {
      margin: 4px 0 0;
      border: none;
    }

  }

  .ant-tabs {

    &.ant-tabs-card .ant-tabs-tab {

      padding: 0 24px !important;
      background-color: white !important;
      margin-right: 10px !important;

      .ant-tabs-close-x {
        width: 12px !important;
        height: 12px !important;
        opacity: 0 !important;
        cursor: pointer !important;
        font-size: 12px !important;
        margin: 0 !important;
        position: absolute;
        top: 36%;
        right: 6px;
      }

      &:hover .ant-tabs-close-x {
        opacity: 1 !important;
      }

    }

  }

  .ant-tabs.ant-tabs-card > .ant-tabs-bar {
    .ant-tabs-tab {
      border: none !important;
      border-bottom: 1px solid transparent !important;
    }
    .ant-tabs-tab-active {
      border-color: black!important;
    }
  }
</style>
