<template>
  <el-table :data="taskList.slice((page.currentPage-1)*page.pageSize, page.currentPage*page.pageSize)" ref="multipleTable">
    <el-table-column type="index"></el-table-column>
    <el-table-column prop="companyName" label="企业名称"></el-table-column>
    <el-table-column prop="status" label="状态" :formatter="formatStatus"></el-table-column>
    <el-table-column prop="lastEditTime" label="上次修改时间"></el-table-column>
    <el-table-column  label="操作">
      <template>
        <el-button type="primary" @click="handleEdit()">编辑</el-button>
      </template>

    </el-table-column>
  </el-table>
</template>

<script>
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
            companyName: "sss企业",
            status: 1,
            lastEditTime: "2013-1-1"
          },
          {
            companyName: "sss企业",
            status: 2,
            lastEditTime: "2013-1-1"
          },
          {
            companyName: "sss企业",
            status: 3,
            lastEditTime: "2013-1-1"
          }
        ]
      }
    },
    created() {
      this.totalCount = 12;
    },
    methods:{
      handleEdit(cid){
        window.open("/r#/translate/companyIntroduce");
      },
      requestTranslateTaskList(){

      },
      formatStatus(row, column){
        switch (row.status) {
          case 1:
            return "未翻译";
            break;
          case 2:
            return "已机翻";
            break;
          case 3:
            return "已人工翻译";
            break;
          default:
            return "未知";

        }
      }
    }
  }
</script>

<style scoped>

</style>
