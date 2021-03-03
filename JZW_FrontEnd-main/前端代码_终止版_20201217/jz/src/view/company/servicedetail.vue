<template>
  <div>
    <div class="title">{{title}}</div>
    <div class="publishdate">{{$t('introduction.publishdate')+" : "+publishdate}}</div>
    <pre class="memo">{{memo}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "服务详情",
      publishdate: "2020-03-03",
      memo:
        `    服务详情服务详情服务详情服务详情服务详情
    服务详情服务详情服务详情服务详情服务详情服务详情服务详情服务详情服务详情`
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 24px;
  font-weight: 24px;
  margin: 10px auto;
  text-align: center;
}
.publishdate {
  text-align: center;
  color: gray;
}
.memo {
  /* text-indent: 24px; */
  margin-top: 24px;
  margin: 24px 30px 0 30px;
  font-size: 18px;
  line-height: 24px;
}
pre {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wraps;
  *word-wrap: break-word;
  *white-space: normal;
}
</style>
