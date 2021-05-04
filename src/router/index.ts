import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Index = ()=> import('@/views/IndexPage.vue')
const routes: Array<RouteRecordRaw> = [
  // {
  //   path:'/',
  //   redirect:'/Index',
  // },
  {
    path: '',
    name: 'index',
    component:Index
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
