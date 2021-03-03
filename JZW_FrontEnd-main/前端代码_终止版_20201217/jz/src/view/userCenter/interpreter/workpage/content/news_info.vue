<template>
  <div>
    <div v-for="item in list">
      <div class="itemContainer">
        <table>
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
        </table>
        <div>
          <el-button size="mini">{{$t('translate.machineTranslate')}}</el-button>
          <el-button size="mini" @click="handleSubmit(item.id)">{{$t('button.done')}}</el-button>
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
  import {requestTranslateNews} from "@/axios/api";

  export default {
    name: "news",
    data(){
      return{
        totalCount: 0,
        page: {
          currentPage: 1,
          pageSize: 10,
        },
        companyId: 0,
        list:[{id: '', title:'', introduce: ''}]
      }
    },
    created() {
      this.getList();
    },
    methods:{
      handleCurrentChange(val){
        this.page.currentPage = val;
        this.getList();
      },
      handleSubmit(id){
        console.log(id);
        let params = {
          id: this.id,
          title: '',
          introduce: '',
        };

      },
      getList(){
        let params = {
          companyId: this.companyId,
          page: this.page.currentPage,
          pageSize: this.page.pageSize,
        };
        requestTranslateNews(params).then(res => {
          let {msg, data} = res.data;
          console.log(msg);
          this.totalCount = data['size'];
          this.list = data['list'];
        }).catch((err) => {
          console.log(err);
        });
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
