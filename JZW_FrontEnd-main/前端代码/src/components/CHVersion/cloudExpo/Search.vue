<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		主页的搜索组件
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.01.28  童卫青
//      初版做成
//------------------------------------------------------------------------------------>
<!-------------------------------------------------------------------------------------
                                     组件模板设定
-------------------------------------------------------------------------------------->
<template>
  <div class="root-container">
    <div class="title"><span> 中日展会信息搜索 </span></div>
    <div class="containerA">
      <el-input class="elInput" placeholder="请输入内容" v-model="input">
        <el-select class="elSelect" v-model="searchType" slot="prepend">
          <el-option label="全部" value="1"></el-option>
          <el-option label="中国展会" value="2"></el-option>
          <el-option label="日本展会" value="3"></el-option>
          <el-option label="云展会" value="4"></el-option>
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
      searchType: '展会类别',
      // tabIndex: -1,
    };
  },
  methods: {
    selectTab(tabIndex) {
      // console.log(tabIndex);
      this.activeTab = tabIndex;
    },
    search() {
      if (this.activeTab === 1) {
        this.$router.push({name: 'products', query: {input: this.input}});
      } else if (this.activeTab === 2) {
        this.$router.push({name: 'companys', query: {input: this.input}});
      } else if (this.activeTab === 3) {
        this.$router.push({name: 'services', query: {input: this.input}});
      } else if (this.activeTab === 4) {
        this.$router.push({name: 'purchases', query: {input: this.input}});
      } else {
        this.$router.push({name: 'technologys', query: {input: this.input}});
      }
    }
  }
};
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.root-container {
  height: 150px;
  background-color: #c8c8c8;
}
.title {
  height: 50%;
  text-align: center;
}

.title span {
  line-height: 80px; /*设置文字行距等于div的高度*/
  text-align: center; /*文字水平居中对齐*/
  font-size: 20px;
}
.containerA {
  width: 100%;
  margin: auto;
}
.elInput {
  width: 60%;
}
.elSelect {
  width: 120px;
}
</style>
