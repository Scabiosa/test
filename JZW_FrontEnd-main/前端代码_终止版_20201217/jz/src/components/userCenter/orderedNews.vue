<template>
  <div>
    <div class="head">
      <div class="title">{{$t('orderedNews.title')}}</div>
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
      <el-button @click="dialogVisible = !dialogVisible" size="mini" style="float:left;margin-left:150px;margin-top:-20px;" type="primary">{{$t('orderedNews.clickToOrder')}}</el-button>
    </div>
    <el-card class="card" v-if="dialogVisible">
      <h3 style="text-align:center;">{{$t('orderedNews.select')}}</h3>
      <el-select v-model="baseObjectType" :placeholder="$t('orderedNews.selectBaseType')" class="select">
        <el-option
          v-for="item in baseObjectTypeOptions"
          :key="item.value"
          :label="item.value"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="category1" :placeholder="$t('orderedNews.selectFirstCategory')" class="select">
        <el-option
          v-for="item in category1Options"
          :key="item.code"
          :label="item.name"
          :value="item.code">
        </el-option>
      </el-select>
      <el-select v-model="category2" :placeholder="$t('orderedNews.selectSecondCategory')" class="select">
        <el-option
          v-for="item in category2Options"
          :key="item.code"
          :label="item.name"
          :value="item.code">
        </el-option>
      </el-select>
      <el-select v-model="category3" :placeholder="$t('orderedNews.selectThirdCategory')" class="select">
        <el-option
          v-for="item in category3Options"
          :key="item.code"
          :label="item.name"
          :value="item.code">
        </el-option>
      </el-select>
      <div style="text-align: center;margin-top: 5px;">
        <el-button type="primary" @click="addSub" size="mini">{{$t('button.add')}}</el-button>
      </div>
      <h3 style="text-align:center;">{{$t('orderedNews.orderedCategory')}}</h3>
      <div style="height:1px;border-top:solid #ACC0D8 2px;margin-bottom:5px;"></div>
      <el-tag
        :key="index"
        v-for="(item,index) in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(item.newsType)">
        {{item.newsType}}
      </el-tag>
    </el-card>
    <div class="left">
      <div  v-for="(n,index) in news.slice(0,pageSize/2)" :key="index" class="news-item">
        <router-link :to="{name:'companydynamicdetail',params:{id:n.id}}" class="main_homepage">
          <span class="content-title">{{n.name}}</span>
        </router-link>
        <span class="content-date">({{n.createTime.slice(0,10)}})</span>
      </div>
    </div>
    <div class="right">
      <div  v-for="(n,index) in news.slice(pageSize/2,pageSize)" :key="index" class="news-item">
        <router-link :to="{name:'companydynamicdetail',params:{id:n.id}}" class="main_homepage">
          <span class="content-title">{{n.name}}</span>
        </router-link>
        <span class="content-date">({{n.createTime.slice(0,10)}})</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {getPrimaryCategory,getSubCategories,addSubscription,getSubscriptionByUserId,getBySubscription,delSubscription} from "../../axios/api";
  import {ACCESS_TOKEN} from "../../store/mutation-types";
  import Vue from 'vue'
  export default {
    name: 'orderedNews',
    mounted(){
      getSubscriptionByUserId({
         userId:this.$store.state.userId
      }).then(res=>{
        let {code, msg, result} = res.data;
        if(code === 200){
          this.dynamicTags=result;
        }else{
          this.$message({
            type: 'error',
            message:msg,
          });
        }
      })
      getBySubscription({
        locale:localStorage.getItem('lang'),
        userId: this.$store.state.userId,
        pageNo:this.pageNo,
        pageSize:this.pageSize
      }).then(res=>{
        let {code, msg, result} = res.data;
        if(code === 200){
          this.total=result.total;
          this.news=result.records;
        }else{
          this.$message({
            type: 'error',
            message:msg,
          });
        }
      })
    },
    watch:{
      baseObjectType(newVal){
        getPrimaryCategory({
          objectType:newVal,
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
      },
      category1(newVal){
        getSubCategories({
          code:newVal,
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
          code:newVal,
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
      }
    },
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      },
      //删除订阅信息
      handleClose (id) { //tag不是id,需修改
        delSubscription({
          userId:this.$store.state.userId,
          newsTypeId:id
        }).then(res=>{
          let {code,msg,result}=res.data;
          if(code === 200){
            this.$message({
              type:'success',
              message:msg
            });
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
          }else{
            this.$message({
              type:'error',
              message:msg
            })
          }
        });
      },
      addSub(){
        addSubscription({
          id: 1,
          newsTypeId: this.category3,
          userId:  this.$store.state.userId
        }).then(res=>{
          console.log(res);
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
    data () {
      return {
        total:0,
        pageNo: 1,
        pageSize:20,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        dialogVisible: false,
        baseObjectType:'',
        category1:'',
        category2:'',
        category3:'',
        category1Options:[],
        category2Options:[],
        category3Options:[],
        baseObjectTypeOptions:[{
           value:'product'
        },{
          value:'service'
        },{
          value:'technology'
        },{
          value:'purchase'
        }],
        news: [],
        dynamicTags: ['类别一', '类别二', '类别三']
      }
    }
  }
</script>

<style scoped>
  .title{
    /*布局*/
    position:relative;
    top:10px;
    left:20px;
    /*样式*/
    background-color:#3F3F3F;
    width:120px;
    height:31px;
    /*文字样式*/
    color:white;
    text-align:center;
    line-height:31px;
  }
  .pagination{
    margin-top:-20px;
    float:right;
  }
  .head{
    height:50px;
  }
  .left{
    margin-top:10px;
    margin-left:20px;
    /*width:50%;*/
    float:left;
    border-right:1px solid black;
    padding-right:15px;
    margin-right:15px;
  }
  .right{
    margin-top:17px;
  }
  .news-item{
    margin-top:8px;
  }
  .content-title{
    display:inline-block;
    color:black;
    width:417px;
    font-weight:bold;
  }
  .content-date{
    margin-left:5px;
  }

  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .select{
    margin-right:5px;
    width:255px;
  }
  .card{
    margin-left:20px;
    margin-right:7px;
  }
</style>
