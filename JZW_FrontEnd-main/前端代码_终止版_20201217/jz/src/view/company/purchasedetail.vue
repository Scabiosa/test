<template>
  <div>
    <div class="title">{{title}}</div>
    <div class="bar">
      <span
        class="bar_content"
        v-for="(v,k) in bar_info"
        :key="k"
      >{{$t('introduction.'+k) + ' : ' + v}}</span>
    </div>
    <div class="related_info">
        {{$t('introduction.'+'field') + ' : ' + field}}
    </div>
    <div class="related_info">
        {{$t('introduction.'+'related_product') + ' : ' + related_product}}
    </div>
    <div class="subtitle">{{$t('introduction.purchase_introduction')}}</div>
    <pre class="product_introduction">{{product_introduction}}</pre>
    <div class="subtitle">{{$t('introduction.purchase_detail')}}</div>
    <div class="content_wrapper">
      <div
        class="content"
        v-for="(v,k) in purchase_info"
        :key="k"
      >{{$t('introduction.'+k) + ' : ' + v}}</div>
    </div>
    <pre class="memo">{{memo}}</pre>
  </div>
</template>

<script>
import CompanyLayout from "../../components/layouts/company/CompanyLayout";
export default {
  name: "dynamicdetail",
  data() {
    return {
      title: "机器人手臂夜视镜部件采购公告",
      bar_info: {
        publish_type: "采购公告",
        publish_company: "智能机器公司",
        click_count: "3500",
        purchase_type: "机器人-原材料-智能手臂"
      },
      field: "电子元器件, 计算机与软件，电子......",
      related_product: "智能机器人",
      product_introduction: `    随着国内外反恐、安全形势的急遽变化，对于执法人员、平民生命的保护越来越得到大众的重视。严格执法是执法人员的职责所在，但执法风险也是客观现实，在执法过程中既要保护执法者，也要避免误伤平民，这样的形势是大势所趋，必将引领特种装备发展走向一个新的发展方向，以达自身、平民零伤害，而这恰好是声赛耳的技术追求。
    绵阳声赛耳科技有限公司凭借多年对技术的潜心研究、精心规划和方向重塑，相继推出的系列产品已覆盖军警用特种装备、反恐、处突、指挥、应急广播等多个领域，公司开发的“野战喊话器”、“声波驱散器”等产品，经受了严酷环境下长期使用的考验，成为新一代不可或缺的新型装备。实践证明，特种装备行业技术的进步源于科技创新，同时也是驱动技术创新的重要引擎，以技术创新和互联网思维推动特种装备行业发展具有重要意义。`,
      purchase_info: {
        purchase_name: "智能机器人手臂模块采购项目",
        purchase_code: "0733-129413",
        purchase_number: "1000(套)",
        purchase_reason: "智能机器人换代升级，增加夜视功能，原材料购入",
        purchase_person: "上海智能机器人公式技术部委托"
      }
    };
  },
  components: {
    CompanyLayout
  }
};
</script>

<style scoped>
.subtitle {
  display: inline-block;
  padding: 8px;
  margin: 10px 0;
  color: white;
  background: black;
}
.desc {
  margin: 0 10px;
  text-indent: 24px;
}
.title {
  font-size: 24px;
  font-weight: 24px;
  margin: 10px auto;
  text-align: center;
}
.bar{
    background: #D7D7D7;
    margin-top: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
}
.bar_content{
    margin-left: 24px;
    font-size: 14px;
}
.related_info{
    margin-top: 10px;
}
.content_wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px 30px 0 30px;
}
.content {
  width: 90%;
  margin-top: 10px;
}
.publishdate {
  text-align: center;
  color: gray;
}
.product_introduction {
  /* text-indent: 24px; */
  margin: 5px 30px 0 30px;
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
