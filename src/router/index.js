import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from './../views/home'

const routes = [
  {
    path: '/',
    component: login,
    meta: {
      role: '*'
    }
  },
]

export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production'
})
