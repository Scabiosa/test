<template>
  <div class="translatePage">
    <div style="margin-left: 20px">
      <div>
        <b>{{$t('translate.current')}}</b>
        <span>{{company.name}}</span>
      </div>
      <div>
        <b>{{$t('translate.translateTo')}}</b>
        <el-select disabled="true" v-model="targetLocale" size="mini">
          <el-option
            v-for="item in localeList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

    </div>
    <el-container style="min-height: 600px">

      <el-main class="rightContent" style="margin-left: 20px;margin-right: 20px">
        <side_menu></side_menu>
        <div class="block">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
    <el-footer><Footer></Footer></el-footer>
  </div>
</template>

<script>
  import side_menu from "./side_menu";
  import {getCompanyByCode} from "@/axios/api";

  export default {
    name: "interpreter_work_page",
    components: {
      side_menu
    },
    data(){
      return{
        company:{
          code: '',
        },
        sourceLocale: 'zh_CN',
        targetLocale: "en_US",
        localeList:[
          {
            label:"English",
            value: "en_US",
          },
        ],

      }
    },
    created() {
      this.company.id = this.query.companyCode;
      this.getCompanyInfo();
    },
    methods:{
      getCompanyInfo(){
        let params = {
          code: this.company.code,
          locale:this.locale,
        };
        getCompanyByCode(params).then(res=>{
          let {message, result} = res.data;
          console.log(message);
          console.log(result);
        }).catch(err=>{
          console.log(err);
        });

      }
    }
  }
</script>

<style scoped>
  .translatePage{
   margin: 20px;
  }
  .block{
    margin: 10px;
    padding: 10px;
    border: lightgrey 1px solid;
    border-radius: 5px;
  }

</style>
