<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		主页的搜索组件
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.01.28  童卫青
//      根据马惠昕、黄震、焦鹏昆、曹振超、张翼鹏、张嘉淏等人写的程序进行了全面整理、修改和完善。
//------------------------------------------------------------------------------------>
<!-------------------------------------------------------------------------------------
                                     组件模板设定
-------------------------------------------------------------------------------------->
<template>
  <div class="root-container">
    <div class="descWrapper">
      <span> 中日工业产品的区块链大数据库 </span>
<!--      <span> 中日工业产品大数据库和区块链存证平台 </span>-->
    </div>
    <div class="inputWrapper">
      <el-input class="elInput" placeholder="请输入内容" v-model="input">
          <el-select class="elSelect" v-model="searchType" slot="prepend">
          <el-option label="资讯" value="1"></el-option>
          <el-option label="产品" value="2"></el-option>
          <el-option label="服务" value="3"></el-option>
          <el-option label="企业" value="4"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->
<script>
export default {
  data() {
    return {
      input: "",
      activeTab: 1,
      searchType: '资讯',
      tabIndex:-1,
    };
  },
  methods: {
    selectTab(tabIndex){
      // console.log(tabIndex);
      this.activeTab=tabIndex;
    },
    search(){
      if(this.activeTab === 1){
        this.$router.push({ name:'products',query:{input:this.input} });
      }else if(this.activeTab === 2){
        this.$router.push({ name:'companys',query:{input:this.input} });
      }else if(this.activeTab === 3){
        this.$router.push({ name:'services',query:{input:this.input} });
      }else if(this.activeTab === 4){
        this.$router.push({ name:'purchases',query:{input:this.input} });
      }else{
        this.$router.push({ name:'technologys',query:{input:this.input} });
      }
    }
  }
};
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.root-container{
  height: 150px;
  /*background: #81d3f8;*/
  background-color: #c8c8c8;
  /*background-color: #fca8a8;*/
}
.descWrapper{
  height: 50%;
  text-align: center;
}
.descWrapper span{
  line-height:80px;/*设置文字行距等于div的高度*/
  text-align: center;/*文字水平居中对齐*/
  font-size: 20px;
}
.inputWrapper{
  width: 50%;
  margin: auto;
}
.elInput {
  width: 100%;
}
.elSelect{
  width: 100px;
}
</style>
