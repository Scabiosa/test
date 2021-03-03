<template>
    <div>
        <div style="height:30px"></div>
            <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
            <h3 style="margin-left:50%">{{ item }}</h3>
            </el-carousel-item>
            </el-carousel>
        <div style="height:80px"></div>
        <div class="block">
            <span class="demonstration" style="margin-left:40%" >请为我们的直播打分吧！</span>
            <div style="margin-left:43%">
                <el-rate
                    v-model="value2"
                    :colors="colors">
                </el-rate>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "livebroadinformation",
        data() {
            return {
                value1: null,
                value2: null,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
            }
    }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
