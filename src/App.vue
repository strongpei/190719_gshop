<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from "@/components/FooterGuide/FooterGuide.vue"
  import {reqAddress} from "@/api";
  export default {
    async mounted(){
      const result = await reqAddress('116.36867',40.10038)
      console.log('result',result)
    },

    components:{
      FooterGuide
    }
  }
</script>

<style lang = "stylus" rel = "stylesheet/stylus">

</style>
