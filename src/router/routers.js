import Vue from 'vue'
import Main from '@/components/main'
import Home from '../views/Home.vue'
import Title from '../views/title/title.vue'
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
    path: '/title',
    name: 'title',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/title',
        name: 'title',
        meta: {
          hideInMenu: false,
          title: '文章管理',
          icon: 'md-home'
        },
        component: Title
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
