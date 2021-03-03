<template>
<div>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
    >
    </el-table-column>
    
  </el-table>
  <div style="height:150px">

  </div>
</div>
</template>
<script>
  export default {
      name: "contractinformation",
        data() {
        return {
            tableData: [{
            name: '公司名称',
            address: '上海市合时质量科技有限公司'
            }, {
            name: '联系地址',
            address: '上海市·普陀区·金沙江路 1517 弄'
            }, {
            name: '邮编',
            address: '200233'
            }, {
            name: '联系人',
            address: '潘杰'
            }, {
            name: '部门职位',
            address: '营销经理'
            }, {
            name: '联系电话',
            address: '021-62232232'
            }, {
            name: '手机',
            address: '12341234123'
            }, {
            name: '传真',
            address: '021-62232232-8002'
            }, {
            name: '邮箱',
            address: 'example@ecnu.edu.cn'
            }, ]
        }
      }
  }
</script>

<style scoped>

</style>
