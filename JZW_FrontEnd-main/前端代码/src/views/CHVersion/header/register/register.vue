<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		注册页面组件
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.02.20  童卫青
//      根据马惠昕、黄震、焦鹏昆、曹振超、张翼鹏、张嘉淏等人写的程序进行了全面整理、修改和完善。
//------------------------------------------------------------------------------------>
<!-------------------------------------------------------------------------------------
                                     组件模板设定
-------------------------------------------------------------------------------------->
<template>
  <div class="root-container">
    <h3> 注 册 </h3>

    <!--********** 步骤条设定 **********-->
    <el-steps :active="step" finish-status="success" align-center>
      <el-step title="选择角色"></el-step>
      <el-step title="填写信息"></el-step>
      <el-step title="注册成功"></el-step>
    </el-steps>

    <!--********** 注册信息填写部分 **********-->
    <div class="containerA">
      <!--  角色选择  -->
      <div v-show="showRoleSelect">
        <el-radio-group v-model="account.role" @change="handleRoleRadioChange">
          <el-radio label="INDIVIDUAL_USER" border>个人用户</el-radio>
          <el-radio label="COMPANY_USER" border>企业用户</el-radio>
          <el-radio label="GOVERNMENT_USER" border>政府用户</el-radio>
        </el-radio-group>
      </div>

      <!-- 基本信息表单 -->
      <div v-show="showForm" class="containerA1">
        <el-form ref="AccountForm"
                 :model="account"
                 :rules="loginRules"
                 label-width="100px"
                 label-position="left"
                 align="left">

          <!-- 选择国家 -->
          <el-form-item label="国家" prop="country">
            <el-select v-model="account.country" class="recBox">
              <el-option
                  v-for="item in countryList"
                  :key="item.code"
                  :label="item.name"
                  :value="item.code">
              </el-option>
            </el-select>
          </el-form-item>

          <!-- 手机号 -->
          <el-form-item label="手机号码" prop="telephone">
            <el-select v-model="account.phonePre" style="width: 100px">
              <el-option
                  v-for="item in phonePre"
                  :key="item.value"
                  :label="item.pre"
                  :value="item.value"></el-option>
            </el-select>
            <el-input
                style="width: 500px"
                v-model="account.telephone"
                type="text"
                placeholder="手机号码">
            </el-input>
          </el-form-item>

          <!-- 邮箱 -->
          <el-form-item label="电子邮箱" prop="email">
            <el-input v-model="account.email" type="text" placeholder="电子邮箱" class="recBox"></el-input>
          </el-form-item>

          <!-- 密码 -->
          <el-form-item label="设置密码" prop="password">
            <el-input v-model="account.password" type="password" placeholder="密码" class="recBox"></el-input>
          </el-form-item>

          <!-- 重复密码 -->
          <el-form-item label="确认密码" prop="repeatPassword">
            <el-input v-model="account.repeatPassword" type="password" placeholder="确认密码" class="recBox"></el-input>
          </el-form-item>

          <!-- 企业税号 -->
          <el-form-item label="企业税号" prop="code" v-if="showComCodeInput">
            <el-input v-model="account.code" type="text" placeholder="企业税号" class="recBox"></el-input>
          </el-form-item>

          <!-- 政府机构号 -->
          <el-form-item label="政府机构号" prop="code" v-if="showGovCodeInput">
            <el-input v-model="account.code" type="text" placeholder="政府机构号" class="recBox"></el-input>
          </el-form-item>

          <!-- 按钮：重置、提交、上一步-->
          <el-form-item>
            <el-col align="center" style="margin-left: -50px">
              <el-button @click.native.prevent="reset" type="primary">重 置</el-button>
              <el-button @click.native.prevent="handleRegist" :loading="registing" type="primary">提 交</el-button>
              <el-button @click="previous" v-show="showPreviousButton" type="primary">上一步</el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </div>

      <!-- 下一步按钮 -->
      <el-button @click="next" v-show="showNextButton" :disabled="nextButtonDisabled" type="primary"
                 style="margin-top: 40px;width: 500px">下一步
      </el-button>

      <!-- 注册成功页面 -->
      <div v-show="showSuccess">
        <div class="block">注册成功!</div>
        <div>
          <el-button type="primary" @click="backToLogin" style="width: 500px" align="center"> 去登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->
<script>
// import {addUser, getCountryList} from "@/axios/api";
import {addUser} from "@/axios/api";

export default {
  name: "register",
  data() {
    var checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (!value) {
        return callback(new Error(this.$t('regist.propemail1')))
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback()
        } else {
          callback(new Error(this.$t('regist.propemail2')))
        }
      }, 100)
    };
    var checkTelephone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error(this.$t('regist.proptelephone1')))
      }
      setTimeout(() => {

        if (!Number.isInteger(+value)) {
          callback(new Error(this.$t('regist.proptelephone2')))
        } else {
          callback();
        }
      }, 100)
    };
    var checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('regist.proppassword1')));
      } else {
        callback();
      }
    };
    var confirmPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('regist.proprepeatpassword1')));
      } else if (value !== this.account.password) {
        callback(new Error(this.$t('regist.proprepeatpassword2')));
      } else {
        callback();
      }
    };
    var checkCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('regist.propcannotnull')));
      } else {

        callback();
      }
    };
    return {
      step: 0,
      registing: false,

      showPreviousButton: false,
      showNextButton: true,
      nextButtonDisabled: true,

      showRoleSelect: true,
      showForm: false,
      showSuccess: false,

      //机构号和税号显示
      showComCodeInput: false,
      showGovCodeInput: false,

      account: {
        phonePre: '86',
        telephone: '',
        email: '',
        country: '',
        role: '',
        username: '',
        password: '',
        repeatPassword: '',
        code: ''
      },

      phonePre: [
        {
          pre: '+86',
          value: '86',
        },
        {
          pre: '+886',
          value: '886',
        },
        {
          pre: '+852',
          value: '852',
        },
        {
          pre: '+853',
          value: '853',
        },
        {
          pre: '+81',
          value: '81',
        }
      ],
      countryList: [
        {
          name: "中国",
          code: 'CN',
        },
        {
          name: "日本",
          code: 'JP',
        },
      ],
      //输入检查
      loginRules: {
        telephone: [{required: true, validator: checkTelephone, trigger: 'blur'}],
        email: [{required: true, validator: checkEmail, trigger: 'blur'}],
        password: [{required: true, validator: checkPassword, trigger: 'blur'}],
        repeatPassword: [{required: true, validator: confirmPassword, trigger: 'blur'}],
        country: [{required: true, trigger: 'blur'}],
        code: [{required: true, validator: checkCode, trigger: 'blur'}],
      },
      checked: true,
      locale: [],
      service1: '',
      backurl: '',
    }
  },
  methods: {
    handleRoleRadioChange(val) {
      this.account.role = val;
      this.nextButtonDisabled = false;
      console.log("role值:" + val);
      console.log("disabled值:" + this.nextButtonDisabled);
    },
    previous() {
      this.step = 0;
      this.showForm = false;
      this.showRoleSelect = true;
      this.showNextButton = true;
      this.showPreviousButton = false;
    },
    next() {
      this.step = 1;
      this.showRoleSelect = false;
      this.showForm = true;
      this.showNextButton = false;
      this.showPreviousButton = true;
      if (this.account.role == "COMPANY_USER") {
        this.showComCodeInput = true;
        this.showGovCodeInput = false;
      } else if (this.account.role == "GOVERNMENT_USER") {
        this.showGovCodeInput = true;
        this.showComCodeInput = false;
      } else {
        this.showComCodeInput = false;
        this.showGovCodeInput = false;
      }
    },
    reset() {
      this.$refs.AccountForm.resetFields()
    },
    backToLogin() {
      this.$router.push({path: "/login"})
    },
    handleRegist() {
      this.$refs.AccountForm.validate((valid) => {
        if (valid) { //提交
          this.registing = true;
          let params = {
            activated: true,
            country: this.account.country,
            telephone: this.account.phonePre + this.account.telephone,
            email: this.account.email,
            password: this.account.password,
            role: this.account.role,
            code: this.account.code,
          }
          addUser(params).then(res => {
            this.registing = false;
            console.log(res);
            let {code, message} = res.data;
            console.log(message);
            if (code == 200) {
              this.showForm = false;
              this.showNextButton = false;
              this.showPreviousButton = false;
              this.step = 3;
              this.showSuccess = true;
            } else {
              this.$message({
                type: 'error',
                message: message,
              });
            }
          }).catch(err => {
            this.$message({
              type: 'error',
              message: this.$t('message.requesterr'),
            });
            console.log(err);
          })
        } else {  //输入格式有误
          return false;
        }
      });
    },
  },
}
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.root-container {
  width: 1180px;
  padding: 30px;
  margin: auto;
  background-color: #f9f9f9;
}
.containerA {
  width: 65%;
  margin: 50px auto;
}
.recBox {
  width: 600px;
}
.containerA1 {
  width: 100%;
}
.block {
  padding: 50px;
  font-size: 20px;
}

</style>
