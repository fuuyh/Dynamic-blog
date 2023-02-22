import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/index'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/index')
      },
      {
        path: '/posts',
        name: 'posts',
        component: () => import(/* webpackChunkName: "posts" */ '../views/posts/index')
      },
      {
        path: '/posts/:aid',
        name: 'posts-article',
        component: () => import(/* webpackChunkName: "article" */ '../views/posts/article'),
        props: true
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
