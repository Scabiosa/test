<template>
  <div class="nav">
    <span><a>{{$t('pub.jz')}}</a></span>
    <div class="lan">
      <span>{{$t('login.lan')}}</span>
      <el-select @change="selectChanged" v-model="select" size="mini">
        <el-option v-for="item in lanOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
    name: "header",
    data(){
      return{
        lanOptions:[
          {
            value:'zh_CN',
            label:'中文'
          },
          {
            value:'en_US',
            label:'English',
          },
        ],
        select: 'zh_CN',
      }
    },
    methods:{
      //切换语言
      selectChanged(value){
        localStorage.setItem('lang',value);
        this.$i18n.locale = value;
      },
    }
}
</script>

<style scoped>
  .nav{
    padding: 15px 10px;
    background: aliceblue;
    border: lightgrey 1px solid;
  }
  .lan{
    font-size: 10px;
    float: right;
  }
</style>
