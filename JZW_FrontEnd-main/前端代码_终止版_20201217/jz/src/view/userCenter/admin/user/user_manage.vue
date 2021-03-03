<template>
  <div>
    <el-container style="min-height: 600px">
      <el-main>
        <div>
          <h2>{{$t('user.usermanage')}}</h2>
        </div>

        <!-- 搜索与操作- -->
        <div class="block" style="height: 70px">
          <div style="float: left">
            <el-input size="mini" placeholder="" v-model="search.content"></el-input>
            <span>{{$t('user.searchby')}}</span>
            <el-select v-model="search.way">
              <el-option :label="$t('user.telephone')" value="0"></el-option>
              <el-option :label="$t('user.email')" value="1"></el-option>
            </el-select>
            <el-button @click="searchUser" size="mini">{{$t('button.search')}}</el-button>
          </div>
          <div style="float: right">
            <el-button @click="refreshUserList" size="mini">{{ $t('button.refresh') }}</el-button>
            <el-button @click="showAddDia" type="primary" size="mini">{{ $t('button.add') }}</el-button>
            <template>
              <el-popconfirm
                :title="$t('message.deleteConfirm')"
                @onConfirm="batchDeleteUsers">
                <el-button slot="reference"  type="danger" size="mini">{{ $t('button.batchdelete') }}</el-button>
              </el-popconfirm>
            </template>
          </div>
        </div>

        <div class="block">
          <!-- 用户表格 -->
          <el-table
            :data="userList"
            ref="multipleTable"
            @selection-change="handleSelectionChange"
            style="min-height: 500px"
          >
            <el-table-column
              v-model="multipleSelection"
              align="center"
              type="selection"
              width="50"
            ></el-table-column>
            <el-table-column
              :label="$t('user.telephone')"
              prop="telephone"
            ></el-table-column>
            <el-table-column
              :label="$t('user.email')"
              prop="email"
            ></el-table-column>
            <el-table-column
              :label="$t('user.activated')"
              prop="activated"
              :formatter="formatBoolean"
            ></el-table-column>
            <!-- el-table-column
              :label="$t('user.lastupdatetime')"
              prop="updateTime"
            ></el-table-column -->
            <el-table-column
              :label="$t('user.manage')">
              <template slot-scope="scope">
                <el-button size="mini" @click="showDetailDia(scope.row)">{{$t('button.check')}}</el-button>
                <el-button size="mini" type="primary" @click="showEditDia(scope.row)">{{$t('button.edit')}}</el-button>
                <template>
                  <el-popconfirm
                    :title="$t('message.deleteConfirm')"
                    @onConfirm="deleteUser(scope.row)">
                    <el-button slot="reference" size="mini" type="danger">{{$t('button.delete')}}</el-button>
                  </el-popconfirm>
                </template>
                <el-button size="mini" type="success" @click="enableUser(scope.row)">{{$t('button.enable')}}</el-button>
                <el-button size="mini" type="warning" @click="unenableUser(scope.row)">{{ $t('button.unenable') }}</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <el-pagination
            @current-change="handleCurrentChange"
            layout="total, prev, pager, next, jumper"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            :total="totalCount">
          </el-pagination>
        </div>

        <!-- 用户详情对话框 -->
        <el-dialog :title="$t('user.detail')" :visible.sync="detailDialogVisible">
          <table>
            <tr>
              <td>{{$t('user.telephone')}}</td>
              <td>{{form.telephone}}</td>
            </tr>
            <tr>
              <td>{{$t('user.email')}}</td>
              <td>{{form.email}}</td>
            </tr>
            <tr>
              <td>{{$t('user.password')}}</td>
              <td>{{form.password}}</td>
            </tr>
            <tr>
              <td>{{$t('user.country')}}</td>
              <td>{{form.country}}</td>
            </tr>
            <tr>
              <td>{{$t('user.role')}}</td>
              <td>{{form.role}}</td>
            </tr>
            <tr>
              <td>{{$t('user.code')}}</td>
              <td v-if="form.code!=null">{{form.code}}</td>
            </tr>
              <td>{{$t('user.activated')}}</td>
              <td>{{form.activated}}</td>
            <tr>
              <td>{{$t('user.createby')}}</td>
              <td>{{form.createby}}</td>
            </tr>
            <tr>
              <td>{{$t('user.createtime')}}</td>
              <td>{{form.createtime}}</td>
            </tr>
            <tr>
              <td>{{$t('user.updateby')}}</td>
              <td>{{form.updateby}}</td>
            </tr>
            <tr>
              <td>{{$t('user.lastupdatetime')}}</td>
              <td>{{form.lastupdatetime}}</td>
            </tr>
          </table>

          <el-button type="primary" @click="closeDetailDia">{{$t('button.close')}}</el-button>
        </el-dialog>

        <!-- 添加用户对话框 -->
        <el-dialog :title="$t('user.adduser')" :visible.sync="addDialogVisible">
          <el-form>
            <el-form-item :label="$t('user.telephone')">
              <el-input v-model="form.telephone"></el-input>
            </el-form-item>
            <el-form-item :label="$t('user.email')">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item :label="$t('user.password')">
              <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item :label="$t('user.code')">
              <el-input v-model="form.code"></el-input>
            </el-form-item>

            <!-- 选择角色 -->
            <el-form-item :label="$t('user.role')">
              <el-select v-model="form.role">
                <el-option
                  v-for="item in roleList"
                  :key="item.code"
                  :label="item.roleName"
                  :value="item.code"></el-option>
              </el-select>
            </el-form-item>

            <!-- 选择国家 -->
            <el-form-item :label="$t('user.country')">
              <el-select v-model="form.country">
                <el-option
                  v-for="item in countryList"
                  :key="item.code"
                  :label="item.name"
                  :value="item.code"></el-option>
              </el-select>
            </el-form-item>

            <!-- 是否激活 -->
            <el-form-item :label="$t('user.activated')">
              <el-switch v-model="form.activated">
              </el-switch>
            </el-form-item>

            <el-button type="primary" @click="addUser()">{{$t('button.add')}}</el-button>
          </el-form>
        </el-dialog>

        <!-- 编辑用户对话框 -->
        <el-dialog :title="$t('user.edituser')" :visible.sync="editDialogVisible">
          <el-form>
            <el-form-item :label="$t('user.telephone')">
              <el-input v-model="form.telephone"></el-input>
            </el-form-item>
            <el-form-item :label="$t('user.email')">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item :label="$t('user.password')">
              <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item :label="$t('user.code')">
              <el-input v-model="form.code"></el-input>
            </el-form-item>
            <!-- 选择国家 -->
            <el-form-item :label="$t('user.country')">
              <el-select v-model="form.country">
                <el-option
                  v-for="item in countryList"
                  :key="item.code"
                  :label="item.name"
                  :value="item.code"></el-option>
              </el-select>
            </el-form-item>
            <!-- 选择角色 -->
            <el-form-item :label="$t('user.role')">
              <el-select v-model="form.role">
                <el-option
                  v-for="item in roleList"
                  :key="item.code"
                  :label="item.roleName"
                  :value="item.code"></el-option>
              </el-select>
            </el-form-item>
            <el-button type="primary" @click="editUser()">{{$t('button.confirm')}}</el-button>
          </el-form>
        </el-dialog>


      </el-main>
    </el-container>
  </div>
</template>

<script>

import {
  addUser, batchDeleteUser,
  deleteUser, getCountryList,
  getRoleList,
  getUserByEmail,
  getUserByTel,
  getUserList,
  putEditedUser
} from "@/axios/api";
import Vue from "vue";
import {USER_NAME} from "@/store/mutation-types";

  export default {
    name: "user_manage",
    components:{
    },
    data(){
      return{
        adminId: '',
        locale: '',

        search:{
          way: "0",
          content: '',
        },

        userList: [],
        multipleSelection: [],
        allMultipleSelection: [],

        page: {
          currentPage: 1,
          pageSize: 10,
        },
        totalCount: 0,

        form:{
          id: 0,
          code: '',
          telephone: '',
          email: '',
          role: "",
          country: 'CN',
          password: '',
          activated: false,
          createBy: 0,
          createTime: "",
          updateBy: 0,
          updateTime: "",
        },
        roleList:[
          {
            roleName: '注册个人会员',
            code: 'INDIVIDUAL_USER',
          }
        ],

        countryList:[
          {
            name: '中国',
            code: 'CN',
          },
          {
            name: '日本',
            code: 'JP',
          },
        ],

        editDialogVisible: false,
        addDialogVisible: false,
        detailDialogVisible : false,
      }
    },
    created() {
      this.adminId = Vue.ls.get(USER_NAME);
      this.getUserList();
      this.getRoleList();
      this.getCountryList();
    },
    computed:{

    },
    methods:{

      //根据布尔变量activated的值显示 yes 或 no
      formatBoolean: function (row, column, cellValue) {
        var ret = ''  //你想在页面展示的值
        if (cellValue) {
          ret = "yes" //根据自己的需求设定
        } else {
          ret = "no"
        }
        return ret;
      },

      //刷新用户泪列表
      refreshUserList(){
        //清除搜索条件
        this.search.way = "0";
        this.search.content = "";
        //获取用户列表
        this.getUserList();
      },

      //多选处理
      handleSelectionChange(val){
        this.multipleSelection = [];
        for(var i = 0; i < val.length; i++){
          this.multipleSelection.push(val[i].id);
        }
      },

      //换页
      handleCurrentChange(val){
        this.page.currentPage = val;
        this.getUserList();
      },


      //获取角色列表
      getRoleList(){
        let params = {
          pageNo: 1,
          pageSize: 20
        };
        getRoleList(params).then(res => {
          let{code, message, result} = res.data;
          console.log(message);
          this.roleList = result['records'];
        }).catch(err => {
          console.log(err);
        })
      },


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


      //获取用户列表
      getUserList(){
        let params = {
          pageNo: this.page.currentPage,
          pageSize: this.pageSize,
        };
        getUserList(params).then(res => {
          let{code, message, result} = res.data;
          console.log(message);
          this.totalCount = result['total'];
          this.userList = result['records'];
        }).catch(err => {
          console.log(err);
        });
      },

      //显示用户详情对话框
      showDetailDia(user){
        this.form = user;
        this.detailDialogVisible = true;
      },
      //关闭用户详情对话框
      closeDetailDia(){
        this.detailDialogVisible = false;
      },

      //显示添加对话框
      showAddDia(user){
        this.form = {};
        this.addDialogVisible = true;
      },


      //添加用户
      addUser(){
        let params = {
          activated: this.form.activated,
          telephone: this.form.telephone,
          email: this.form.email,
          password: this.form.password,
          country: this.form.country,
          role: this.form.role,
          code: this.form.code,
          //createBy: this.adminId,

        }
        addUser(params).then(res=>{
          //console.log(res.data);
          let {code, message, success} = res.data;
          console.log(message);
          if(success){
            //发出成功通知
            this.$notify({
              title: this.$t('message.success'),
              message: this.$t('message.operationIsInEffect'),
              type: 'success'
            });
            this.addDialogVisible = false;
            this.getUserList();
          }else{
            //发出失败通知
            this.$notify({
              title: this.$t('message.fail'),
              message: this.$t('message.operationFailed'),
              type: 'error'
            });
          }
        }).catch(err => {
          console.log(err);
        })
      },

      //显示修改对话框
      showEditDia(user){
        //获取用户数据
        this.form = user;
        //显示用户编辑对话框
        this.editDialogVisible = true;
      },

      //修改信息
      editUser(){
        let params =  this.form;
        putEditedUser(params).then(res => {
          //console.log(res);
          let {code, success} = res.data;
          if(success){
            //发出成功通知
            this.$notify({
              title: this.$t('message.success'),
              message: this.$t('message.operationIsInEffect'),
              type: 'success'
            });

            this.editDialogVisible = false;
            this.getUserList();
          }else{
            //发出失败通知
            this.$notify({
              title: this.$t('message.fail'),
              message: this.$t('message.operationFailed'),
              type: 'error'
            });
          };
        }).catch(err => {
          console.log(err);
        });
      },

      //激活用户
      enableUser(user){
        if(user.activated){
          this.$notify({
            title: this.$t('message.warning'),
            message: this.$t('message.thisUserIsActivated'),
            type: 'warning'
          });
          return ;
        }
        let params = {
          id: user.id,
          activated: true
        }
        putEditedUser(params).then(res => {
          let {code, message, success} = res.data;
          console.log(message);
          if(success){
            user.activated = true;
            //发出成功通知
            this.$notify({
              title: this.$t('message.success'),
              message: this.$t('message.operationIsInEffect'),
              type: 'success'
            });
          }else {
            //发出失败通知
            this.$notify({
              title: this.$t('message.fail'),
              message: this.$t('message.operationFailed'),
              type: 'error'
            });
          }
        }).catch(err => {
          console.log(err);
        })
      },

      //停用用户
      unenableUser(user){
        if(!user.activated){
          this.$notify({
            title: this.$t('message.warning'),
            message: this.$t('message.thisUserIsNotActivated'),
            type: 'warning'
          });
          return ;
        }
        let params = {
          id: user.id,
          activated: false
        }
        putEditedUser(params).then(res => {
          let {code, message, success} = res.data;
          console.log(message);
          if(success){
            user.activated = false;
            //发出成功通知
            this.$notify({
              title: this.$t('message.success'),
              message: this.$t('message.operationIsInEffect'),
              type: 'success'
            });
          }else {
            //发出失败通知
            this.$notify({
              title: this.$t('message.fail'),
              message: this.$t('message.operationFailed'),
              type: 'error'
            });
          }
        }).catch(err => {
          console.log(err);
        })

      },

      //批量删除用户
      batchDeleteUsers(){
        if(this.multipleSelection.length == 0){
          this.$notify({
            title: this.$t('message.warning'),
            message: this.$t('message.noSelect'),
            type: 'warning'
          });
          return;
        }
        let idsStr = this.multipleSelection.join(",");
        let params = {
          ids: idsStr,
        }
        batchDeleteUser(params).then(res => {
          let{code, message, success} = res.data;
          console.log(message);
          this.page.currentPage=1;
          this.getUserList();
          //发出成功通知
          this.$notify({
            title: this.$t('message.success'),
            message: this.$t('message.operationIsInEffect'),
            type: 'success'
          });
        }).catch(err => {
          //发出失败通知
          this.$notify({
            title: this.$t('message.fail'),
            message: this.$t('message.operationFailed'),
            type: 'error'
          });
        })
      },


      //删除用户
      deleteUser(user){
        let params = {
          id: user.id,
        };
        deleteUser(params).then(res => {
          let {code, message, success} = res.data;
          console.log(message);
          if(success){
            this.getUserList();
            //发出成功通知
            this.$notify({
              title: this.$t('message.success'),
              message: this.$t('message.operationIsInEffect'),
              type: 'success'
            });
          }else{
            //发出失败通知
            this.$notify({
              title: this.$t('message.fail'),
              message: this.$t('message.operationFailed'),
              type: 'error'
            });
          };
        }).catch(err => {
          console.log(err);
        });


      },


      //按条件搜索用户
      searchUser(){
        if(this.search.content.length == 0){
          alert("输入为空！");
        }
        else {
          if(this.search.way == 0){  //按电话搜索
            let params = {
              tel: this.search.content
            }
            getUserByTel(params).then(res => {
              let {code, message, result, success} = res.data;
              console.log(message);
              if(result == null){
                this.userList = [];
                this.totalCount = 0;
                this.page.currentPage = 1;
              }else{
                this.totalCount = 1;
                this.page.currentPage = 1;
                this.userList = [result];
              }
            }).catch(err =>{
              console.log(err);
            })

          }else if(this.search.way == 1){  //按邮箱搜索
            let params = {
              email: this.search.content
            }
            getUserByEmail(params).then(res => {
              let {code, message, result, success} = res.data;
              console.log(message);
              if(result == null){
                this.totalCount = 0;
                this.page.currentPage = 1;
                this.userList = [];
              }else{
                this.totalCount = 1;
                this.page.currentPage = 1;
                this.userList = [result];
              }
            }).catch(err =>{
              console.log(err);
            })
          }
        }
      }
    }
  }

</script>

<style scoped>
  .block{
    margin: 10px;
    padding: 10px;
    border: lightgrey 1px solid;
    border-radius: 5px;
    height: auto;
  }
</style>
