<template>
  <div class="nav-wrapper">

    <span class="action">
      <router-link :to="{name:'companyintroduce',query:{companyCode:this.companyCode}}" class="main_homepage">
        <span>{{$t('company.introduce')}}</span>
      </router-link>
    </span>

    <span class="action">
      <router-link :to="{name:'companydynamic',query:{companyCode:this.companyCode}}" class="main_homepage">
        <span>{{$t('company.dynamic')}}</span>
      </router-link>
    </span>

    <span class="action">
      <router-link :to="{name:'companysupplyinformation',query:{companyCode:this.companyCode}}" class="main_homepage">
        <span>{{$t('company.supplyinformation')}}</span>
      </router-link>
    </span>

    <span class="action">
      <router-link :to="{name:'companypurchaseinformation',query:{companyCode:this.companyCode}}" class="main_homepage">
        <span>{{$t('company.purchaseinformation')}}</span>
      </router-link>
    </span>

    <span class="action">
      <router-link :to="{name:'companytechnoloyinformation', query:{companyCode:this.companyCode}}" class="main_homepage">
        <span>{{$t('company.technologyinformation')}}</span>
      </router-link>
    </span>

    <span class="action">
      <router-link :to="{name:'companyhonorinformation',query:{companyCode:this.companyCode}}" class="main_homepage">
        <span>{{$t('company.certificateofhonor')}}</span>
      </router-link>
    </span>

    <span class="action">
      <router-link :to="{name:'companycontractinformation', query:{companyCode:this.companyCode}}" class="main_homepage">
        <span>{{$t('company.contactinformation')}}</span>
      </router-link>
    </span>

    <span class="action">
      <router-link :to="{name:'companylivebroadinformation',query:{companyCode:this.companyCode}}" class="main_homepage">
        <span>{{$t('company.livebroadcastcenter')}}</span>
      </router-link>
    </span>
  </div>
</template>

<script>
    export default {
        name: "CompanyNav",
        props:{
          companyCode: String
        }
    }
</script>

<style scoped>
  .nav-wrapper{
    background: #2c2c2c;
    height: 40px;
    display: flex;
    align-items: center;
  }
  .nav-wrapper .action {
    font-size: 18px;
    margin: 10px auto;
  }
  .nav-wrapper :hover{
    color: chocolate;
  }
  .main_homepage {
    color: white;
    text-decoration: none;
  }
</style>
