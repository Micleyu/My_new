import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/Movie'
import MusicList from '@/components/music/Music'
import BookList from '@/components/book/Book'
import PhotoList from '@/components/photo/Photo'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/movielist'
    },
    {
      path:'/movielist',
      component: MovieList
    },
    {
      path:'/musiclist',
      component: MusicList
    },
    {
      path:'/booklist',
      component: BookList
    },
    {
      path:'/photolist',
      component: PhotoList
    }
  ]
})
