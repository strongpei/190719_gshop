<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from "@/components/FooterGuide/FooterGuide.vue"
  export default {
    async mounted(){
     this.$store.dispath('getAddress')
    },

    components:{
      FooterGuide
    }
  }
</script>

<style lang = "stylus" rel = "stylesheet/stylus">

</style>
