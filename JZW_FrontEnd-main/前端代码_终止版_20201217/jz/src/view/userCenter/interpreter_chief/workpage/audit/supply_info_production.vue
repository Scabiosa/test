<template>
  <div>
    <div class="title2">
      <b>供应信息 产品</b>
    </div>
    <div v-for="item in list.slice((page.currentPage-1)*page.pageSize, page.currentPage*page.pageSize)">
      <div class="itemContainer">
        <tabel>
          <tr>
            <td class="label"><label for="title">标题</label></td>
            <td><span id="title">{{item.title}}</span></td>
          </tr>
          <tr>
            <td class="label"><label for="introduce">内容</label></td>
            <td><span id="introduce">{{item.introduce}}</span></td>
          </tr>
          <tr>
            <br>
          </tr>
          <tr>
            <td class="label"><label for="tTitle">标题</label></td>
            <td><el-input type="text" id="tTitle" size="mini"></el-input></td>
          </tr>
          <tr>
            <td class="label"><label for="tIntroduce">内容</label></td>
            <td><el-input type="text" id="tIntroduce" size="mini"></el-input></td>
          </tr>
        </tabel>
        <div>
          <el-button size="mini">机翻</el-button>
          <el-button size="mini">完成</el-button>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <el-pagination
      @current-change="handleCurrentChange"
      layout="total, prev, pager, next, jumper"
      :current-page="page.currentPage"
      :page-size="page.pageSize"
      :total="totalCount">
    </el-pagination>

  </div>

</template>

<script>
  export default {
    name: "supply_info_production",
    data(){
      return{
        totalCount: 0,
        page: {
          currentPage: 1,
          pageSize: 10,
        },
        list:[
          {
            title: "xxx标题",
            introduce: "我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的"
          },
          {
            title: "xxx标题",
            introduce: "我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的"
          },
          {
            title: "xxx标题",
            introduce: "我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的"
          },
          {
            title: "xxx标题",
            introduce: "我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的"
          },
          {
            title: "xxx标题",
            introduce: "我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的"
          },
          {
            title: "xxx标题",
            introduce: "我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的"
          },
          {
            title: "xxx标题",
            introduce: "我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的"
          },
          {
            title: "xxx标题",
            introduce: "我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的"
          },
          {
            title: "xxx标题",
            introduce: "我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的"
          },
          {
            title: "xxx标题",
            introduce: "我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的"
          },
          {
            title: "xxx标题",
            introduce: "我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的"
          },
          {
            title: "xxx标题",
            introduce: "我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的我们是最好的"
          },
        ]
      }
    },
    created() {
      this.totalCount = 12;
    },
    methods:{
      handleCurrentChange(val){
        this.page.currentPage = val;
      },
    }
  }
</script>

<style scoped>
  .title2{
    text-align: left;
  }

  td{
    text-align: left;
  }
  .itemContainer{
    padding: 10px;
    margin: 5px;
    border: #5d82a6 1px solid;
  }
  .label{
    width: 100px;
  }
</style>
