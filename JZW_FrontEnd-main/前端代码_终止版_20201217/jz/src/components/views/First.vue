<template>
  <div class="first-app">
    {{msg}}
    <confirm text="注册" @message="getMessage"></confirm>
    <p><router-link to="/Second">去第二个页面</router-link></p>
  </div>
</template>

<script>
    import Confirm from "../sub/Confirm";
    export default {
        name: "First",
        components:{
            Confirm
        },
        data(){
            return {
                msg: "Welcom to FirstAPP"
            };
        },
        methods:{
            getMessage(val){
                alert(val);
            }
        }
    }
</script>

<style scoped>

</style>
