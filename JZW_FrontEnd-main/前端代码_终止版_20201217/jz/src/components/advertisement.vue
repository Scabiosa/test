<template>
  <div class="listaddiv">
    <div class="theaddiv" v-for="item in imgs" :key="item.title">
        <img border="1" width="200px" :src=item.imgsrc :alt="item.title">
    </div>
  </div>
</template>

<script>
    export default {
        name: "advertisement",
        props:{
            imgs:{
                type:Array,
                required:true,
                default: function () {
                    return [{title:'test1',imgsrc:'/static/logo.png'},
                        {title:'test2',imgsrc:'/static/logo.png'},
                        {title:'test3',imgsrc:'/static/logo.png'},
                        {title:'test4',imgsrc:'/static/logo.png'},
                        {title:'test5',imgsrc:'/static/logo.png'},
                        {title:'test6',imgsrc:'/static/logo.png'},
                        {title:'test7',imgsrc:'/static/logo.png'},
                        {title:'test8',imgsrc:'/static/logo.png'},
                        {title:'test9',imgsrc:'/static/logo.png'}]
                }
            }
        }
    }
</script>

<style lang="less" scoped>
.listaddiv{
  display: inline-block;
  margin-top: 30px;
  width: 100%;
  .theaddiv{
    margin-left: 20px;
    display: inline-block;
    width: 18%;
  }
}
</style>
