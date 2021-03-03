<template>
  <div>

    <div class="title2">
      <b>翻译 - 证书</b>
    </div>

    <el-table :data="certificateList" ref="multipleTable">
      <el-table-column prop="certificate_id" label="证书编号"></el-table-column>
      <el-table-column prop="certificate_title" label="原始文本"></el-table-column>
      <el-table-column prop="status" label="翻译状态" :formatter="formatStatus"></el-table-column>
      <el-table-column label="操作">
        <template>
          <el-input name={{}}></el-input>
          <!-- 获取机器翻译 -->
          <el-button @click="machineTranslate()">机翻</el-button>
          <!-- 提交翻译内容 -->
          <el-button @click="submit">提交</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    name: "certificate_info",
    data(){
      return{
        totalCount: 0,
        page: {
          currentPage: 1,
          pageSize: 10,
        },
        certificateList:[
          {
            certificate_id: 1,
            certificate_title: "XXX证书啊实打实大苏打实打实大苏打大苏打阿萨大大实打实",
            status:1,
            translation: "###cert"
          },
          {
            certificate_id: 2,
            certificate_title: "XXX证书",
            status:2,
            translation: ""
          },
          {
            certificate_id: 3,
            certificate_title: "XXX证书",
            status:3,
            translation: ""
          },
        ]
      }
    },

    created() {
    },
    methods: {
      // 取机器翻译
      machineTranslate(){

      },
      // 提交翻译内容
      submit(){

      },


      formatStatus(row, column){
        switch (row.status) {
          case 1:
            return "未翻译";
            break;
          case 2:
            return "已机翻";
            break;
          case 3:
            return "已人工翻译";
            break;
          default:
            return "未知";

        }
      }
    }
  }
</script>

<style scoped>
  .item{
    float: left;
  }

  p{
    width: 300px;
  }
  button{

  }
</style>
