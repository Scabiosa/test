<template>
  <div class="content">
    <div class="head">
      <div class="title">{{$t('companyCertification.certification')}}</div>
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
    <div v-for="(item,index) in certification" :key="index" class="item">
      <router-link :to="{name:'companyhonorinformation',params:{id:item.id}}">
        <img :src="item.img" alt="supply_img" width="190" height="200" class="img">
      </router-link>
      <h4>{{item.title}}</h4>
      <div>
        <el-button size="mini" @click="edit(item)">{{$t('button.edit')}}</el-button>
        <el-button type="danger" size="mini" @click="del(item.id)">{{$t('button.delete')}}</el-button>
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
</template>

<script>
  import {listCertification,getPrimaryCategory,getSubCategories,
    addCertification,delCertification,editCertification} from "../../axios/api";
  import {ACCESS_TOKEN,USER_COMPANY} from "../../store/mutation-types";
  import Vue from 'vue'
  export default {
    name: "Certification",
    data () {
      return {
        form: {
          id:0,
          name: '',
          photoPaths: ''
        },
        pageNo:1,
        pageSize:8,
        total:0,
        certification:[],
        operation:true,
        dialogVisible:false
      }
    },
    mounted(){
      this.list();
    },
    methods:{
      list(){
        console.log(Vue.ls.get(USER_COMPANY).code);
        listCertification({
          companycode:Vue.ls.get(USER_COMPANY).code,
          pageNo:this.pageNo,
          pageSize:this.pageSize
        }).then(res=>{
          let {code,msg,result} = res.data;
          if(code === 200){
            this.total = result.total;
            this.certification = result.records;
          }
        });
      },
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
        this.pageSize=val;
        this.list();
      },
      handleCurrentChange (val) {
        this.pageNo=val;
        this,list();
      },
      handleAvatarSuccess(res, file) {
        this.form.photoPaths = URL.createObjectURL(file.raw);
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
        this.dialogVisible=true;
        this.form=item;
      },
      add () {
        this.operation = true;
        this.form={id:0, name: '',photoPaths:''}
        this.dialogVisible=true;
      },
      del(id){
        delCertification({
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
        });

      },
      operate(){
        this.dialogVisible=false;
        if(this.operation===true){
          addCertification({
            id:1,
            clicks:null,
            companyCode: Vue.ls.get(USER_COMPANY).code,
            locale: localStorage.getItem('lang'),
            name: this.form.name,
            photoPaths: this.form.photoPaths,
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
          editCertification({
            id:this.form.id,
            clicks:null,
            companyCode: Vue.ls.get(USER_COMPANY).code,
            locale: localStorage.getItem('lang'),
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
      }
    }
  }
</script>

<style scoped>
  .content{
    /*display:flex;*/
    min-height:400px;
  }
  .item{
    width:170px;
    height:300px;
    float:left;
    margin-left:60px;
    margin-right:-29px;
    font-size:7px;
  }
  .head{
    width:1150px;
    display:inline-block;
  }
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
  .button-box{
    position:relative;
    top:14px;
    left:5px;
    float:left;
  }


</style>
