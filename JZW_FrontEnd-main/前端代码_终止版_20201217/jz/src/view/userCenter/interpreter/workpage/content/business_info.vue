<template>
  <div class="main">
    <div class="title2">
      <b>{{$t('translate.sourceLanguage')}}</b>
    </div>
    <div>
      <table class="left">
        <tr>
          <td class="label">{{$t('companyIntroduction.companyName')}}:</td>
          <td class="content">{{company.name}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyEnglishName')}}:</td>
          <td class="content">{{company.englishName}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyLegalPerson')}}:</td>
          <td class="content">{{company.juridicalPerson}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.registeredCapital')}}:</td>
          <td class="content">{{company.capital}}{{company.capitalUnit}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyCreateDate')}}:</td>
          <td class="content">{{company.dateEstablishment}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyMember')}}:</td>
          <td class="content">{{company.personnelScale}}人</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyStatus')}}:</td>
          <td class="content">{{company.managementStatus}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyService')}}:</td>
          <td class="content">{{company.productService}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyType')}}:</td>
          <td class="content">{{company.type}}</td>
        </tr>
      </table>
      <table class="left">
        <tr>
          <td class="label">{{$t('companyIntroduction.registeredCountry')}}:</td>
          <td class="content">{{company.registeredCountry}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyAddress')}}:</td>
          <td class="content">{{company.address}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyPostCode')}}:</td>
          <td class="content">{{company.zipCode}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyWeb')}}:</td>
          <td class="content">{{company.homepage}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyEmail')}}:</td>
          <td class="content">{{company.email}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyPhone')}}:</td>
          <td class="content">{{company.telephones}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.contactName')}}:</td>
          <td class="content">{{company.contactName}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.contactProfession')}}:</td>
          <td class="content">{{company.contactTitle}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.contactPhone')}}:</td>
          <td class="content">{{company.contactPhone}}</td>
        </tr>
      </table>
    </div>

    <div class="title2">
      <b>{{$t('translate.targetLanguage')}}</b>
    </div>

    <div>
      <table class="left">
        <tr>
          <td class="label">{{$t('companyIntroduction.companyName')}}:</td>
          <td class="content"><el-input class="iptContent" size="mini" v-model="company.name"></el-input></td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyEnglishName')}}:</td>
          <td class="content"><el-input class="iptContent" size="mini" v-model="company.englishName"></el-input></td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyLegalPerson')}}:</td>
          <td class="content"><el-input class="iptContent" style="width: 200px" size="mini" v-model="company.juridicalPerson"></el-input></td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.registeredCapital')}}:</td>
          <td class="content"><el-input disabled="true" class="iptContent" style="width: 200px" size="mini" v-model="company.capital"></el-input>&nbsp; {{company.capitalUnit}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyCreateDate')}}:</td>
          <td class="content">
            <el-date-picker disabled="true" class="iptContent" style="width: 200px" size="mini" placeholder="请选择日期" v-model="company.dateEstablishment">
            </el-date-picker>
          </td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyMember')}}:</td>
          <td class="content">
            <el-select disabled="true" v-model="company.personnelScale"
                       size="mini">
              <el-option
                v-for="item in member"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyStatus')}}:</td>
          <td class="content">
            <el-select disabled="true" v-model="company.managementStatus"
                       size="mini" value="">
              <el-option
                v-for="item in status"
                :key="item.value"
                :label="item.label"
                :value="item.value"></el-option>
            </el-select>
          </td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyService')}}:</td>
          <td class="content"><el-input class="iptContent" size="mini" v-model="company.productService"></el-input></td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyType')}}:</td>
          <td class="content">
            <el-select disabled="true" v-model="company.type"
                       size="mini" value="">
              <el-option
                v-for="item in category"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </td>
        </tr>
      </table>
      <table class="left">
        <tr>
          <td class="label">{{$t('companyIntroduction.registeredCountry')}}:</td>
          <td class="content">
            <el-select disabled="true" v-model="company.registeredCountry"
                       size="mini">
              <el-option
                v-for="item in country"
                :key="item.value"
                :label="item.label"
                :value="item.value"></el-option>
            </el-select>
          </td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyAddress')}}:</td>
          <td class="content"><el-input class="iptContent" size="mini" v-model="company.address"></el-input></td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyPostCode')}}:</td>
          <td class="content"><el-input disabled="true" class="iptContent" size="mini" v-model="company.zipCode"></el-input></td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyWeb')}}:</td>
          <td class="content"><el-input disabled="true" class="iptContent" size="mini" v-model="company.homepage"></el-input></td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyEmail')}}:</td>
          <td class="content"><el-input disabled="true" class="iptContent" size="mini" v-model="company.email"></el-input></td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyPhone')}}:</td>
          <td class="content"><el-input disabled="true" class="iptContent" size="mini" v-model="company.telephones"></el-input></td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.contactName')}}:</td>
          <td class="content"><el-input class="iptContent" style="width: 200px" size="mini" v-model="company.contactName"></el-input></td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.contactProfession')}}:</td>
          <td class="content"><el-input class="iptContent" style="width: 200px" size="mini" v-model="company.contactTitle"></el-input></td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.contactPhone')}}:</td>
          <td class="content"><el-input disabled="true" class="iptContent" size="mini" v-model="company.contactPhone"></el-input></td>
        </tr>
      </table>
    </div>


    <div class="operate">
      <el-button size="mini">{{$t('translate.machineTranslate')}}</el-button>
      <el-button size="mini">{{$t('button.done')}}</el-button>
    </div>

  </div>
</template>

<script>
  import {getCompanyById} from "@/axios/api";
  export default {
    name: "business_info",
    data(){
      return{
        companyId: 1,
        sourceLocale: "",
        targetLocale: "",
        status:[
          {
            label: "营业",
            value: "1"
          },
          {
            label: "存续",
            value: "2"
          },
          {
            label: "歇业",
            value: "3"
          },
        ],
        category: [
          {
            label: "有效责任制",
            value: "1"
          },
          {
            label: "xxxxxx",
            value: "2"
          },
          {
            label: "xxxxxxx",
            value: "3"
          },
        ],
        country:[
          {
            label: "中国",
            value: "china",
          },
          {
            label: "日本",
            value: "japan",
          },
        ],
        member: [
          {
            value: '0-99',
            label: '0-99'
          }, {
            value: '100-200',
            label: '100-200'
          }, {
            value: '200-500',
            label: '200-500'
          }, {
            value: '500-1000',
            label: '500-1000'
          }, {
            value: '1000-9999',
            label: '1000-9999'
          },{
            value: '10000人以上',
            label: '10000人以上'
          }
        ],
        company:{
          id: "",
          address: "",
          capital: 0,
          capitalUnit: "",
          clicks: 0,
          code: "",
          contactName: "",
          contactPhone: "",
          contactTitle: "",
          createBy: "0",
          createTime: "",
          dateEstablishment: "",
          email: "",
          homepage: "",
          introduction: "",
          juridicalPerson: "",
          latitude: 0,
          locale: "",
          longitude: 0,
          managementStatus: "",
          name: "",
          personnelScale: 0,
          productService: 0,
          registeredCountry: 0,
          telephones: "",
          type: 0,
          updateBy: "",
          updateTime: "",
          zipCode: "",
        },

        tcompany: {
          name: '上海机器人公司',
          introduction: '上海智能机器人公司成立于2010年，是一家以机器人独有技术为核心，致力于数字化智能高端装备制造的高科技上市企业。' +
            '公司的机器人产品线涵盖工业机器人、洁净（真空）机器人 、移动机器人、特种机器人及智能服务机器人五大系列，' +
            '其中工业机器人产品填补多项国内空白，创造了中国机器人产业发展史上88项第一的突破；',
          englishName: 'ShangHai Robot',
          legalPerson: '齐德隆',
          money: 500,
          date: '2020-3-5',
          member: '201-250',
          status: '存续',
          supply: '机器人及其自动化服务',
          category: '上市公司',
          country: '中国',
          address: '上海市普陀区中山北路3663号',
          postCode: '21000',
          web: 'Robot.sh.com',
          mail: 'robot@163.com',
          telephone: '(+86)-02106210000',
          contactName: '齐德隆',
          profession: '正教授',
          phone: '(+86)17317824843'
        },

      }
    },
    mounted() {
      this.getCompanyInfo();
    },
    methods:{

      //获取公司信息
      getCompanyInfo(){

        let params = {
          id: 1,
        }
        getCompanyById(params).then(res=>{
          let {code, message, result} = res.data;
          this.company = result;
          console.log(message);
        }).catch(err=>{
          console.log(err);
        });
      }
    },
  }
</script>

<style scoped>
  .main{
    height: 100%;
  }
  .title2{
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .left{
    text-align:left;
    margin-bottom:10px;
    width:50%;
    float:left;
    margin-top:15px;
    height:300px;
  }
  .label{
    width:180px;
  }
  .content{
    padding-right: 100px;
  }
  .operate{
    margin: 30px;
  }
</style>

