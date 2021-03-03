<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple" @click="detail">
                <img class="img" src="../../assets/honor.png"></div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple" @click="detail">
                 <img class="img" src="../../assets/honor.png">
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple" @click="detail">
                <img class="img" src="../../assets/honor.png">
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple" @click="detail">
                <img class="img" src="../../assets/honor.png">
              </div>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple" @click="detail"><img class="img" src="../../assets/honor.png"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple" @click="detail"><img class="img" src="../../assets/honor.png"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple" @click="detail"><img class="img" src="../../assets/honor.png"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple" @click="detail"><img class="img" src="../../assets/honor.png"></div></el-col>
        </el-row>

        <div class="block">
            <span class="demonstration"></span>
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="pageNo"
            :page-size="pageSize"
            layout="prev, pager, next, jumper"
            :total="total">
            </el-pagination>
        </div>
    </div>

</template>
<script>
    import { listCertification } from "../../axios/api"
    export default {
        name: "honorinformation",
        methods:{
            detail(){
                this.$router.push({path:'company/introduce'});
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        data() {
            return {
                pageNo:1,
                pageSize:8,
                total:0,
                information:[]
            };
        },
        mounted(){
          listCertification({
            pageNo:this.pageNo,
            pageSize:this.pageSize,
            companyCode:this.$route.query.companyCode
          }).then(res=>{
            let {code,msg,result} = res.data;
            if(code === 200){
              this.total = result.total;
              this.information = result.records;
              console.log(this.information);
            }else{
              this.$alert(msg);
            }
          })
        }
    }
</script>

<style scoped>
.el-row {
    margin-bottom: 50px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .img{
    width: 100%;
    height: 100%;
  }
  .block{
    margin-left: 20%;
  }
</style>
