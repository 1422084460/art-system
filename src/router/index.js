import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/index/Login.vue'
import Main from '@/components/main/main.vue'
import Video from '@/components/video/watch_video.vue'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    }
  ]
})
