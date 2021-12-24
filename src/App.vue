<template>
  <router-view></router-view>
</template>

<script>

  export default {
    created(){
      if(this.$store.state.curpage.page_path!='/login'){
        this.$router.replace({path:this.$store.state.curpage.page_path}).catch(err=>err)
      }
      else{
        this.goLoginPage()
        this.$store.commit('setCurpage',{page_path:'/login'})
      }
    },
    data() {
      return {};
    },
    mounted(){},
    methods: {
      goLoginPage(){
        this.$router.replace({name:'Login'}).catch(err=>err)
      }
    }
  }
</script>
