<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		企业Web的联系方式页面组件
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.02.08  童卫青
//      根据马惠昕、黄震、焦鹏昆、曹振超、张翼鹏、张嘉淏等人写的程序进行了全面整理、修改和完善。
//------------------------------------------------------------------------------------>
<!-------------------------------------------------------------------------------------
                                     组件模板设定
-------------------------------------------------------------------------------------->
<template>
  <div class="root-container">
    <CWHeader :data="headerData"></CWHeader>
    <div class="title">联系方式</div>
    <table>
      <tr>
        <td class="td1">公司名称</td>
        <td class="td2">{{profileData.companyName_ch}}</td>
        <td class="td1">公司地址</td>
        <td class="td2">{{profileData.companyAddress}}</td>
      </tr>
      <tr>
        <td class="td1">公司邮编</td>
        <td class="td2">{{profileData.postcode}}</td>
        <td class="td1">公司电话</td>
        <td class="td2">{{profileData.phone}}</td>
      </tr>
      <tr>
        <td class="td1">公司邮箱</td>
        <td class="td2">{{profileData.email}}</td>
        <td class="td1">公司网址</td>
        <td class="td2">{{profileData.website}}</td>
      </tr>
    </table>
  </div>
</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->

<script>
import CWHeader from "@/components/CHVersion/companyWeb/CWHeader";
import CWData_mockData from '@/mock/CW_MockData'

export default {
  name: "CW_Contact",
  components: {
    CWHeader,
  },
  data() {
    return {
      headerData: CWData_mockData.HeaderData,
      profileData: CWData_mockData.ProfileData,
    }
  }
}
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.root-container {
  width: 1180px;
  margin: 0 auto;
}
.title{
  height:50px;
  line-height: 50px;
  margin-top: 20px;
  font-size: 18px;
  color: #a90000;
  /*background-color: #f2f2f2;*/
}
.profile {
  width: 90%;
  text-align: left;
  margin: 15px auto;
}

table {
  width: 90%;
  margin: 0 auto;
}

.td1 {
  width: 15%;
  height: 25px;
  text-align: left;
  background-color: #f5ebeb;
}

.td2 {
  width: 35%;
  height: 25px;
  text-align: left;
  background-color: #d7e3d6;
}
</style>
