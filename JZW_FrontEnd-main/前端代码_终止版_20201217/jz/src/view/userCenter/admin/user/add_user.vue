<template>
  <div>
    <div>
      <h2>添加用户</h2>
    </div>

    <!-- 新建待增用户 -->
    <div class="block">
      <span>新增用户</span>
      <el-form style="width: 60%;">
        <label>手机</label><el-input size="mini"></el-input>
        <span>邮箱</span><el-input size="mini"></el-input>
        <span>密码</span><el-input size="mini"></el-input>
        <el-button>新增</el-button>
      </el-form>
    </div>

    <div class="block">
      <div>
        <span>待增用户列表</span>
        <div style="float: right">
          <el-button @click="onCreate" size="mini" type="success">上传</el-button>
          <el-button @close="onDelete" size="mini" type="danger">删除</el-button>
        </div>
      </div>

      <!-- 准备增加的用户列表 -->
      <el-table
        :data="users.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"
        ref="multipleTable"
        @selection-change="handleSelectionChange">
        <el-table-column v-model="multipleSelection" align="center" width="50" type="selection"></el-table-column>
        <el-table-column label="手机" prop="phone"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="密码" prop="password"></el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        @current-change="handleCurrentChange"
        layout="total, prev, pager, next, jumper"
        :current-page="page.currentPage"
        :page-size="page.pageSize"
        :total="totalCount"
        align="center">
      </el-pagination>
    </div>

  </div>


</template>

<script>
    export default {
      name: "add_user",
      data(){
        return{
          page: {
            currentPage: 1,
            pageSize: 10,
          },
          totalCount: 0,
          multipleSelection: [],
          users:[],
        }
      },
      created() {
        this.users = [
          {
            phone: "1821718",
            email: "3037@123.com",
            role: 0,
            password: "54321",
          },
          {
            phone: "1821718",
            email: "3037@123.com",
            role: 0,
            password: "54321",
          },
          {
            phone: "1821718",
            email: "3037@123.com",
            role: 0,
            password: "54321",
          },
          {
            phone: "1821718",
            email: "3037@123.com",
            role: 0,
            password: "54321",
          },
        ];
        this.totalCount = this.users.length;
      },
      methods:{
        handleCurrentChange(val) {
          this.page.currentPage=val
        },
        handleSelectionChange(row) {
          this.multipleSelection[this.currentPage] = [];
          this.allMultipleSelection = [];
          for(let i in row){
            let keyId = parseInt(i) + (this.page.currentPage - 1) * this.page.pageSize;
            this.multipleSelection[this.currentPage].push(keyId);
            this.allMultipleSelection.push(keyId);
          }
          console.log(this.allMultipleSelection);
        },
        back(){
          window.location.href="/userManage";
        },
        onCreate(){
          let resp = 200;
          if(resp == 200){
            alert("操作成功！");
          }
          else if(resp == 404){
            alert("连接错误");
          }else{
            alert("操作失败");
          }
        },
        onDelete(){
          let arr = this.allMultipleSelection;
          if(arr.length == 0) {
            alert("没有选择任何项目!");
          }else{
            let deleteList = [];
            for(let i = 0; i < arr.length; ++i){
              deleteList.push(this.member[arr[i]].id);
            }
            console.log(deleteList);

            let resp = 200;
            if(resp == 200){
              alert("操作成功！");
            }
            else if(resp == 404){
              alert("连接错误");
            }else{
              alert("操作失败");
            }

          }
        },
        onSubmit(){
          let resp = 200;
          if(resp == 200){
            alert("操作成功！");
          }
          else if(resp == 404){
            alert("连接错误");
          }else{
            alert("操作失败");
          }
        },
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
