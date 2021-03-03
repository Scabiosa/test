<template>
     <div class="common">
       <div class="title">{{$t('suggestion.content')}}</div>
       <el-pagination
         @size-change="handleSizeChange"
         @current-change="handleCurrentChange"
         :current-page.sync="currentPage"
         :page-size="30"
         class="pagination"
         layout="total, prev, pager, next"
         :total="900">
       </el-pagination>
       <div v-for="item in dataList" :key="item.id" class="message_box">
         <span class="sender">{{item.sender}}</span><span class="time">({{item.time}})</span>
         <el-button type="primary" class="button">{{$t('button.edit')}}</el-button>
         <p class="content">{{$t('suggestion.content')}}:{{item.content}}</p>
       </div>
     </div>
</template>

<script>
  export default {
    name: "Message",
    methods:{
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      },
    },
    data(){
      return{
        currentPage:1,
        dataList:[{
          id:1,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        },{
          id:2,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        },{
          id:3,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        },{
          id:4,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        },{
          id:5,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        },{
          id:6,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        },{
          id:7,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        },{
          id:8,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        },{
          id:9,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        },{
          id:10,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        },{
          id:11,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        },{
          id:12,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        },{
          id:13,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        },{
          id:14,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        },{
          id:15,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        },{
          id:16,
          sender:'系统消息',
          time:'2020-02-04',
          content:'消息内容消息内容消息内容消息内容消息内容消息内容消息内容' +
              '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容'
        }
        ]
      }
    }
  }
</script>

<style scoped>
  .message_box{
    width:95%;
    margin-top:5px;
    height:100px;
    border:1px solid #797979;
    padding:5px;
  }
  .sender{
    font-size:25px;
    font-weight: bold;
    margin-left:5px;
  }
  .time{
    margin-top:15px;
  }
  .button{
    float:right;
  }
  .content{
    text-align:left;
    margin-left:5px;
  }
  .common{
    margin-top:20px;
    margin-left:55px;
    text-align:left;
  }
  .title{
    /*样式*/
    background-color:#3F3F3F;
    width:90px;
    height:31px;
    /*文字样式*/
    color:white;
    text-align:center;
    line-height:31px;
  }
  .pagination{
    float:right;
    margin-top:-25px;
    margin-right:40px;
  }
</style>
