<template>
  <el-container>


    <!-- 内容 -->
    <el-container class="main" style="min-height: 600px">

      <div class="chooseInterpreter">

      </div>

      <el-main>
        <div >
          <h2>翻译总监 - 翻译任务分配</h2>
        </div>
        <div class="block">
          <div style="float: left">

            <el-popover>
              <div>

                <el-input></el-input>
                <el-button size="mini">查找</el-button>
              </div>

              <el-table :data="interpreter">
                <el-table-column label="id" prop="id">
                </el-table-column>
                <el-table-column label="姓名" prop="name">
                </el-table-column>

                <el-table-column>
                  <template slot-scope="scope">
                    <el-button
                      @click="assignAll(scope.$index)"
                      size="mini">选择
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-button slot="reference">批量分配</el-button>
            </el-popover>
          </div>
          <el-table
            :data="assignment.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"
            ref="multipleTable"
            @selection-change="handleSelectionChange"
            style="min-height: 500px"
          >
            <el-table-column v-model="multipleSelection" align="center" type="selection" width="50"></el-table-column>
            <el-table-column
              prop="companyName"
              label="企业名称"
            ></el-table-column>
            <el-table-column
              prop="completion"
              label="完成度"
            ></el-table-column>
            <el-table-column
              prop="status"
              label="审核状态"
            ></el-table-column>
            <el-table-column
              prop="interpreterId"
              label="翻译人员"
            ></el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope1">
                <el-popover>
                  <div>

                    <el-input></el-input>
                    <el-button size="mini">查找</el-button>
                  </div>
                  <el-table :data="interpreter">
                    <el-table-column label="id" prop="id">
                    </el-table-column>
                    <el-table-column label="姓名" prop="name">
                    </el-table-column>

                    <el-table-column>
                      <template slot-scope="scope2">
                        <el-button
                          @click="assignOne(scope1.$index, scope2.$index)"
                          size="mini">选择
                        </el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-button slot="reference" size="mini">编辑</el-button>
                </el-popover>
              </template>
            </el-table-column>


          </el-table>

          <!-- 分页 -->
          <el-pagination
            @current-change="handleCurrentChange"
            layout="total, prev, pager, next, jumper"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            :total="totalTask">
          </el-pagination>
        </div>


      </el-main>
    </el-container>


  </el-container>
</template>

<script>
  export default {
    name: "translateTaskAssignment",

    components: {
    },
    data(){
      return{
        assignment: [],
        totalTask: 0,
        totalInterpreter: 0,
        multipleSelection: [],
        allMultipleSelection: [],
        interpreter: [],

        page:{
          currentPage: 1,
          pageSize: 10,
        },

      }
    },
    created() {
      this.interpreter = [
        {
          id : 0,
          name: "none",
        },
        {
          id : 1,
          name: "Jack",
        },
        {
          id : 2,
          name: "Jack",
        },
        {
          id : 3,
          name: "Jack",
        },
        {
          id : 4,
          name: "Jack",
        },
      ]
      this.assignment = [
        {
          id: 1,
          companyName: "xxxx企业",
          completion: 90,
          status: 0,
          interpreterId: 1,
          assigned: 1,

        },
        {
          id: 2,
          companyName: "xxxx企业",
          completion: 90,
          status: 0,
          interpreterId: 2,
          assigned: 1,

        },
        {
          id: 3,
          companyName: "xxxx企业",
          completion: 90,
          status: 0,
          interpreterId: 2,
          assigned: 0,

        },
        {
          id: 1,
          companyName: "xxxx企业",
          completion: 90,
          status: 0,
          interpreterId: 1,
          assigned: 1,

        },
        {
          id: 2,
          companyName: "xxxx企业",
          completion: 90,
          status: 0,
          interpreterId: 1,
          assigned: 1,

        },
        {
          id: 3,
          companyName: "xxxx企业",
          completion: 90,
          status: 0,
          interpreterId: 3,
          assigned: 0,

        },
        {
          id: 1,
          companyName: "xxxx企业",
          completion: 90,
          status: 0,
          interpreterId: 2,
          assigned: 1,

        },
        {
          id: 2,
          companyName: "xxxx企业",
          completion: 90,
          status: 0,
          interpreterId: 1,
          assigned: 1,

        },
        {
          id: 3,
          companyName: "xxxx企业",
          completion: 90,
          status: 0,
          interpreterId: 0,
          assigned: 0,

        },
        {
          id: 1,
          companyName: "xxxx企业",
          completion: 90,
          status: 0,
          interpreterId: 0,
          assigned: 1,

        },
        {
          id: 2,
          companyName: "xxxx企业",
          completion: 90,
          status: 0,
          interpreterId: 2,
          assigned: 1,

        },
        {
          id: 3,
          companyName: "xxxx企业",
          completion: 90,
          status: 0,
          interpreterId: 1,
          assigned: 0,

        },
      ]
      this.totalTask = this.assignment.length
      this.totalInterpreter = this.interpreter.length


    },
    methods: {
      assignOne(taskIndex, interpreterIndex){
        //console.log(taskIndex, interpreterIndex);
        let _index = (this.page.currentPage - 1) * this.page.pageSize;
        this.assignment[taskIndex+_index].interpreterId = this.interpreter[interpreterIndex].id;
      },
      assignAll(index) {
        let interpreterId = this.interpreter[index].id;
        let arr=this.allMultipleSelection;
        if(arr.length == 0) {
          alert("未选择任何任务！");
        }else {
          //update(interpreterID,arr) 后端更新翻译员的任务
          for (let i=0;i<arr.length;i++) {
            this.assignment[arr[i]].interpreterId = interpreterId;
          }
        }
      },
      handleSelectionChange(row) {
        this.multipleSelection[this.currentPage] = [];
        this.allMultipleSelection = [];
        for(let i in row){
          let keyId = parseInt(i) + (this.page.currentPage - 1) * this.page.pageSize;
          this.multipleSelection[this.currentPage].push(keyId);
          this.allMultipleSelection.push(keyId);
        }
        console.log(this.allMultipleSelection);
      },


      handleCurrentChange(val) {
        this.page.currentPage=val
      },
    }
  }
</script>

<style scoped>
  .block{
    margin: 10px;
    padding: 10px;
    border: lightgrey 1px solid;
    border-radius: 5px;
  }
</style>
