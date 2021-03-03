<template>
  <div class="main">
    <div class="content">
      <b>{{$t('translate.sourceLanguage')}}</b>
      <p style="text-align: left;text-indent: 30px">{{"" + companyInfo}}</p>
    </div>
    <div class="content">
      <b>{{$t('translate.targetLanguage')}}</b>
      <el-input v-model="textarea" type="textarea" :rows="3" clearable></el-input>
      <div style="width: 100%;text-align: center">
        <el-button size="mini">{{$t('translate.machineTranslate')}}</el-button>
        <el-button size="mini">{{$t('button.done')}}</el-button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "company_intro",
    data(){
      return{
        companyInfo:"Element 对象表示 XML 文档中的元素。元素可包含属性、其他元素或文本。如果元素含有文本，则在文本节点中表示该文本。" +
          "重要事项：文本永远存储在文本节点中。在 DOM 处理过程中的一个常见的错误是，导航到元素节点，并认为此节点含有文本。不过，即使最简单的元素节点之下也拥有文本节点。举例，在 <year>2005</year> 中，有一个元素节点（year），同时此节点之下存在一个文本节点，其中含有文本（2005）。" +
          "由于元素对象也是一种节点，因此它可继承 Node 对象的属性和方法。",
        textarea: "",
      }
    },
    created() {
    },
  }
</script>

<style scoped>
.main{
  height: 100%;
}
  .content{
    text-align: left;
  }
</style>
