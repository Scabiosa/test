<template>
  <div class="user-wrapper">
    <span class="action">
      <router-link :to="{name:'homepage'}" class="main_homepage">
        <span>{{$t('pub.main')}}</span>
      </router-link>
    </span>

    <span class="action" v-if="!isLogin">
        <!-- 登陆 -->
        <button class="btn" @click="login">{{$t('pub.login')}}</button>
        <!-- 注册 -->
        <button class="btn" @click="regist">{{$t('pub.freeregist')}}</button>
    </span>
    <span class="action" v-else>
      <!-- 用户中心 -->
      <span class="action">
        <router-link :to="{name:'userCenter'}" class="main_homepage">
          <span>{{$t('pub.usercenter')}}</span>
        </router-link>
      </span>

      <!-- 用户名 -->
      <!-- button class="btn">{{username}}</button -->
      <!-- 登出 -->
      <button class="btn" @click="logout">{{$t('pub.logout')}}</button>

    </span>



  </div>
</template>

<script>
    import Vue from "vue";
    import {ACCESS_TOKEN, USER_ID, USER_NAME, USER_ROLE} from "../../store/mutation-types";
    import {requestLogout} from "../../axios/api";
    export default {
      name: "MainMenu",
      data(){
        return{
          username: '',
        }
      },
      created() {
        //this.username = Vue.ls.get(USER_NAME);
      },
      computed:{
        isLogin(){
          if(Vue.ls.get(USER_ROLE) && Vue.ls.get(USER_ID) && Vue.ls.get(ACCESS_TOKEN) ){
            this.$store.commit("setRole", Vue.ls.get(USER_ROLE))
            this.$store.commit("setUser", Vue.ls.get(USER_ID))
            this.$store.commit("setToken",Vue.ls.get(ACCESS_TOKEN))
          }else{
            this.$store.commit("LOGOUT");
          }
          return this.$store.getters.isLogin;
        },
      },
      methods:{

        //登陆
        login(){
          this.$router.push({path:'/login'});
          /**
          let service = "http://" + window.location.host + "/#/homepage";
          let back = "/homepage";

          let serviceUrl = encodeURIComponent(service);
          let backUrl = encodeURIComponent(back);
          window.location.href = window._CONFIG['casPrefixUrl'] + "/login?service=" + serviceUrl + "&backurl=" + backUrl;
           **/
        },
        //注册
        regist(){
          this.$router.push({path:'/register'});
          /**
          let service = "http://" + window.location.host + "/#/homepage";
          let back = "/homepage";

          let serviceUrl = encodeURIComponent(service);
          let backUrl = encodeURIComponent(back);
          window.location.href = window._CONFIG['casPrefixUrl'] + "/regist?service=" + serviceUrl + "&backurl=" + backUrl;
           **/
        },
        //登出
        logout(){
          Vue.ls.clear(); //清除本地用户数据
          this.$store.commit("LOGOUT"); //清除用户登陆状态
          this.$router.push('/homepage')
          requestLogout().then(res=>{
          })
        }
      }
    }
</script>

<style scoped>
  .action {
    margin-left: 20px;
    min-width: 266px;
    flex: 0 1 auto;
    text-align: right;
  }

  .main_homepage {
    color: inherit;
    text-decoration: none;
  }
  .btn{
    background: none;
    border: none;
    color: white;
  }
</style>
