import Vue from 'vue'
import Main from '@/components/main'
import Home from '../views/Home.vue'
import Login from '../views/login/login.vue'
import Register from '../views/register/register.vue'


const routes = [
  {
    path: '/',
    name: '_home',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: Home
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

export default routes
