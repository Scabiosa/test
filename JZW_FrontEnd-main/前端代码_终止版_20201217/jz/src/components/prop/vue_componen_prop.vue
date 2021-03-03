<template>
    <div>
      <span :style="{ color: color}">{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: "vue_componen_prop",
        props:{
            text: String,
            color:{
                type: String,
                default: '#000',
                required: true,
                validator(value){
                    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value)
                }
            }
        }
    }
</script>

<style scoped>

</style>
