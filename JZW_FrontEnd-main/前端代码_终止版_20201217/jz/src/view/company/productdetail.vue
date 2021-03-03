<template>
  <div>
    <div class="doc">{{$t('introduction.pdf_download')}}</div>
    <img class="img" :src="imgsrc" :alt="title" />
    <div class="title">{{title}}</div>
    <!-- <div class="publishdate">{{$t('introduction.publishdate')+" : "+publishdate}}</div> -->
    <pre class="memo">{{memo}}</pre>
  </div>
</template>

<script>
import CompanyLayout from "../../components/layouts/company/CompanyLayout";
export default {
  name: "dynamicdetail",
  data() {
    return {
      imgsrc: "/static/robot.jpg",
      title: "CDYX-6000远距离定向声波发射---超高强声压",
      memo: `    该装置最高定向发射超强声波可达160db，是声波发射装置中的领先水平，将国产声波发射装置的技术性能又推向一个新的高度
    为政府、部队、公安、企事业单位日常喊话。搜救、救援、巡逻、警告、威慑等处理应急事件又增一道利器`
    };
  },
  components: {
    CompanyLayout
  }
};
</script>

<style scoped>
.doc {
  text-align: left;
  font-size: 18px;
  color: #81d3f8;
}
.img {
  display: block;
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
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
