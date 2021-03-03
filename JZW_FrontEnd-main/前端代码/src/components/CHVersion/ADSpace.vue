<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		首页上的产品推荐组件
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.01.28  童卫青
//     根据马惠昕、黄震、焦鹏昆、曹振超、张翼鹏、张嘉淏等人写的程序进行了全面整理、修改和完善。
//------------------------------------------------------------------------------------>
<!-------------------------------------------------------------------------------------
                                     组件模板设定
-------------------------------------------------------------------------------------->
<template>
  <div class="root-container">
    <div class="title">产品推荐</div>
    <figure v-for="ad in ads" :key="ad.id">
      <router-link to="/layout">
        <img :src="ad.image" :alt="ad.title"/>
      </router-link>
      <figcaption>
        {{ ad.title }}<br>
        {{ ad.companyName }}
      </figcaption>
    </figure>
  </div>
</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->
<script>
import home_mockData from '@/mock/Home_MockData.vue'

export default {
  props: [''],
  data() {
    return {
      ads: home_mockData.recProduct,
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