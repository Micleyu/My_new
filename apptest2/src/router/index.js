import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/Movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/movie/movielist'
    },
    {
      path: '/movie/movielist',
      component:MovieList
    }
  ]
})
