<template>
  <el-container>
    <!-- <el-avatar shape="square" :size="50" :src="imgUrl"></el-avatar> -->
    <!-- <input type="button" value="点击退出登录" @click="logout"/> -->
    <span id="succ">登录成功，但网页已丢失，404 Not Found</span>
  </el-container>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  // computed:{
  //   imgUrl: function(){
  //     return require("D://images/"+this.$store.state.avatar.img_name)
  //     //return require("/usr/local/images/"+this.$store.state.avatar.img_name)
  //   }
  // },
  methods: {
    logout(){
      this.$store.commit('setCurpage',{page_path:'/login'})
      this.$router.replace({name:'Login'})
    }
  }
}
</script>

<style>
  #succ{
    font-size: 50px;
    color: rgb(0, 217, 255);
  }
</style>