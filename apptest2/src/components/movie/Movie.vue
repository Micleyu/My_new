<template>
    <div class="moviecontent">
        <ul>
            <li class="movieList" v-for="(obj,index) in movieList" :key="index">
                <div class="movie-img">
                    <img :src="obj.img" alt="">
                </div>
                <div class="movie-info">
                    <h3>{{obj.nm}}</h3>
                    <p>{{obj.ver}}</p>
                    <p>{{obj.dir}}</p>
                    <p>{{obj.cat}}</p>
                    <p>{{obj.year}}</p>
                    <p>{{obj.star}}</p>
                    <p>{{obj.showInfo}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
         data(){
            return{
                movieList:[]
            }
        },
        created () {
            axios.get('./static/data/moviedata.json').then(res=>{
                console.log(res.data.data.movies);
                this.movieList =res.data.data.movies;
            }).catch(res=>{

            })
        }
    }
</script>

<style scoped>
    .moviecontent{
        margin-top: 1rem;
        margin-bottom:1rem;
    }
    .movieList{
        display: flex;
        padding: 0.2rem;
        font-size: 14px;
        line-height: 1.8;
    }
    .movie-img{
        flex-grow: 1;
        margin-right: 0.1rem;
        width: 0px;
    }
    .movie-img img{
        width: 100%;
    }
    .movie-info{
        width: 0px;
        flex-grow: 2;

    }
    .movie-info span{
        margin-right: 0.1rem;
    }
</style>