<template>
  <div>
    <div class="head">
      <span class="title" v-if="isInvention">{{$t('companyTechnology.invention')}}</span>
      <span class="title" v-else>{{$t('companyTechnology.software')}}</span>
      <el-button type="primary" @click="change" size="mini">{{$t('companySupply.button')}}
        <span v-if="isInvention">{{$t('companyTechnology.software')}}</span>
        <span v-else>{{$t('companyTechnology.invention')}}</span>
      </el-button>
      <el-button size="mini" @click="add">{{$t('button.add')}}</el-button>
      <el-button size="mini" @click="">{{$t('button.publish')}}</el-button>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="pageNo"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <div  v-for="(n,index) in technology.slice(0,pageSize/2)" :key="index" class="news-item">
          <router-link :to="{name:'companypatentDetail',params:{id:n.id}}"  v-if="isInvention">
            <span class="content-title">{{n.name}}</span>
          </router-link>
          <router-link :to="{name:'companysoftwareDetail',params:{id:n.id}}" v-else>
            <span class="content-title">{{n.name}}</span>
          </router-link>
          <span class="content-date">({{n.createTime.slice(0,10)}})</span>
          <el-button size="mini" @click="edit(n)">{{$t('button.edit')}}</el-button>
          <el-button type="danger" size="mini" @click="del(n.id)">{{$t('button.delete')}}</el-button>
        </div>
      </div>
      <div class="right">
        <div  v-for="(n,index) in technology.slice(pageSize/2,pageSize)" :key="index" class="news-item">
          <router-link :to="{name:'companydynamicdetail',params:{id:n.id}}">
            <span class="content-title">{{n.name}}</span>
          </router-link>
          <span class="content-date">({{n.createTime.slice(0,10)}})</span>
          <el-button size="mini" @click="edit(n)">{{$t('button.edit')}}</el-button>
          <el-button type="danger" size="mini" @click="del(n.id)">{{$t('button.delete')}}</el-button>
        </div>
      </div>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        center
        @close="dialogVisible=false">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item :label="$t('companyDialog.title')">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item :label="$t('companyDialog.model')">
            <el-input v-model="form.model"></el-input>
          </el-form-item>
          <el-form-item :label="$t('companyDialog.select')">
            <el-select v-model="category1" :placeholder="$t('button.plsselect')" class="select">
              <el-option
                v-for="item in category1Options"
                :key="item.code"
                :label="item.name"
                :value="item">
              </el-option>
            </el-select>
            <el-select v-model="category2" :placeholder="$t('button.plsselect')" class="select">
              <el-option
                v-for="item in category2Options"
                :key="item.code"
                :label="item.name"
                :value="item">
              </el-option>
            </el-select>
            <el-select v-model="category3" :placeholder="$t('button.plsselect')" class="select">
              <el-option
                v-for="item in category3Options"
                :key="item.code"
                :label="item.name"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :label="$t('companyDialog.briefIntroduction')">
            <el-input v-model="form.briefIntroduction" type="textarea" placeholder="字数在100字以内"></el-input>
          </el-form-item>
          <el-form-item :label="$t('companyDialog.details')">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :on-exceed="handleExceed"
              :file-list="form.fileList">
              <el-button size="small" type="primary">选择上传PDF</el-button>
            </el-upload>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">{{$t('button.cancel')}}</el-button>
         <el-button type="primary" @click="operate">{{$t('button.save')}}</el-button>
         </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import {getPrimaryCategory,getSubCategories,listInvention,listSoftware,getPath,
    addInvention,delInvention,editInvention,addSoftware,delSoftware,editSoftware} from "../../axios/api";
  import {ACCESS_TOKEN,USER_COMPANY} from "../../store/mutation-types";
  import Vue from 'vue'
  export default {
    name: "TechnologyShow",
    mounted(){
      listInvention({
        companycode:Vue.ls.get(USER_COMPANY).code,
        pageNo:this.pageNo,
        pageSize:this.pageSize
      }).then(res=>{
        let {code,msg,result} = res.data;
        if(code === 200){
          this.total = result.total;
          this.technology = result.records;
        }
      })
    },
    watch:{
      category1(newVal){
        console.log(newVal);
        getSubCategories({
          code:newVal.code,
          locale:localStorage.getItem('lang')
        }).then(res=>{
          console.log(res);
          let {code, msg, result} = res.data;
          if(code === 200){
            this.category2Options=result;
          }else{
            this.$message({
              type: 'error',
              message:msg,
            });
          }
        })
      },
      category2(newVal){
        getSubCategories({
          code:newVal.code,
          locale:localStorage.getItem('lang')
        }).then(res=>{
          let {code, msg, result} = res.data;
          if(code === 200){
            this.category3Options=result;
          }else{
            this.$message({
              type: 'error',
              message:msg,
            });
          }
        })
      },
      category3(newVal){
        this.selectedCategory=newVal.code;
      }
    },
    methods: {
      getCategory(){
        getPrimaryCategory({
          objectType:'technology',
          locale:localStorage.getItem('lang')
        }).then(res=>{
          let {code, msg, result} = res.data;
          if(code === 200){
            this.dialogVisible=true;
            this.category1Options=result;
          }else{
            this.$message({
              type: 'error',
              message:msg,
            });
          }
        })
      },
      change(){
        this.isInvention = !this.isInvention;
        if(this.isInvention === true){
          listInvention({
            companycode:Vue.ls.get(USER_COMPANY).code,
            pageNo:this.pageNo,
            pageSize:this.pageSize
          }).then(res=>{
            let {code,msg,result} = res.data;
            if(code === 200){
              this.total = result.total;
              this.technology = result.records;
            }else{
              this.$message({
                type:'error',
                message:msg
              })
            }
          })
        }else if(this.isInvention === false){
          listSoftware({
            companycode:Vue.ls.get(USER_COMPANY).code,
            pageNo:this.pageNo,
            pageSize:this.pageSize
          }).then(res=>{
            let {code,msg,result} = res.data;
            if(code === 200){
              this.total = result.total;
              this.technology = result.records;
            }else{
              this.$message({
                type:'error',
                message:msg
              })
            }
          })
        }
      },
      edit(item){
        getPath({
          code:item.typeCode,
          locale:localStorage.getItem('lang')
        }).then(res=>{
          let {code, msg, result} = res.data;
          if(code === 200){
            this.dialogVisible=true;
            this.category3=result[0];
            this.category2=result[1];
            this.category1=result[2];
            this.form=item;
          }else{
            this.$message({
              type: 'error',
              message:msg,
            });
          }
        })
      },
      del(id){
        if(this.isInvention){
          delInvention({
            id:id
          }).then(res=>{
            let {code, msg, result} = res.data;
            if(code === 200){
              this.$message({
                type: 'success',
                message:msg,
              });
            }else{
              console.log(msg);
              this.$message({
                type: 'error',
                message:msg,
              });
            }
          })
        }else{
          delSoftware({
            id:id
          }).then(res=>{
            let {code, msg, result} = res.data;
            if(code === 200){
              this.$message({
                type: 'success',
                message:msg,
              });
            }else{
              console.log(msg);
              this.$message({
                type: 'error',
                message:msg,
              });
            }
          })
        }
      },
      operate(){
        this.dialogVisible=false;
        if(this.operation===true){
          if(this.isInvention){
            addInvention({
              id:1,
              clicks:null,
              briefIntroduction: this.form.briefIntroduction,
              companyCode: Vue.ls.get(USER_COMPANY).code,
              detailIntroduction: this.form.fileList[0],
              locale: localStorage.getItem('lang'),
              model: this.form.model,
              name: this.form.name,
              typeId: this.selectedCategory
            }).then(res=>{
              let {code, msg, result} = res.data;
              if(code === 200){
                this.$message({
                  type: 'success',
                  message:msg,
                });
              }else{
                console.log(msg);
                this.$message({
                  type: 'error',
                  message:msg,
                });
              }
            })
          }else{
            addSoftware({
              id:1,
              clicks:null,
              briefIntroduction: this.form.briefIntroduction,
              companyCode:Vue.ls.get(USER_COMPANY).code,
              detailIntroduction: this.form.fileList[0],
              locale: localStorage.getItem('lang'),
              model: this.form.model,
              name: this.form.name,
              typeId: this.selectedCategory
            }).then(res=>{
              let {code, msg, result} = res.data;
              if(code === 200){
                this.$message({
                  type: 'success',
                  message:msg,
                });
              }else{
                this.$message({
                  type: 'error',
                  message:msg,
                });
              }
            })
          }
        }else{
          if(this.isInvention){
            editInvention({
              id:this.form.id,
              clicks:null,
              briefIntroduction: this.form.briefIntroduction,
              companyCode: Vue.ls.get(USER_COMPANY).code,
              detailIntroduction: this.form.fileList[0],
              locale: localStorage.getItem('lang'),
              model: this.form.model,
              name: this.form.name,
              typeId: this.selectedCategory
            }).then(res=>{
              let {code, msg, result} = res.data;
              if(code === 200){
                this.$message({
                  type: 'success',
                  message:msg,
                });
              }else{
                this.$message({
                  type: 'error',
                  message:msg,
                });
              }
            })
          }else{
            editSoftware({
              id:this.form.id,
              clicks:null,
              briefIntroduction: this.form.briefIntroduction,
              companyCode:Vue.ls.get(USER_COMPANY).code,
              detailIntroduction: this.form.fileList[0],
              locale: localStorage.getItem('lang'),
              model: this.form.model,
              name: this.form.name,
              typeId: this.selectedCategory
            }).then(res=>{
              let {code, msg, result} = res.data;
              if(code === 200){
                this.$message({
                  type: 'success',
                  message:msg,
                });
              }else{
                this.$message({
                  type: 'error',
                  message:msg,
                });
              }
            })
          }
        }
      },
      add () {
        this.operation = true;
        this.form={id:0, name: '', model:'', briefIntroduction:'', fileList:[], photoPaths:''}
        this.category1=this.category2=this.category3=null;
        this.dialogVisible=true;
        this.getCategory();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file)
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`)
      },
      handleChange(value) {
        console.log(value)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      }
    },
    data () {
      return {
        isInvention:true,
        category1:{},
        category2:{},
        category3:{},
        category1Options:[],
        category2Options:[],
        category3Options:[],
        selectedCategory:-1,
        form: {
          id:0,
          name: '',
          model:'',
          briefIntroduction:'',
          fileList:[]
        },
        dialogVisible: false,
        operation: true, // true为添加，false为编辑
        technology:[],
        pageNo:1,
        pageSize:20,
        total:0
      }
    }
  }
</script>

<style scoped>
  .title{
    /*样式*/
    background-color:#3F3F3F;
    width:150px;
    height:31px;
    /*文字样式*/
    color:white;
    display:inline-block;
    text-align:center;
    line-height:31px;
  }
  .head{
    width:1150px;
    margin-top:10px;
    display:inline-block;
  }
  .pagination{
    float:right;
    margin-right: 30px;
  }
  .left{
    /*margin-left:20px;*/
    float:left;
    padding-right:50px;
    border-right:1px solid black;
  }
  .right{
    padding-left:50px;
    flex:1;
  }
  .news-item{
    margin-top:8px;
  }
  .content-date{
    margin-right:20px;
  }
  .content-title{
    display:inline-block;
    width:150px;
  }
  .content{
    display:flex;
    min-height:400px;
    /*width:1030px;*/
  }
</style>
