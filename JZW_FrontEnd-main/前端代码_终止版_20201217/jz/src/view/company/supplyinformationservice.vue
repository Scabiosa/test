<template>
  <div>
    <div v-for="(item,index) in alldynamic" :key="index">
      <div class="thedynamcdiv">
        <div class="dynamictitlediv">{{item.title}}</div>
        <div class="dynamicmore">
          <router-link
            :to="{path:'/company/servicedetail',params:{dynamicid:item.id}}"
            class="main_homepage"
          >&nbsp;&nbsp;[{{$t('pub.more')}}]</router-link>
        </div>
      </div>
    </div>
    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :total="alldynamic.length"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "supplyinformationservice",
  data() {
    return {
      alldynamic: [
        { title: "智能机器人定制服务智能机器人定制服务" },
        { title: "智能机器人定制服务智能机器人定制服务" },
        { title: "智能机器人定制服务智能机器人定制服务" },
        { title: "智能机器人定制服务智能机器人定制服务" },
        { title: "智能机器人定制服务智能机器人定制服务" },
        { title: "智能机器人定制服务智能机器人定制服务" },
        { title: "智能机器人定制服务智能机器人定制服务" }
      ]
    };
  },

};
</script>

<style lang="less" scoped>
.thedynamcdiv {
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
  .dynamictitlediv {
    display: inline;
  }
  .dynamicmore a {
    display: inline;
    text-indent: 5px;
    color: #02a7f0;
  }
}
.main_homepage {
  color: black;
  text-decoration: none;
}
.pagination{
  margin-top: 20px;
}
</style>
