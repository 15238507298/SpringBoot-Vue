import Vue from 'vue'
import Router from 'vue-router'


import Index from '../components/Index'
import user from '../components/user/user'
import msg from '../components/msg/msg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/index'
    },
    {
      path:'/index',
      component:Index
    },
    {
      path:'/user',
      component:user
    },
    {
      path:'/msg',
      component:msg
    }

  ]
})
