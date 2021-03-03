<template>
  <div class="Wrapper">
    <div class="descWrapper">
      <span class="desc">
        {{$t('frontpage.title')}}
      </span>
    </div>
    <div class="search-tab">
      <div @click="selectTab(1)" :class="{'tab-item':true,'active-tab':activeTab==1}" style="cursor:pointer">{{$t('searchoption.product')}}</div>
      <div @click="selectTab(2)" :class="{'tab-item':true,'active-tab':activeTab==2}" style="cursor:pointer">{{$t('searchoption.company')}}</div>
      <div @click="selectTab(3)" :class="{'tab-item':true,'active-tab':activeTab==3}" style="cursor:pointer">{{$t('searchoption.service')}}</div>
      <div @click="selectTab(4)" :class="{'tab-item':true,'active-tab':activeTab==4}" style="cursor:pointer">{{$t('searchoption.purchase')}}</div>
      <div @click="selectTab(5)" :class="{'tab-item':true,'active-tab':activeTab==5}" style="cursor:pointer">{{$t('searchoption.technology')}}</div>
    </div>
    <div class="inputWrapper">
      <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
        <el-select v-model="searchType" slot="prepend">
          <el-option label="简单检索" value="1"></el-option>
          <el-option label="企业地域检索" value="2"></el-option>
          <el-option label="信息图谱检索" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      activeTab: 1,
      searchType: '简单检索',
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
<style scoped>
.Wrapper {
  background: #81d3f8;
}
.descWrapper{
  text-align: center;
}
.desc{
  height: 80px;
  line-height: 80px;
  font-size: 30px;
}
.search-tab{
  display: flex;
  justify-content: center;
}
.tab-item{
  display: inline-block;
  margin: 0 20px 10px 20px;
  padding: 5px 10px;
  background: white;
}
.active-tab{
  background: #F59A23;
}
.inputWrapper{
  width: 1000px;
  margin: 0 auto;
}
.el-input {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
}
.el-select {
  width: 150px;
}
</style>
