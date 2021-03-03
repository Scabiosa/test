<template>
  <div>
    <h2>编辑用户</h2>
    <div class="block">
      <table align="center">
      <tr>
        <td><span>手机:</span></td>
        <td><el-input v-model="user.phone" size="mini"></el-input></td>
      </tr>
      <tr>
        <td><span>邮箱:</span></td>
        <td><el-input v-model="user.email" size="mini"></el-input></td>
      </tr>
      <tr>
        <td><span>角色:</span></td>
        <td><el-select v-model="user.role" size="mini">
          <el-option label="个人会员" value="0"></el-option>
          <el-option label="企业会员" value="1"></el-option>
          <el-option label="机构会员" value="2"></el-option>
        </el-select></td>
      </tr>
      <tr>
        <td><span>密码:</span></td>
        <td><el-input v-model="user.password" size="mini"></el-input></td>
      </tr>
    </table>
      <div align="center">
        <el-button size="mini" @click="onCancel" type="danger">取消</el-button>
        <el-button size="mini" @click="onEdit" type="success">完成</el-button>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
      name: "edit_user",
      data(){
          return{
            user: {
              phone: "12345",
              email: "123@123.com",
              password: "54321",
              role: "0",
            },
          }
      },
      methods:{
          onCancel(){
            history.back();
          },
          onEdit(){

          }
      },
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
