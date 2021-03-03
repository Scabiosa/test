import Vue from 'vue'
import Vuex from 'vuex'

//import app from './modules/app'
//import user from './modules/user'
//import permission from './modules/permission'
//import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    //app,
    //user,
    //permission
  },
  state: {
    username: null,
    userId: null,
    token:null,
    role:null,
    isLogin: false,
    company:null
  },
  mutations: {
    setUser(state,userId){
      state.userId = userId;
      state.isLogin = true;
    },
    setToken(state,token){
      state.token = token;
    },
    setRole(state,role){
      state.role = role
    },
    setCompany(state,company){
      state.company = company
    },
    LOGOUT (state){
      state.isLogin = false;
      state.user = null;
      state.token = null;
      state.role = null;
      state.userId = null;
    },
  },
  getters: {
    token(state){
      return state.token
    },
    userId(state){
      return state.userId
    },
    username(state){
      return state.user
    },
    role(state){
      return state.role
    },
    isLogin(state){
      return state.isLogin
    }
  },
  actions:{

  }
})
