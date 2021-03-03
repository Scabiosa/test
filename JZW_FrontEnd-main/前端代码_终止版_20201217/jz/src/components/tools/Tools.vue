<template>
  <div class="tools-wrapper">

      <el-select @change="selectChanged" v-model="select" placeholder="请选择语言">
        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

    <span class="action">

      <el-popover
        placement="bottom"
        width="200"
        trigger="click">
        <img src="~@/assets/mobileVersion/MobileVersion.png">
        <span>{{$t("message.comingsoon")}}</span>
        <button slot="reference" class="btn">{{$t('pub.mobile')}}</button>
      </el-popover>
    </span>

    <span class="action">
      <router-link to='/helpCenter'>
        <button class="btn">{{$t('pub.help')}}</button>
      </router-link>
    </span>

    <span class="action">
      <router-link to='/customerService'>
        <button class="btn">{{$t('pub.customerService')}}</button>
      </router-link>
    </span>

  </div>
</template>

<script>
    export default {
        name: "Tools",
        data(){
            return {
                options1:[{
                    value:'en_US',
                    label:'English',
                },{
                    value:'zh_CN',
                    label:'中文'
                }],
                select: 'en_US',
                locale: [],
            }
        },
        mounted(){
            this.locale = this.$i18n.locale;
            this.selectChanged(this.locale);
            this.select = this.$i18n.locale;
        },
        methods:{
            selectChanged(value){
                //console.log(value)
                localStorage.setItem('lang',value);
                this.$i18n.locale = value;
                //alert(value);
            }
        }
    }
</script>

<style scoped>
  .btn{
    background: none;
    border: none;
    color: white;
  }
  .action {
    margin-left: 20px;
    min-width: 266px;
    flex: 0 1 auto;
    text-align: right;
  }

  .main_homepage {
    color: inherit;
    text-decoration: none;
  }
</style>
