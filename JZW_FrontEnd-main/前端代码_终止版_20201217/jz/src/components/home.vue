<template>
  <el-form class="el-table"
           ref="PersonalForm"
           label-position="left">
    <el-form-item>
      <el-button @click.native.prevent = "handleLogout" :loading="logining" type="primary">logout</el-button>
    </el-form-item>
    <el-table :data="tableData3"  ref="multipleTable">
      <el-table-column type="selection" width="55" ></el-table-column>
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column prop="sex" :label="$t('user.sex')" width="100" :formatter="formatSex"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="IsAudit"  :formatter="formatterColumn" label="审核状态" ></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </el-form>
</template>

<script>
    import {getPersonalList} from "../axios/api";
    import { ACCESS_TOKEN} from "@/store/mutation-types"
    import Vue from 'vue'
    export default {
        name: 'home',
        data(){
            return {
                logining:false,
                //tableData3: []
                tableData3: []
                    /*[{
                        id:'1',
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        IsAudit:0,
                        sex:'1'
                    }, {
                        id:'2',
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        IsAudit:1,
                        sex:'0'
                    }, {
                        id:'3',
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        IsAudit:10,
                        sex:'-1'
                    }],*/
            }
        },
        created:function(){
                getPersonalList({}).then(res=>{
                        //return res.data
                    console.log(res)
                    this.tableData3 = res.data
                    })},
        methods:{
            handleLogout(){
                sessionStorage.setItem('user', null);
                Vue.ls.set(ACCESS_TOKEN, null, 7 * 24 * 60 * 60 * 1000)
                console.log('this',this)
                this.$router.push({path: '/login'})
            },
            formatSex: function (row, column, cellValue, index) {
                return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
            },
            //状态改成汉字
            formatterColumn(row, column) {
                switch(row.IsAudit){
                    case 0:
                        return '未通过';
                        break;
                    case 1:
                        return this.$t('audit.pass');
                        break;
                    case 10:
                        return '待审核';
                        break;
                    case 9:
                        return '草稿';
                        break;
                    default:
                        return '未知';
                }
            }
        }
    }
</script>

<style scoped>

</style>
