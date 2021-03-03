<template>
  <div>
    <el-row>
      <el-col :span="3">
        <side></side>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import side from '@/components/menu/sideMenu'
  export default {
    data(){
      return{
      }
    },
    components: {side},
    methods:{
    }
  }
</script>

<style scoped>

</style>
