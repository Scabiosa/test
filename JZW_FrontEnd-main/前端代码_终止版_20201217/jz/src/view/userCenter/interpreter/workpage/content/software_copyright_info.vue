<template>
  <div>
    <div v-for="item in list.slice((page.currentPage-1)*page.pageSize, page.currentPage*page.pageSize)">
      <div class="itemContainer">
        <tabel>
          <tr><b>{{$t('translate.sourceLanguage')}}</b></tr>
          <tr>
            <td class="label"><label for="title">{{$t('translate.title')}}</label></td>
            <td><span id="title">{{item.title}}</span></td>
          </tr>
          <tr>
            <td class="label"><label for="introduce">{{$t('translate.content')}}</label></td>
            <td><span id="introduce">{{item.introduce}}</span></td>
          </tr>
          <tr>
            <br>
          </tr>
          <tr><b>{{$t('translate.targetLanguage')}}</b></tr>
          <tr>
            <td class="label"><label for="tTitle">{{$t('translate.title')}}</label></td>
            <td><el-input type="text" id="tTitle" size="mini"></el-input></td>
          </tr>
          <tr>
            <td class="label"><label for="tIntroduce">{{$t('translate.content')}}</label></td>
            <td><el-input type="text" id="tIntroduce" size="mini"></el-input></td>
          </tr>
        </tabel>
        <div>
          <el-button size="mini">{{$t('translate.machineTranslate')}}</el-button>
          <el-button size="mini">{{$t('button.done')}}</el-button>
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
    name: "software_copyright_info",
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
