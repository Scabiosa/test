<template>
  <div class="confirm-button">
      <button @click="getButtonClick">{{text}}</button>
  </div>
</template>

<script>
    export default {
        name: "Confirm-button",
        props:["text"],
        data(){
            return {
                msg: true
            };
        },
        methods:{
            getButtonClick(){
                this.$emit("message", this.msg);
            }
        }
    }
</script>

<style scoped>

</style>
