<template>
  <div class="common">
    <div class="head">
      <div class="title">{{$t('companyPurchase.purchase')}}</div>
      <div class="button-box">
        <el-button type="primary" size="mini" @click="add">{{$t('button.add')}}</el-button>
        <el-button size="mini">{{$t('button.publish')}}</el-button>
      </div>
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
        <div  v-for="(n,index) in purchase.slice(0,pageSize/2)" :key="index" class="news-item">
          <router-link :to="{name:'companypurchasedetail',params:{id:n.id}}">
            <span class="content-title">{{n.name}}</span>
          </router-link>
          <span class="content-date">({{n.createTime}})</span>
          <el-button size="mini" @click="edit(n)">{{$t('button.edit')}}</el-button>
          <el-button type="danger" size="mini" @click="del(n.id)">{{$t('button.delete')}}</el-button>
        </div>
      </div>
      <div class="right">
        <div  v-for="(n,index) in purchase.slice(pageSize/2,pageSize)" :key="index" class="news-item">
          <router-link :to="{name:'companypurchasedetail',params:{id:n.id}}">
            <span class="content-title">{{n.name}}</span>
          </router-link>
          <span class="content-date">({{n.createTime}})</span>
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
        <el-form ref="form" model="form" label-width="80px">
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
            <el-input v-model="form.biefIntroduction" type="textarea" placeholder="字数在100字以内"></el-input>
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
          <el-form-item :label="$t('companyDialog.img')">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="form.photoPaths" :src="form.photoPaths" class="avatar"  alt="">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
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
  import {listPurchase,getPrimaryCategory,getSubCategories,getPath,
    addPurchase,delPurchase,editPurchase} from "../../axios/api";
  import {ACCESS_TOKEN,USER_COMPANY} from "../../store/mutation-types";
  import Vue from 'vue'
  export default {
    name: 'Purchase',
    mounted(){
      listPurchase({
        companycode:Vue.ls.get(USER_COMPANY).code,
        pageNo:this.pageNo,
        pageSize:this.pageSize
      }).then(res=>{
        let {code,msg,result} = res.data;
        if(code === 200) {
          this.total = result.total;
          this.purchase = result.records;
        }else{
          this.$message.error(msg);
        }
      })
      getPrimaryCategory({
        objectType:'purchase',
        locale:localStorage.getItem('lang')
      }).then(res=>{
        let {code, msg, result} = res.data;
        if(code === 200){
          this.category1Options=result;
        }else{
          this.$message.error(msg);
        }
      })
    },
    watch:{
      category1(newVal){
        getSubCategories({
          code:newVal.code,
          locale:localStorage.getItem('lang')
        }).then(res=>{
          let {code, msg, result} = res.data;
          if(code === 200){
            this.category2Options=result;
          }else{
            this.$message.error(msg);
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
            this.$message.error(msg);
          }
        })
      },
      category3(newVal){
        this.selectedCategory=newVal.code;
      }
    },
    methods: {
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      },
      handleExceed (files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      beforeRemove (file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`)
      },
      handleChange (value) {
        console.log(value)
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      },
      handleAvatarSuccess(res, file) {
        this.form.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
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
            this.$message.error(msg);
          }
        })
      },
      add () {
        this.operation = true;
        this.form={id:0, name: '', model:'', briefIntroduction:'', fileList:[], photoPaths:''}
        this.category1=this.category2=this.category3=null;
        getPrimaryCategory({
          objectType:'purchase',
          locale:localStorage.getItem('lang')
        }).then(res=>{
          let {code, msg, result} = res.data;
          if(code === 200){
            this.dialogVisible=true;
            this.category1Options=result;
          }else{
            this.$message.error(msg);
          }
        })
      },
      del(id){
        delPurchase({
          id:id
        }).then(res=>{
          let {code, msg, result} = res.data;
          if(code === 200){
            this.$message.success(msg);
          }else{
            this.$message.error(msg);
          }
        });

      },
      operate(){
        this.dialogVisible=false;
        if(this.operation===true){
            addPurchase({
              id:1,
              clicks:null,
              briefIntroduction: this.form.briefIntroduction,
              companyCode:Vue.ls.get(USER_COMPANY).code,
              detailIntroduction: this.form.fileList[0],
              locale: localStorage.getItem('lang'),
              model: this.form.model,
              name: this.form.name,
              photoPaths: this.form.photoPaths,
              typeId: this.selectedCategory,
            }).then(res=>{
              let {code, msg, result} = res.data;
              if(code === 200){
                this.$message.success(msg);
              }else{
                this.$message.error(msg);
              }
            })
        }else{
          editPurchase({
            id:this.form.id,
            clicks:null,
            briefIntroduction: this.form.briefIntroduction,
            companyCode:Vue.ls.get(USER_COMPANY).code,
            detailIntroduction: this.form.fileList[0],
            locale: localStorage.getItem('lang'),
            model: this.form.model,
            name: this.form.name,
            photoPaths: this.form.photoPaths,
            typeId: this.selectedCategory,
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
    },
   },
    data () {
      return {
        form: {
          id:0,
          name: '',
          model:'',
          briefIntroduction:'',
          fileList:[],
          photoPaths:''
        },
        category1:'',
        category2:'',
        category3:'',
        category1Options:[],
        category2Options:[],
        category3Options:[],
        selectedCategory:-1,
        dialogVisible:false,
        pageSize:20,
        pageNo:1,
        total:0,
        purchase:[]
      }
    }
  }
</script>

<style scoped>
  .title{
    /*布局*/
    position:relative;
    top:10px;
    /*样式*/
    background-color:#3F3F3F;
    width:150px;
    height:31px;
    /*文字样式*/
    color:white;
    text-align:center;
    line-height:31px;
    float:left;
  }
  .pagination{
    margin-top:10px;
    float:right;
    margin-right:30px;
  }
  .head{
    width:1150px;
    display:inline-block;
  }
  .left{
    float:left;
    padding-right:30px;
    border-right:1px solid black;
  }
  .right{
    margin-left:30px;
    flex:1;
  }
  .news-item{
    margin-top:8px;
  }
  .content-date{
    margin-right:50px;
  }
  .content-title{
    display:inline-block;
    width:200px;
  }
  .content{
    display:flex;
    width:1150px;
    min-height:400px;
  }
  .button-box{
    position:relative;
    top:14px;
    left:5px;
    float:left;
  }
</style>
