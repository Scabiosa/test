<template>
   <div class="content">
      <div v-for="(item,index) in supply" :key="index" class="item">
         <img :src="item.img" alt="supply_img" width="170" height="200" class="img">
        <h4>{{title}}</h4>
         <a href="" class="link">{{link}}</a>
         <div class="button-box">
           <el-button size="mini">修改</el-button>
           <el-button type="danger" size="mini">删除</el-button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
  name: 'SupplyShow',
  props:{
    currentType:String
  },
  watch:{
    currentType(newVal){
      if(newVal==='产品'){
        //发起产品方向的请求
      }
    }
  },
  data () {
    return {
      title: '智能机器人 CDYX-6000',
      link: '下载详细说明文档',
      supply: [{
        img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }, {
        img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }, {
        img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }, {
        img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }, {
        img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }, {
        img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }, {
        img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }, {
        img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }]
    }
  }
}
</script>

<style scoped>
  .item{
    width:170px;
    height:300px;
    float:left;
    margin-top:10px;
    margin-right:50px;
    font-size:7px;
   }
</style>
