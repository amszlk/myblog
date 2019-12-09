import Vue from 'vue'
import Router from 'vue-router'
import ArticlList from '@/pages/ArticleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArticleList',
      component: ArticlList
    }
  ]
})
