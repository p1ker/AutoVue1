import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Brands from '../views/Brands.vue'
import Input from '../views/Input.vue'
import Models from '../views/Models.vue'
import News from '../views/News.vue'
import Registr from '../views/Registr.vue'
import AutoInfo from "../views/AutoInfo";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/brands',
    name: 'Brands',
    component: Brands
  },
  {
    path: '/input',
    name: 'input',
    component: Input
  },
  {
    path: '/models',
    name: 'models',
    component: Models
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/registr',
    name: 'registr',
    component: Registr
  },
  {
    path: '/auto/:id',
    name: 'AutoInfo',
    component: AutoInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
