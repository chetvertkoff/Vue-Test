import Vue from 'vue'
import VueRouter from 'vue-router'
import CKEditor from '@ckeditor/ckeditor5-vue'

import Home from '@/views/Home'
import PostDetail from '@/views/PostDetail'
import CreatePost from '@/views/CreatePost'
import EditPost from '@/views/EditPost'

Vue.use(CKEditor)
Vue.use(VueRouter)


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/post/:id',
      component: PostDetail
    },
    {
      path: '/create/',
      component: CreatePost
    },
    {
      path: '/edit/:id',
      component: EditPost
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
})

