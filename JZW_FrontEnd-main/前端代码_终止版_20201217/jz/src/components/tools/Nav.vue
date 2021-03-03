<template>
  <div id="diff-nav">
  <div class="nav-wrapper">
    <span class="action">
      <button class="main_homepage" @click="notExistHint">
        <span>{{$t('subnet.policyinfo')}}</span>
      </button>
    </span>

    <span class="action">
      <a class="main_homepage" @click="notExistHint">
        <span>{{$t('subnet.cloudexpo')}}</span>
      </a>
    </span>

    <span class="action">
      <a class="main_homepage" @click="notExistHint">
        <span>{{$t('subnet.tenderngbidding')}}</span>
      </a>
    </span>

    <span class="action">
      <a class="main_homepage" @click="notExistHint">
        <span>{{$t('subnet.investmentfinancing')}}</span>
      </a>
    </span>

    <span class="action">
      <a class="main_homepage" @click="notExistHint">
        <span>{{$t('subnet.leasetransfer')}}</span>
      </a>
    </span>
  </div>
  <div class="nav-inner-wrapper">
    <div class="inner-action">
      <router-link :to="{name:'news'}" class="main_homepage">
        <span>{{$t('netclass.news')}}</span>
      </router-link>
    </div>

    <div class="inner-action">
      <router-link :to="{name:'products'}" class="main_homepage">
        <span>{{$t('netclass.products')}}</span>
      </router-link>
    </div>

    <div class="inner-action">
      <router-link :to="{name:'companys'}" class="main_homepage">
        <span>{{$t('netclass.companys')}}</span>
      </router-link>
    </div>

    <div class="inner-action">
      <router-link :to="{name:'services'}" class="main_homepage">
        <span>{{$t('netclass.services')}}</span>
      </router-link>
    </div>

    <div class="inner-action">
      <router-link :to="{name:'purchases'}" class="main_homepage">
        <span>{{$t('netclass.purchases')}}</span>
      </router-link>
    </div>

    <div class="inner-action">
      <router-link :to="{name:'technologys'}" class="main_homepage">
        <span>{{$t('netclass.technologys')}}</span>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "Nav",
        methods:{
            notExistHint(){
              alert(this.$t("message.comingsoon"));
            }
        }
    }
</script>

<style scoped>
  .action {
    margin-left: 200px;
    min-width: 266px;
    flex: 0 1 auto;
    text-align: right;
    text-valign: middle;
  }

  .main_homepage {
    color: black;
    text-decoration: none;
  }

  .nav-inner-wrapper{
    background: #409eff;
    height: 80px;

  }
  .inner-action{
    display: inline-block;
    margin-left: 200px;
    margin-top: 20px;
    min-width: 100px;
    min-height: 10px;
    font-size: 20px;
    background: white;
    text-align: center;
    text-valign: middle;
  }



</style>
