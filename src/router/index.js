import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/vHome.vue'
import Search from '../views/vSearch.vue'
import About from '../views/vAbout.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
