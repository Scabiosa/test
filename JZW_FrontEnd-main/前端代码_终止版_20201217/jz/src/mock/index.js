import Mock from 'mockjs';
import produceNewsData from './mockdata.js';
//import loginData from './mockdata.js';
var axios = require('axios')
import MockAdapter from 'axios-mock-adapter'

import {users} from './data/user'

/*Mock.setup(
  {
    timeout: 800,
  }
);*/
//Mock.mock('/api/articles', 'get', produceNewsData)
//Mock.mock('user/login', 'post', loginData)
//Mock.mock(/api\/site\/his\/home/, 'get', mockdata.home)
//Mock.mock(/api\/site\/his\/getAllCard/, 'get',mockdata.getAll)
export default {
  init(){
    let mock = new MockAdapter(axios);

    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    mock.onGet('/error').reply(500,{
      msg: 'failure'
    })

    mock.onPost('/user/login').reply(config=>{
      let{username, password} = JSON.parse(config.data);
      return new Promise((resolve, reject) =>{
        let user = null;
        setTimeout(()=>{
          let hasUser = users.some(person => {
            if(person.username === username && person.password === password){
              user = JSON.parse(JSON.stringify(person));
              user.password = undefined;
              return true;
            }else{
              return false;
            }
          });
          if(hasUser){
            resolve([200, {code:200, msg:'登录成功',user}]);
          }else{
            resolve([200,{code:500, msg:'帐号错误'}])
          }
        }, 500);
      })
    })

    mock.onGet('/api/personal').reply(config => {
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve([200,
            [{
              id:'1',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄',
              IsAudit:0,
              sex:'1'
            }, {
            id:'2',
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            IsAudit:1,
            sex:'0'
          }, {
            id:'3',
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            IsAudit:10,
            sex:'-1'
          }]
          ])
        }, 500)
      })
    })
  }
}
