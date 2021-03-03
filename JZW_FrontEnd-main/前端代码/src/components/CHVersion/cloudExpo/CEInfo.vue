<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		首页上的产品推荐组件
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.01.28  童卫青
//     初版做成
//------------------------------------------------------------------------------------>
<!-------------------------------------------------------------------------------------
                                     组件模板设定
-------------------------------------------------------------------------------------->
<template>
  <div class="root-container">
    <div class="title">最新云展会推荐</div>
    <figure v-for="ad in ads" :key="ad.id">
      <a href="https://www.cantonfair.org.cn"><img :src="ad.image"/></a>
      <figcaption>
        {{ ad.title }}<br>
        {{ ad.date }}
      </figcaption>
    </figure>
  </div>
</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->
<script>
import home_mockData from '@/mock/CE_MockData.vue'

export default {
  props: [''],
  data() {
    return {
      ads: home_mockData.CEInfo,
    };
  },
  created() {
    // axios获取数据
  },
  components: {}
};
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.root-container {
  width: 100%;
  margin-top: 0;
  background-color: #f2f2f2;
}
.title {
  display: block;
  height: 30px;
  line-height: 30px;
  color: #a90000;
  margin-block-start: 0em;
  margin-block-end: 0em;
}
figure {
  width: 220px;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  /*align-content: space-around;*/
  /*align-items: self-end;*/
  margin-block-start: 0em;
  margin-block-end: 0.5em;
  margin-inline-start: 0.5em;
  margin-inline-end: 0.5em;
}
img {
  width: 220px;
  height: 220px
}
figcaption {
  font-size: 12px;
}
</style>