import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/GraphX6/HomePage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/GraphX6/LoginPage.vue')
  },
  {
    path: '/WebRTC',
    name: 'WebRTC',
    component: () => import('../views/WebRTC/WebRTC.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
