

<template>
  <div>
    <div>
      <h2>{{$t('translate.taskList')}}</h2>
    </div>
    <div class="block">
      <el-table :data="taskList" ref="multipleTable">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name" :label="$t('translate.companyname')"></el-table-column>
        <el-table-column prop="status" :label="$t('translate.status')" :formatter="formatStatus"></el-table-column>
        <el-table-column prop="updateTime" :label="$t('translate.lastupdatetime')"></el-table-column>
        <el-table-column  :label="$t('translate.op')">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.row)" size="small">{{$t('translate.translate')}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @current-change="handleCurrentChange"
        layout="total, prev, pager, next, jumper"
        :current-page="page.currentPage"
        :page-size="page.pageSize"
        :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {getCompanyList, requestInterpreterTaskList} from "@/axios/api";

  export default {
    name: "task_list",
    data(){
      return{
        totalCount: 0,
        page: {
          currentPage: 1,
          pageSize: 10,
        },
        taskList:[
          {
            companyName: "",
            status: 1,
            lastEditTime: ""
          },
        ]
      }
    },
    created() {
      this.getTaskList();
    },
    methods:{
      handleEdit(company){
        const newPage = this.$router.resolve('/userCenter/translatePage?companyCode='+company.code)
        window.open(newPage.href,'_blank')
      },
      getTaskList(){
        let params = {
          page: this.page.currentPage,
          pageSize: this.page.pageSize,
        };
        getCompanyList(params).then((res)=>{
          let {message, result} = res.data;
          this.taskList = result['records'];
        });

      },
      //更改当前页数
      handleCurrentChange(val){
        this.page.currentPage = val;
        this.getTaskList();
      },
      formatStatus(row, column){
        switch (row.status) {
          case 1:
            return this.$t("translate.status1");
            break;
          case 2:
            return this.$t("translate.status2");
            break;
          case 3:
            return this.$t("translate.status3");
            break;
          default:
            return this.$t("translate.status4");

        }
      }
    }
  }
</script>

<style scoped>
  .block{
    margin: 10px;
    padding: 10px;
    border: lightgrey 1px solid;
    border-radius: 5px;
  }
</style>
