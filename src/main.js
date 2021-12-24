// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ele from 'element-ui'
import {Container, Header, Aside, Main} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './script/store'
import VueDPlayer from 'vue-dplayer'
import "vue-dplayer/dist/vue-dplayer.css"

Vue.use(ele);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(VueDPlayer);

//定义全局axios组件,可以不定义，因为在fetch.js中已经import了axios
//Vue.prototype.$http = axios

//定义全局变量
Vue.prototype.global = {status: 999}

// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   console.log("全局前置守卫:"+to.path);
//   let routepath = store.state.curpage.page_path
//   console.log(routepath)
//   if(from.path=='/login'){
//     store.commit('setCurpage',{page_path:to.path})
//     //router.replace(routepath)
//     next()
//   }
//   else{
//     //router.replace(store.state.curpage.page_path)
//     next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: c => c(App),
  router,
  store
})

