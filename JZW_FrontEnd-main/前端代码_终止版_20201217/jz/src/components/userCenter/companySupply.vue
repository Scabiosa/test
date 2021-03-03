<template>
  <div class="common">
    <div class="head">
      <span class="title" v-if="isProduct">{{$t('companySupply.product')}}</span>
      <span class="title" v-else>{{$t('companySupply.service')}}</span>
      <el-button type="primary" @click="change" size="mini">{{$t('companySupply.button')}}
        <span v-if="isProduct">{{$t('companySupply.service')}}</span>
        <span v-else>{{$t('companySupply.product')}}</span>
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
<!--      <div class="left">-->
<!--        <div  v-for="(n,index) in supply.slice(0,pageSize/2)" :key="index" class="news-item">-->
<!--          <router-link :to="{name:'companyproductdetail',params:{id:n.id}}"  v-if="isProduct">-->
<!--            <span class="content-title">{{n.name}}</span>-->
<!--          </router-link>-->
<!--          <router-link :to="{name:'companysoftwareDetail',params:{id:n.id}}" v-else>-->
<!--            <span class="content-title">{{n.name}}</span>-->
<!--          </router-link>-->
<!--          <span class="content-date">({{n.createTime.slice(0,10)}})</span>-->
<!--          <el-button size="mini" @click="edit(n)">{{$t('button.edit')}}</el-button>-->
<!--          <el-button type="danger" size="mini" @click="del(n.id)">{{$t('button.delete')}}</el-button>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="right">-->
<!--        <div  v-for="(n,index) in supply.slice(pageSize/2,pageSize)" :key="index" class="news-item">-->
<!--          <router-link :to="{name:'companydynamicdetail',params:{id:n.id}}">-->
<!--            <span class="content-title">{{n.name}}</span>-->
<!--          </router-link>-->
<!--          <span class="content-date">({{n.createTime.slice(0,10)}})</span>-->
<!--          <el-button size="mini" @click="edit(n)">{{$t('button.edit')}}</el-button>-->
<!--          <el-button type="danger" size="mini" @click="del(n.id)">{{$t('button.delete')}}</el-button>-->
<!--        </div>-->
      <div v-for="(item,index) in supply" :key="index" class="item">
        <!-- <img :src="item.photoPaths" alt="supply_img" width="170" height="200" class="img"> -->
        <router-link :to="{name:'companyproductdetail',params:{id:item.id}}" v-if="isProduct">
         <span class="content-title">{{item.name}}</span>
        </router-link>
        <router-link :to="{name:'companyservicedetail',params:{id:item.id}}" v-else>
          <span class="content-title">{{item.name}}</span>
        </router-link>
        <span class="model">{{item.model}}</span>
        <!-- <a href="item.detailIntroduction" class="link">{{$t('companySupply.download')}}</a> -->
        <div class="button-box">
          <el-button size="mini" @click="edit(item)">{{$t('button.edit')}}</el-button>
          <el-button type="danger" size="mini" @click="del(item)">{{$t('button.delete')}}</el-button>
        </div>
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
        <el-form-item :label="$t('companyDialog.model')" v-if="isProduct">
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
            ref="upload"
            action="https://221.224.21.21:8888/ecnu/file/uploadFile"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="form.fileList"
            :multiple="false"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          </el-upload>
<!--          <input type="file" ref="clearFile" @change="getFile($event)" accept=".pdf">-->
        </el-form-item>
<!--        <el-form-item :label="$t('companyDialog.img')">-->
<!--          <el-upload-->
<!--            class="avatar-uploader"-->
<!--            ref="upload"-->
<!--            action="https://221.224.21.21:8888/ecnu/file/uploadFile/"-->
<!--            :show-file-list="false"-->
<!--            :on-success="handleAvatarSuccess"-->
<!--            :before-upload="beforeAvatarUpload">-->
<!--            <img v-if="form.photoPaths" :src="form.photoPaths" class="avatar">-->
<!--            <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
<!--          </el-upload>-->
<!--&lt;!&ndash;          <input type="file" name="upload"></input>&ndash;&gt;-->
<!--        </el-form-item>-->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">{{$t('button.cancel')}}</el-button>
         <el-button type="primary" @click="operate">{{$t('button.save')}}</el-button>
         </span>
    </el-dialog>
  </div>
</template>

<script>
import SupplyShow from './supplyShow.vue'
import {listProduct,listService,getPrimaryCategory,getSubCategories,
  addProduct,delProduct,editProduct,addService,delService,editService,getPath} from "../../axios/api";
import {ACCESS_TOKEN,USER_COMPANY} from "../../store/mutation-types";
import Vue from 'vue'
export default {
  name: 'Supply',
  components: {SupplyShow},
  mounted(){
    listProduct({
      companycode:Vue.ls.get(USER_COMPANY).code,
      pageNo:this.pageNo,
      pageSize:this.pageSize
    }).then(res=>{
      let {code,msg,result} = res.data;
      if(code === 200){
        this.total = result.total;
        this.supply = result.records;
      }
    })
  },
  watch:{
    category1(newVal){
      getPrimaryCategory({
        objectType:this.isProduct?'product':'service',
        locale:localStorage.getItem('lang')
      }).then(res=>{
        let {code, msg, result} = res.data;
        if(code === 200){
          this.category1Options=result;
        }else{
          this.$message({
            type: 'error',
            message:msg,
          });
        }

      })
      getSubCategories({
        code:newVal.code,
        locale:localStorage.getItem('lang')
      }).then(res=>{
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
  data () {
    return {
      isProduct:true,
      total:0,
      pageNo:1,
      pageSize:8,
      currentPage:1,
      operation:true,//true为增加，false为编辑
      dialogVisible:false,
      category1:null,
      category2:null,
      category3:null,
      category1Options:[],
      category2Options:[],
      category3Options:[],
      selectedCategory:-1,
      supply:[],
      form: {
        id:0,
        name: '',
        model:'',
        briefIntroduction:'',
        fileList:[],
        photoPaths:''
      },
      locale:localStorage.getItem('lang')
    }
  },
  methods:{
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    // getFile(event){
    //   var file = event.target.files;
    //   for(var i = 0;i<file.length;i++){
    //     //    上传类型判断
    //     var imgName = file[i].name;
    //     var idx = imgName.lastIndexOf(".");
    //     if (idx != -1){
    //       var ext = imgName.substr(idx+1).toUpperCase();
    //       ext = ext.toLowerCase( );
    //       if (ext!='pdf' && ext!='doc' && ext!='docx'){
    //
    //       }else{
    //         this.addArr.push(file[i]);
    //       }
    //     }else{
    //
    //     }
    //   }
    // },
    submitUpload() {
      this.$refs.upload.submit();
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
          this.$message({
            type: 'error',
            message:msg,
          });
        }
      })
    },
    add () {
      this.operation = true;
      this.form={id:0, name: '', model:'', briefIntroduction:'', fileList:[], photoPaths:''}
      this.category1=this.category2=this.category3=null;
      getPrimaryCategory({
        objectType:this.isProduct===true?'product':'service',
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
      this.isProduct = !this.isProduct;
      if(this.isProduct === true){
        listProduct({
          companycode:Vue.ls.get(USER_COMPANY).code,
          pageNo:this.pageNo,
          pageSize:this.pageSize
        }).then(res=>{
          let {code,msg,result} = res.data;
          if(code === 200){
            this.total = result.total;
            this.supply = result.records;
          }else{
            this.$message({
              type:'error',
              message:msg
            })
          }
        })
      }else if(this.isProduct === false){
        listService({
          companycode:Vue.ls.get(USER_COMPANY).code,
          pageNo:this.pageNo,
          pageSize:this.pageSize
        }).then(res=>{
          let {code,msg,result} = res.data;
          if(code === 200){
            this.total = result.total;
            this.supply = result.records;
          }else{
            this.$message({
              type:'error',
              message:msg
            })
          }
        })
      }
    },
    del(item){
      if(this.isProduct){
        delProduct({
          id:item.id
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
        delService({
          id:item.id
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
       this.submitUpload();
       if(this.operation===true){
           if(this.isProduct){
              addProduct({
                clicks:0,
                briefIntroduction: this.form.briefIntroduction,
                companyCode: Vue.ls.get(USER_COMPANY).code,
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
             addService({
               id:1,
               clicks:null,
               briefIntroduction: this.form.briefIntroduction,
               companyCode: Vue.ls.get(USER_COMPANY).code,
               detailIntroduction: this.form.fileList[0],
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
       }else{
         if(this.isProduct){
           editProduct({
             id:this.form.id,
             clicks:null,
             briefIntroduction: this.form.briefIntroduction,
             companyCode: Vue.ls.get(USER_COMPANY).code,
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
         }else{
           editService({
             id:this.form.id,
             clicks:null,
             briefIntroduction: this.form.briefIntroduction,
             companyCode: Vue.ls.get(USER_COMPANY).code,
             detailIntroduction: this.form.fileList[0],
             locale: localStorage.getItem('lang'),
             name: this.form.name,
             photoPaths: this.form.photoPaths,
             typeId: this.selectedCategory,
           }).then(res=>{
             let {code, msg, result} = res.data;
             if(code === 200){
               this.$message({
                 type: 'success',
                 message: msg
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
}
</script>

<style scoped>
  .common{
    /*公有样式-布局*/
    overflow:hidden;
    position:relative;
    top:10px;
  }
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
  .item{
    width:170px;
    height:300px;
    float:left;
    margin-top:10px;
    margin-right:50px;
  }
  .pagination{
    float:right;
    margin-right:30px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .content{
    min-height:400px;
  }
  .head{
    width:1150px;
    display:inline-block;
  }
  .content-title{
    display:inline-block;
    width:150px;
  }
  .model{
    margin-right:20px;
  }
</style>
