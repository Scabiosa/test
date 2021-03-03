import axios from 'axios'

axios.defaults.baseURL = "/cas/ecnu";
axios.defaults.timeout = 30000;


//请求登录
export const requestLogin = params =>{
  return axios.post('/user/login', params);
}

//新增用户
export const addUser = params =>{
  return axios.post('/user/add', params);
}

//获取国家列表
export const getCountryList = params =>{
  return axios.get('/country/list', {params})
}


