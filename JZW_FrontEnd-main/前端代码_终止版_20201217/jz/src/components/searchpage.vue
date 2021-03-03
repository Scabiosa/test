<template>
  <div class="searchdiv">
    <div class="searchlabel">
      <span class="searchlabeltext">{{$t('pub.searchlabel')}}</span>
    </div>
    <div class="searchoption">
      <span class="action">
        <a-radio-group :default-value="ravalue" button-style="solid">
          <a-radio-button value="1">{{$t('searchoption.product')}}</a-radio-button>
          <a-radio-button value="2">{{$t('searchoption.company')}}</a-radio-button>
          <a-radio-button value="3">{{$t('searchoption.service')}}</a-radio-button>
          <a-radio-button value="4">{{$t('searchoption.purchase')}}</a-radio-button>
          <a-radio-button value="5">{{$t('searchoption.technology')}}</a-radio-button>
        </a-radio-group>
      </span>
    </div>
    <div class="searchtext">
        <a-input-search placeholder="input search text"
                        enterButton="Search"
                        size="large" />
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "searchpage",
        data() {
            return {
                ravalue:1
            }
        }
    }
</script>

<style lang="less" scoped>

  .searchdiv {
    padding: 10px 0px 10px 0px;
    .searchlabel{
      background: #84d6f5;
      text-align: center;
      .searchlabeltext{
        color: rgb(0, 0, 0);
        font-size: 20px;
      }
    }
    .searchoption{
      padding: 10px 0px 10px 0px;
      text-align: center;
      background: #84d6f5;
      .action {
        margin-left: 20px;
        min-width: 266px;
        flex: 0 1 auto;
      }
    }
    .searchtext{
      background: #84d6f5;
      padding: 10px 0px 50px 0px;
      text-align: center;
    }
  }
</style>
