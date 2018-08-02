import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/Movie'
import MusicList from '@/components/music/MusicList'
import MovieDetail from '@/components/movie/MovieDetail'
import MusicDetail from '@/components/music/MusicDetail'
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
    },
    {
      path: '/movie/movieDetail/:movieId',
      component:MovieDetail
    },
    {
      path: '/music/musiclist',
      component:MusicList
    },
    {
      path: '/music/musicDetail/:musicId',
      component:MusicDetail
    }
  ]
})
