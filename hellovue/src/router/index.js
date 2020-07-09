import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path:'/index',
    name:'index',
    component: () => import('@/views/index.vue')
  },
  {
    path:'/detail',
    name:'detail',
    component: () => import('@/views/detail.vue')
  },
  {
    path:'/userCenter',
    name:'userCenter',
    component: () => import('@/views/userCenter.vue')
  },
  {
    path:'/map',
    name:'map',
    component: () => import('@/views/map.vue')
  },
  {
    path:'/waterfallFlow',
    name:'waterfallFlow',
    component: () => import('@/views/waterfallFlow.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
