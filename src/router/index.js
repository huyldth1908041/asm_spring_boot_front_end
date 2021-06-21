import { createRouter, createWebHistory } from 'vue-router'
import List from "../views/List";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: List
  },
  {
    path: '/students',
    name: 'List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
