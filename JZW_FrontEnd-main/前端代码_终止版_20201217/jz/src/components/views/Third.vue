<template>
  <div  id="#app">
    <p>{{$t("message.hello")}}</p>
  </div>
</template>

<script>
    import Vue from 'vue'
    import VueI18n from 'vue-i18n'

    Vue.use(VueI18n)

    const messages = {
        en:{
            message: {
                hello: 'world hello'
            }
        },
        zh:{
            message:{
                hello: '世界'
            }
        }
    }

    const i18n = new VueI18n({
        locale: 'en',
        messages
    })

    export default {
        data(){
            return {
                hello: this.$t('message.hello')
            }
        },
        i18n
    }
</script>

<style scoped>

</style>
