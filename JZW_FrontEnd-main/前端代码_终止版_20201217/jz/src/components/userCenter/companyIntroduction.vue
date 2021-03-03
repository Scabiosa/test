<template>
  <div class="common">
    <div class="title">{{$t('companyIntroduction.briefIntroduction')}}</div>
    <p class="introduction" v-if="isEdit">{{company.introduction}}</p>
    <el-input class="input_introduction" v-model="company.introduction" type="textarea" autosize v-else></el-input>
    <div class="title">{{$t('companyIntroduction.basicInformation')}}</div>
    <div  v-if="isEdit">
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
    <div v-else>
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
          <td class="content"><el-input class="iptContent" style="width: 200px" size="mini" v-model="company.capital"></el-input>&nbsp; {{company.capitalUnit}}</td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyCreateDate')}}:</td>
          <td class="content">
            <el-date-picker class="iptContent" style="width: 200px" size="mini" placeholder="请选择日期" v-model="company.dateEstablishment">
            </el-date-picker>
          </td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyMember')}}:</td>
          <td class="content">
            <el-select v-model="company.personnelScale"
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
            <el-select v-model="company.managementStatus"
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
            <el-select v-model="company.type"
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
            <el-select v-model="company.registeredCountry"
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
          <td class="content"><el-input class="iptContent" size="mini" v-model="company.zipCode"></el-input></td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyWeb')}}:</td>
          <td class="content"><el-input class="iptContent" size="mini" v-model="company.homepage"></el-input></td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyEmail')}}:</td>
          <td class="content"><el-input class="iptContent" size="mini" v-model="company.email"></el-input></td>
        </tr>
        <tr>
          <td class="label">{{$t('companyIntroduction.companyPhone')}}:</td>
          <td class="content"><el-input class="iptContent" size="mini" v-model="company.telephones"></el-input></td>
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
          <td class="content"><el-input class="iptContent" size="mini" v-model="company.contactPhone"></el-input></td>
        </tr>
      </table>
    </div>
    <div v-if="isEdit">
      <el-button type="primary" size="small" @click="edit">{{$t('button.edit')}}</el-button>
      <el-button size="small" @click="publish">{{$t('button.publish')}}</el-button>
    </div>
    <el-button type="primary" size="small" @click="save" v-else>{{$t('button.save')}}</el-button>
  </div>
</template>

<script>
  import {getByUserId,getById,editCompany} from "../../axios/api";
  import {USER_COMPANY} from "../../store/mutation-types";
  import Vue from 'vue'
  export default {
    name: "companyIntroduction",
    mounted(){
      getByUserId({
        locale: localStorage.getItem('lang'),
        userId: this.$store.state.userId
      }).then(res=>{
         let {code, msg, result} = res.data;
         if(code === 200){
         this.company=result;
           Vue.ls.set(USER_COMPANY, result, 7 * 24 * 60 * 60 * 1000);
           this.$store.commit("setCompany", Vue.ls.get(USER_COMPANY));
         }else{
           this.$message({
           type: 'error',
           message:msg,
          });
    }
      })
    },
    data () {
      return {
        isEdit: true,
        companyId:-1,
        company: {},
        member: [{
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
        }, {
          value: '10000人以上',
          label: '10000人以上'
        }],
        status: [
          {
            label: '营业',
            value: '1'
          },
          {
            label: '存续',
            value: '2'
          },
          {
            label: '歇业',
            value: '3'
          }
        ],
        category: [
          {
            label: '有效责任制',
            value: '1'
          },
          {
            label: 'xxxxxx',
            value: '2'
          },
          {
            label: 'xxxxxxx',
            value: '3'
          }
        ],
        country: [
          {
            label: '中国',
            value: 'china'
          },
          {
            label: '日本',
            value: 'japan'
          }
        ]
      }
    },
    methods: {
      edit () {
        this.isEdit = false
      },
      save () {
        this.isEdit = true;
      },
      publish(){
        editCompany({
          address: this.company.address,
          capital: this.company.capital,
          capitalUnit: this.company.capitalUnit,
          contactName: this.company.contactName,
          contactPhone: this.company.contactPhone,
          contactTitle: this.company.contactTitle,
          dateEstablishment: this.company.dateEstablishment,
          email: this.company.email,
          homepage: this.company.homepage,
          code: 3,
          id:3,
          introduction: this.company.introduction,
          juridicalPerson: this.company.juridicalPerson,
          locale: localStorage.getItem('lang'),
          managementStatus: this.company.managementStatus,
          name: this.company.name,
          personnelScale: this.company.personnelScale,
          productService: this.company.productService,
          registeredCountry: this.company.registeredCountry,
          telephones: this.company.telephones,
          type: this.company.type,
          zipCode: this.company.zipCode
        }).then(res=>{
          let {code, msg, result} = res.data;
          console.log(res);
          if(code === 200){
            this.$message({
              type: 'success',
              message:msg,
            });
          }else{
            this.$message({
              type: 'error',
              message:msg,
            });
          }
        })
      }
    }
  }
</script>

<style scoped>
  .common{
    /*公有样式-布局*/
    overflow:hidden;
    position:relative;
    top:10px;
    margin-bottom: 20px;
  }
  .title{
    /*样式*/
    background-color:#3F3F3F;
    width:150px;
    height:31px;
    /*文字样式*/
    color:white;
    text-align:center;
    line-height:31px;
  }
  .introduction{
    width:100%;
    text-align:left;
  }
  .input_introduction{
    margin-top:10px;
    margin-bottom:10px;
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
</style>
