<template>
  <div>
    <div class="title2">
      <b>中文信息</b>
    </div>
    <div>
      <table style="float: left">
        <tr>
          <td class="label">公司名:</td>
          <td class="content">{{company.name}}</td>
        </tr>
        <tr>
          <td class="label">公司英文名:</td>
          <td class="content">{{company.englishName}}</td>
        </tr>
        <tr>
          <td class="label">公司法人:</td>
          <td class="content">{{company.legalPerson}}</td>
        </tr>
        <tr>
          <td class="label">注册资金:</td>
          <td class="content">{{company.money}}万元</td>
        </tr>
        <tr>
          <td class="label">成立日期:</td>
          <td class="content">{{company.date}}人</td>
        </tr>
        <tr>
          <td class="label">人员规模:</td>
          <td class="content">{{company.member}}</td>
        </tr>
        <tr>
          <td class="label">经营状态:</td>
          <td class="content">{{company.status}}</td>
        </tr>
        <tr>
          <td class="label">主营产品或服务:</td>
          <td class="content">{{company.supply}}</td>
        </tr>
        <tr>
          <td class="label">公司类型:</td>
          <td class="content">{{company.category}}</td>
        </tr>
      </table>
      <table class="left">
        <tr>
          <td class="label">公司注册国:</td>
          <td class="content">{{company.country}}</td>
        </tr>
        <tr>
          <td class="label">公司地址:</td>
          <td class="content">{{company.address}}</td>
        </tr>
        <tr>
          <td class="label">公司邮编:</td>
          <td class="content">{{company.postCode}}</td>
        </tr>
        <tr>
          <td class="label">公司网页:</td>
          <td class="content">{{company.web}}</td>
        </tr>
        <tr>
          <td class="label">公司邮箱:</td>
          <td class="content">{{company.mail}}</td>
        </tr>
        <tr>
          <td class="label">公司电话:</td>
          <td class="content">{{company.telephone}}</td>
        </tr>
        <tr>
          <td class="label">联系人姓名:</td>
          <td class="content">{{company.contactName}}</td>
        </tr>
        <tr>
          <td class="label">联系人职称:</td>
          <td class="content">{{company.profession}}</td>
        </tr>
        <tr>
          <td class="label">联系人手机:</td>
          <td class="content">{{company.phone}}</td>
        </tr>
      </table>
    </div>

    <div class="title2">
      <b>翻译结果</b>
    </div>

    <div>
      <table style="float: left">
        <tr>
          <td class="label">公司名:</td>
          <td class="content"><el-input class="iptContent" v-model="tcompany.name" size="mini"></el-input></td>
        </tr>
        <tr>
          <td class="label">公司英文名:</td>
          <td class="content"><el-input class="iptContent" v-model="tcompany.englishName" size="mini"></el-input></td>
        </tr>
        <tr>
          <td class="label">公司法人:</td>
          <td class="content"><el-input class="iptContent" v-model="tcompany.legalPerson" style="width: 200px" size="mini"></el-input></td>
        </tr>
        <tr>
          <td class="label">注册资本:</td>
          <td class="content"><el-input class="iptContent" v-model="tcompany.money" style="width: 150px" size="mini"></el-input>&nbsp; 万元</td>
        </tr>
        <tr>
          <td class="label">成立日期:</td>
          <td class="content"><el-date-picker v-model="company.date" class="iptContent"  style="width: 200px" size="mini" placeholder="请选择日期"></el-date-picker></td>
        </tr>
        <tr>
          <td class="label">人员规模:</td>
          <td class="content">
            <el-select v-model="company.member"
                       size="mini">
              <el-option
                v-for="item in member"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </td>
        </tr>
        <tr>
          <td class="label">经营状态:</td>
          <td class="content">
            <el-select v-model="company.status"
                       size="mini">
              <el-option
                v-for="item in status"
                :key="item.value"
                :label="item.label"
                :value="item.value"></el-option>
            </el-select>
          </td>
        </tr>
        <tr>
          <td class="label">主营产品或服务:</td>
          <td class="content"><el-input class="iptContent" v-model="tcompany.supply" size="mini"></el-input></td>
        </tr>
        <tr>
          <td class="label">公司类型:</td>
          <td class="content">
            <el-select v-model="company.category"
                       size="mini">
              <el-option
                v-for="item in category"
                :key="item.value"
                :label="item.label"
                :value="item.value"></el-option>
            </el-select>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td class="label">公司注册国:</td>
          <td class="content">
            <el-select v-model="company.country"
                       size="mini">
              <el-option
                v-for="item in country"
                :key="item.value"
                :label="item.label"
                :value="item.value"></el-option>
            </el-select>
          </td>
        </tr>
        <tr>
          <td class="label">公司地址:</td>
          <td class="content"><el-input class="iptContent" v-model="tcompany.address" size="mini"></el-input></td>
        </tr>
        <tr>
          <td class="label">公司邮编:</td>
          <td class="content"><el-input class="iptContent" v-model="tcompany.postCode" size="mini"></el-input></td>
        </tr>
        <tr>
          <td class="label">公司网页:</td>
          <td class="content"><el-input class="iptContent" v-model="tcompany.web" size="mini"></el-input></td>
        </tr>
        <tr>
          <td class="label">公司邮箱:</td>
          <td class="content"><el-input class="iptContent" v-model="tcompany.mail" size="mini"></el-input></td>
        </tr>
        <tr>
          <td class="label">公司电话:</td>
          <td class="content"><el-input class="iptContent" v-model="tcompany.telephone" size="mini"></el-input></td>
        </tr>
        <tr>
          <td class="label">联系人姓名:</td>
          <td class="content"><el-input class="iptContent" v-model="tcompany.contactName" style="width: 200px" size="mini"></el-input></td>
        </tr>
        <tr>
          <td class="label">联系人职称:</td>
          <td class="content"><el-input class="iptContent" v-model="tcompany.profession" style="width: 200px" size="mini"></el-input></td>

        </tr>
        <tr>
          <td class="label">联系人手机:</td>
          <td class="content"><el-input class="iptContent" v-model="tcompany.phone" size="mini"></el-input></td>
        </tr>
      </table>
    </div>


    <div class="operate">
      <el-button size="mini">机翻</el-button>
      <el-button size="mini">完成</el-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "business_info",
    data(){
      return{
        status:[
          {
            label: "营业",
            value: "1"
          },
          {
            label: "存续",
            value: "2"
          },
          {
            label: "歇业",
            value: "3"
          },
        ],
        category: [
          {
            label: "有效责任制",
            value: "1"
          },
          {
            label: "xxxxxx",
            value: "2"
          },
          {
            label: "xxxxxxx",
            value: "3"
          },
        ],
        country:[
          {
            label: "中国",
            value: "china",
          },
          {
            label: "日本",
            value: "japan",
          },
        ],
        member: [
          {
            value: '0-99',
            label: '0-99'
          }, {
            value: '100-200',
            label: '100-200'
          }, {
            value: '200-500',
            label: '200-500'
          }, {
            value: '500-1000',
            label: '500-1000'
          }, {
            value: '1000-9999',
            label: '1000-9999'
          },{
            value: '10000人以上',
            label: '10000人以上'
          }
        ],
        company: {
          name: '上海机器人公司',
          introduction: '上海智能机器人公司成立于2010年，是一家以机器人独有技术为核心，致力于数字化智能高端装备制造的高科技上市企业。' +
            '公司的机器人产品线涵盖工业机器人、洁净（真空）机器人 、移动机器人、特种机器人及智能服务机器人五大系列，' +
            '其中工业机器人产品填补多项国内空白，创造了中国机器人产业发展史上88项第一的突破；',
          englishName: 'ShangHai Robot',
          legalPerson: '齐德隆',
          money: 500,
          date: '2020-3-5',
          member: '201-250',
          status: '存续',
          supply: '机器人及其自动化服务',
          category: '上市公司',
          country: '中国',
          address: '上海市普陀区中山北路3663号',
          postCode: '21000',
          web: 'Robot.sh.com',
          mail: 'robot@163.com',
          telephone: '(+86)-02106210000',
          contactName: '齐德隆',
          profession: '正教授',
          phone: '(+86)17317824843'
        },
        tcompany: {
          name: '上海机器人公司',
          introduction: '上海智能机器人公司成立于2010年，是一家以机器人独有技术为核心，致力于数字化智能高端装备制造的高科技上市企业。' +
            '公司的机器人产品线涵盖工业机器人、洁净（真空）机器人 、移动机器人、特种机器人及智能服务机器人五大系列，' +
            '其中工业机器人产品填补多项国内空白，创造了中国机器人产业发展史上88项第一的突破；',
          englishName: 'ShangHai Robot',
          legalPerson: '齐德隆',
          money: 500,
          date: '2020-3-5',
          member: '201-250',
          status: '存续',
          supply: '机器人及其自动化服务',
          category: '上市公司',
          country: '中国',
          address: '上海市普陀区中山北路3663号',
          postCode: '21000',
          web: 'Robot.sh.com',
          mail: 'robot@163.com',
          telephone: '(+86)-02106210000',
          contactName: '齐德隆',
          profession: '正教授',
          phone: '(+86)17317824843'
        },

      }
    },
    created() {
    },
  }
</script>

<style scoped>
  .title2{
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  table{
    text-align: left;
    width: 50%;
  }
  .label{
    width: 120px;
  }
  .content{
    padding-right: 100px;
  }
  .operate{
    margin: 30px;
  }
</style>

