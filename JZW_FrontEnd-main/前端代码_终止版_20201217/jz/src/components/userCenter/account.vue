<template>
      <div class="content">
        <div class="avater">
          <div class="information">
            <h2>{{$t('account.Dear')}}:{{user.telephone}}</h2>
            <p>{{$t('account.email')}}:{{user.email}}</p>
            <span>{{$t('account.country')}}:{{user.country}}</span>
<!--            <p>{{$t('account.hit')}}:{{user.visit}}</p>-->
<!--            <span>{{$t('account.time')}}:{{user.time}}</span>-->
          </div>
<!--          <el-button type="primary">{{$t('account.changeCountry')}}</el-button>-->
          <el-button type="primary" @click="change('password')">{{$t('account.changePsw')}}</el-button>
          <el-button type="primary" @click="change('email')">{{$t('account.changeEmail')}}</el-button>
        </div>
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
          <el-input v-model="newPsw" placeholder="请填写你的新密码" v-if="editType === 'password'"></el-input>
          <el-input v-model="newEmail" placeholder="请填写你的新邮箱" v-else></el-input>
          <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="edit">确 定</el-button>
          </span>
        </el-dialog>
      </div>
</template>

<script>
  import {getUserById,putEditedUser} from "@/axios/api";
  import Vue from 'vue'
export default {
  name: 'Account',
  computed:{
    userId: function(){
      return this.$store.state.userId
    },
    role: function(){
      return this.$store.state.role
    }
  },
  data () {
    return {
      user: {},
      newUser:{},
      dialogVisible:false,
      newEmail:'',
      newPsw:'',
      editType:true
    }
  },
  mounted() {
    getUserById({
      id:this.userId,
      locale:localStorage.getItem('lang')
    }).then(res=>{
      let {code, msg, result} = res.data;
      if(code === 200){
        this.user=result;
      }else{
        this.$message({
          type: 'error',
          message:msg,
        });
      }
    })
  },
  methods:{
    change(editType){
      this.dialogVisible=true;
      this.editType = editType;
      Object.assign(this.newUser,this.user);
      console.log(this.newUser);
    },
    edit(){
      if(this.editType === 'password'){
        this.newUser.password = this.newPsw;
      }else if(this.editType === 'email'){
        this.newUser.email = this.newEmail;
      }
      putEditedUser(this.newUser).then(res=>{
        let {code, msg, result} = res.data;
        if(code === 200){
          this.dialogVisible = false;
          if(this.editType === 'email'){
            this.user.email = this.newEmail;
          }
        }
        alert(msg);
      })
    },
    handleClose(){
      this.dialogVisible=false;
    }
  }
}
</script>

<style scoped>
   .content{
     display:flex;
     justify-content:center;
     align-content:center;
   }
   .avater{
     margin-top:30px;
     font-size:20px;
     /*background-color:#169BD5;*/
     width:500px;
     height:500px;
     /*-webkit-border-radius:200px;*/
     /*-moz-border-radius:200px;*/
     border-radius:10px;
     /*color:white;*/
   }
   .information{
     /*padding-top:75px;*/
     /*padding-left:30px;*/
     margin-bottom:20px;
   }
</style>
