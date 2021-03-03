<template>
  <div class="regist">
    <h3>{{$t('login.regist')}}</h3>
    <el-steps :active="step" finish-status="success">
      <el-step :title="$t('login.step1')"></el-step>
      <el-step :title="$t('login.step2')"></el-step>
      <el-step :title="$t('login.step3')"></el-step>
    </el-steps>

    <el-button style="margin-top: 12px;" @click="previous" v-show="showPreviousButton">{{ $t('login.prestep') }}</el-button>
    <el-button style="margin-top: 12px;" @click="next" v-show="showNextButton" :disabled="nextButtonDisabled">{{ $t('login.nextstep') }}</el-button>

    <div class="main">
      <!-- 角色选择 -->
      <div class="roleSelect" v-show="showRoleSelect">
        <el-radio-group v-model="account.role" @change="handleRoleRadioChange">
          <el-radio v-model="roleRadio" label="INDIVIDUAL_USER"  border>{{$t('role.ind')}}</el-radio>
          <el-radio v-model="roleRadio" label="COMPANY_USER"  border>{{$t('role.com')}}</el-radio>
          <el-radio v-model="roleRadio" label="GOVERNMENT_USER"  border>{{$t('role.gov')}}</el-radio>
        </el-radio-group>
      </div>

      <!-- 基本信息 -->
      <div v-show="showForm" class="form">
        <el-form class="login-container"
                 ref="AccountForm"
                 :model="account"
                 :rules="loginRules"
                 label-position="left">

          <!-- 选择国家 -->
          <el-form-item :label="$t('account.country')" prop="country">
            <el-select v-model="account.country">
              <el-option
                v-for="item in countryList"
                :label="item.name"
                :value="item.code"></el-option>
            </el-select>
          </el-form-item>
          <!-- 手机号 -->
          <el-form-item :label="$t('account.telephone')" prop="telephone">
            <div class="telephoneInput">
              <el-select
                v-model="account.phonePre"
                style="width: 100px">
                <el-option
                  v-for="item in phonePre"
                  :label="item.pre"
                  :value="item.value"></el-option>
              </el-select>
              <el-input
                style="width: 300px"
                v-model="account.telephone"
                type="text"
                :placeholder="$t('account.telephone')">
              </el-input>
            </div>
          </el-form-item>
          <!-- 邮箱 -->
          <el-form-item :label="$t('account.email')" prop="email">
            <el-input
              v-model="account.email"
              type="text"
              :placeholder="$t('account.email')">
            </el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item :label="$t('account.password')" prop="password">
            <el-input v-model="account.password" type="password" :placeholder="$t('account.password')"></el-input>
          </el-form-item>

          <!-- 重复密码 -->
          <el-form-item :label="$t('account.repeatpassword')" prop="repeatPassword">
            <el-input v-model="account.repeatPassword" type="password" :placeholder="$t('account.repeatpassword')"></el-input>
          </el-form-item>

          <!-- 企业税号 -->
          <el-form-item :label="$t('account.comcode')" prop="code" v-if="showComCodeInput">
            <el-input v-model="account.code" type="text" :placeholder="$t('account.comcode')"></el-input>
          </el-form-item>

          <!-- 政府机构号 -->
          <el-form-item :label="$t('account.govcode')" prop="code" v-if="showGovCodeInput">
            <el-input v-model="account.code" type="text" :placeholder="$t('account.govcode')"></el-input>
          </el-form-item>

          <el-form-item>
            <div class="btnResetAndRegist">
              <el-button type="primary" class="resetBtn" @click.native.prevent="reset">{{$t('login.reset')}}</el-button>
              <el-button @click.native.prevent = "handleRegist" :loading="registing" type="primary">{{$t('login.confirm')}}</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>

      <!-- 成功 -->
      <div class="successPage" v-show="showSuccess">
        <div class="sblock">
          {{$t('login.done')}}
        </div>
        <div class="loginButton">
          <el-button type="primary" @click="backToLogin">{{$t('login.login')}}</el-button>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
    import {addUser,getCountryList} from "../axios/api";

    export default {
        name: "regist",
        data(){
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

                registing: false,

                step: 0,
                roleRadio:'',

                showPreviousButton: false,
                showNextButton: true,
                nextButtonDisabled: true,

                showRoleSelect: true,
                showForm: false,
                showSuccess:false,

                //机构号和税号显示
                showComCodeInput: false,
                showGovCodeInput: false,

                account:{
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

                phonePre:[
                  {
                    pre:'+86',
                    value:'86',
                  }
                ],
                countryList:[
                  {
                    name: "中国",
                    code: 'CN',
                  },
                ],
                //输入检查
                loginRules:{
                    telephone: [{required: true,validator: checkTelephone,trigger:'blur'}],
                    email: [{required: true,validator: checkEmail,trigger:'blur'}],
                    password: [{required: true,validator: checkPassword, trigger: 'blur'}],
                    repeatPassword: [{required: true,validator: confirmPassword, trigger: 'blur'}],
                    country: [{required: true, trigger: 'blur'}],
                    code: [{required: true,validator: checkCode, trigger: 'blur'}],
                },
                checked: true,
                locale: [],
                service1: '',
                backurl: '',


            }
        },
      created() {
        this.service1 = this.$route.query.service;
        this.backurl = this.$route.query.backurl;
        this.getCountryList();
      },
      mounted(){
            //this.locale = this.$i18n.locale;
            //this.selectChanged(this.locale);
            //this.select = this.$18n.locale;

        },
      methods:{
        //获取国家列表
        getCountryList(){
          let params = {};
          getCountryList(params).then(res => {
            let{code, message, result} = res.data;
            console.log(message);
            this.countryList = result['records'];
          }).catch(err => {
            console.log(err);
          })
        },
        handleRoleRadioChange(val){
          this.account.role = val;
          this.nextButtonDisabled = false;
        },
        previous(){
          this.showForm = false;
          this.showRoleSelect = true;
          this.showNextButton = true;
          this.showPreviousButton = false;
        },
        next() {
          this.step=2;
          this.showRoleSelect = false;
          this.showForm = true;
          this.showNextButton = false;
          this.showPreviousButton = true;
          if(this.account.role == "COMPANY_USER"){
            this.showComCodeInput = true;
            this.showGovCodeInput = false;
          }else if(this.account.role == "GOVERNMENT_USER"){
            this.showGovCodeInput = true;
            this.showComCodeInput = false;
          }else{
            this.showComCodeInput = false;
            this.showGovCodeInput = false;
          }
        },
        reset(){
          this.$refs.AccountForm.resetFields()
        },
        backToLogin(){
          this.$router.push({path:"/login?service=" + this.service1 + "&backurl=" + this.backurl})
        },
        handleRegist(){
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
              addUser(params).then(res=>{
                this.registing = false;
                console.log(res);
                let {code, message} = res.data;
                console.log(message);
                if(code == 200){
                  this.showForm = false;
                  this.showNextButton = false;
                  this.showPreviousButton = false;
                  this.step = 3;
                  this.showSuccess = true;
                }else{
                  this.$message({
                    type: 'error',
                    message:message,
                  });
                }
              }).catch(err=>{
                this.$message({
                  type: 'error',
                  message:this.$t('message.requesterr'),
                });
              })
            } else {  //输入格式有误
              return false;
            }
          });
        },

      }
    }
</script>

<style scoped>
  body{
    backgroud: #DFE9FB;
  }
  .regist{
    padding: 30px;

  }
  .main{
    width: 600px;
    margin: auto;
  }
  .form{
    margin:50px 100px;
  }
  .roleSelect{
    text-align: center;
  }
  .login-container{
    width: 400px;
    box-sizing: border-box;
  }
  .telephoneInput{
    display: inline-block;
  }
  .successPage{
    width: 400px;
    padding: 50px 0;
    text-align: center;
  }
  .sblock{
    color: greenyellow;
    padding: 50px;
    font-size: 20px;
  }
  .btnResetAndRegist{
    float: right;
  }
  .loginButton{
  }

</style>
