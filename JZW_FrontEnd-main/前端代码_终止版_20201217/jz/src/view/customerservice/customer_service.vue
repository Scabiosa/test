<template>
    <div class="main">
      <h2>{{$t("customerService.contactUs")}}</h2>
      <div class="block">
        <table>
          <h3>{{$t("customerService.contact")}}</h3>
          <tr>
            <td>{{$t("companyIntroduction.companyName")}}:</td>
            <td>{{$t("pub.title")}}</td>
          </tr>
          <tr>
            <td>{{$t("companyIntroduction.companyAddress")}}:</td>
            <td></td>
          </tr>
          <tr>
            <td>{{$t("companyIntroduction.companyPostCode")}}:</td>
            <td></td>
          </tr>
          <tr>
            <td>{{$t("companyIntroduction.companyWeb")}}:</td>
            <td></td>
          </tr>
          <tr>
            <td>{{$t("companyIntroduction.companyPhone")}}:</td>
            <td></td>
          </tr>
          <tr>
            <td>{{$t("companyIntroduction.companyEmail")}}:</td>
            <td></td>
          </tr>
          <tr>
            <td>{{$t("companyIntroduction.contactName")}}:</td>
            <td></td>
          </tr>
          <tr>
            <td>{{$t("companyIntroduction.contactPhone")}}:</td>
            <td></td>
          </tr>

        </table>
      </div>

      <div class="block">
        <h3>{{$t("customerService.messageBoard")}}</h3>
        <br>
        <el-input
          id="messageBoard"
          type="textarea"
          v-model="message"
          rows="3"></el-input>
        <div class="submit">
         <el-button>{{$t("button.submit")}}</el-button>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "customer_service",
      data(){
          return{
            message: "",
          }

      }

    }
</script>

<style scoped>
  .main{
    margin: 100px;
  }
  h3{
    margin: 0px;
    padding: 0px;
  }
  .block{
    margin: 10px;
    padding: 10px;
    border: lightgrey 1px solid;
    border-radius: 5px;
  }
  .submit{
    text-align: right;
    margin: 10px auto;
  }
</style>
