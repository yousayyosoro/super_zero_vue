import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from './../views/home'
import detail from './../views/detail'

const routes = [
  {
    path: '/',
    component: login,
    meta: {
      role: '*'
    }
  }, {
    path: '/detail',
    component: detail
  }
]

export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production'
})
