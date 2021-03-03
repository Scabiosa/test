<template>
  <div class="listitem">
    <div class="lihead">
      <div class="lititle">
        <span>{{title}}</span>
      </div>

      <div class="liheadmore">
        <a href="#">more</a>
      </div>
    </div>

    <div class="licontent">
      <a-list size="large" bordered :data-source="list">
        <a-list-item slot="renderItem" slot-scope="item, index">
          {{item}}
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
    export default {
        name: "listitem",
        data(){
            return{

            }
        },
        props:{
          list:{
              type: Array,
              required: false,
              default: function () {
                  return []
              }
          },
          title:{
            type: String,
              required:true
          }
        }
    }
</script>

<style lang="less" scoped>
  .listitem{
    .lihead{
      text-align: center;
      background-color: rgba(166, 84, 48, 0.92);
      .lititle{
        font-size: 30px;
        display: inline-block;
      }
      .liheadmore{
        display: inline-block;
        float: right;
      }
    }
    .licontent{

    }
  }
</style>
