<template>
  <div>
    <div class="title">{{$t('introduction.company_introduction')}}</div>
    <div class="desc">{{introductioninfor}}</div>
    <div class="title">{{$t('introduction.business_information')}}</div>
    <div class="content_wrapper">
      <div
        class="content"
        v-for="(v,k) in businessinformation"
        :key="k"
      >{{$t('introduction.'+k) + ' : ' + v}}</div>
    </div>
  </div>
</template>

<script>
import CompanyLayout from "../../components/layouts/company/CompanyLayout";
export default {
  name: "introduce",
  created: function(){
    fetch("/api/jz/company/getByCode?code=CODE_1&locale=zh_CN",{
      method:'Get',
      headers:{
        'Cache-Control': 'no-cache'
      }
    }).then(response=>{
      response.json().then(json=>{
        const data=json.result;
        console.log(json);
        this.introductioninfor=data.introduction;
        this.businessinformation.companyname_ZH=data.name;
        this.businessinformation.Juridical_person=data.juridicalPerson;

        this.businessinformation.registered_capital=data.capital+data.capitalUnit;

        this.businessinformation.date_of_establishment=data.dateEstablishment;
        this.businessinformation.business_status=data.managementStatus;

        this.businessinformation.company_address=data.address;
        this.businessinformation.company_email=data.email;
        this.businessinformation.company_website=data.homepage;
        this.businessinformation.company_phone=telephones;
        this.businessinformation.contact_name=contactName;
        this.businessinformation.contact_title=contactTitle;
        this.businessinformation.contact_phone=contactPhone;

      })

    })
  },
  data() {
    return {
      introductioninfor:
        "上海智能机器人科技（上海）有限公司是注册在上海浦东的高科技企业，国家科技部创新基金支持单位，国家战略新兴产业标准化试点单位，上海市重大技术装备独立研制责任单位，上海市社会信息化平台独立研发责任单位，国家住建部智能化专家库成员。同时也是我国服务机器人领域最早制订行业标准的企业，已获得首批中国机器人产品认证证书。",
      businessinformation: {
        companyname_ZH: "上海智能机器人公司",
        companyname_EN: "ShangHai Robot Technology CO.,LTD",
        Juridical_person: "齐德龙",
        registered_capital: "5000万元",
        date_of_establishment: "2011-04-21",
        staff_size: "201-250人", //
        business_status: "存续",
        major_product_or_service: "机器人及其自动化服务", //
        company_type: "私有", //
        country_or_incorporation: "中国", //
        company_address: "上海市普陀区中山北路3663号", //
        company_mail: "210000",//
        company_website: "Robot.sh.com",
        company_email: "robot@163.com",
        company_phone: "(-86)-021-62100000",
        contact_name: "齐德龙",
        contact_title: "正教授",
        contact_phone: "(+86)17317824843"
      }
    };
  },
  components: {
    CompanyLayout
  }
};
</script>

<style lang="less" scoped>
.title {
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
.content_wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.content {
  width: 49%;
  margin-top: 5px;
}
</style>
