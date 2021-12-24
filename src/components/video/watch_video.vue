<template>
  <el-container>
    <input type="button" value="点击退出登录" @click="logout"/>
    <div class="my_video">
      <d-player ref="player" :options="options"></d-player>
    </div>
  </el-container>
</template>

<script>
export default {
  data(){
    return{
      options:{
        //preload: "auto",
        video:{
          url: "static/1080p.mkv"
        }
      }
    }
  },
  methods: {
    logout(){
      this.$store.commit('setCurpage',{page_path:'/login'})
      this.$router.replace({name:'Login'})
    }
  }
}
</script>

<style>

</style>