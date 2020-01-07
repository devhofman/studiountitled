import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/itbinvest',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
            import (/* webpackChunkName: "about" */ '../views/itbinvest.vue')
},
{
  path: '/szeptycover',
  name: 'szeptycover',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
            import (/* webpackChunkName: "about" */ '../views/szeptycover.vue')
},
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
            import (/* webpackChunkName: "about" */ '../views/AboutMe.vue')
},
{
  path: '/magic',
  name: 'magic',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
            import (/* webpackChunkName: "about" */ '../views/magic.vue')
},
{
  path: '/portraits',
  name: 'portraits',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
            import (/* webpackChunkName: "about" */ '../views/portraits.vue')
},
{
  path: '/wimd',
  name: 'wimd',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
            import (/* webpackChunkName: "about" */ '../views/wimd.vue')
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
