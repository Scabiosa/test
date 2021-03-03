<template>
  <div>
    <div class="title">{{currentNew.name}}</div>
    <div class="publishdate">{{$t('introduction.publishdate')+" : "+currentNew.createTime.slice(0,10)}}</div>
    <pre class="memo">{{currentNew.briefIntroduction}}</pre>
  </div>
</template>

<script>
import {getNewsByCode} from "../../axios/api"
export default {
  name: "dynamicdetail",
  data() {
    return {
       currentNew:{
         title:'',
         createTime:'',
         briefIntroduction:''
       }
    };
  },
  created() {
    getNewsByCode({
      code: this.$route.query.code,
      locale: localStorage.getItem('lang')
    }).then(res=>{
       let {code,msg,result}=res.data;
       if(code === 200){
         this.currentNew = result;
       }else{
         this.$route.push('/Page404');
       }
    })
  }
}
</script>

<style scoped>
.title {
  font-size: 24px;
  font-weight: 24px;
  margin: 10px auto;
  text-align: center;
}
.publishdate {
  text-align: center;
  color: gray;
}
.memo {
  /* text-indent: 24px; */
  margin-top: 24px;
  margin: 24px 30px 0 30px;
  font-size: 18px;
  line-height: 24px;
}
pre {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wraps;
  *word-wrap: break-word;
  *white-space: normal;
}
</style>
