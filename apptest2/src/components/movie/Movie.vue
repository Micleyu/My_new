<template>
    <div class="moviecontent">
        <ul>
            <li class="movieList" v-for="(obj,index) in movieList" :key="index" @click="goDetail(obj.id)">
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
                    <p>{{index}}</p>
                </div>
            </li>
        </ul>
        <div v-show="isShow">
            loading
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
         data(){
            return{
                movieList:[],
                isShow:false,
                num:0
            }
        },
        methods: {
            load(){
                axios.get(`./static/data/moviedata${this.movieList.length}.json`).then(res=>{
                this.num=res.data.data.movies.length;
                this.movieList =this.movieList.concat(res.data.data.movies);
            }).catch(res=>{

            })
            },
            goDetail(id){
                this.$router.push(`/movie/movieDetail/${id}`)
            }
            
        },
        created () {
            this.load()
            window.onscroll=()=>{
                let scroolHeight=document.documentElement.scrollTop||document.body.scroolToo;
                let clientHeight=document.documentElement.clientHeight
                let height=document.documentElement.scrollHeight
                // console.log(scroolHeight);
                // console.log(clientHeight);
                // console.log(height);
                if(scroolHeight+clientHeight==height){
                    
                    if(this.num==10){
                        this.load();
                        this.isShow=true;  
                    }
                    this.isShow=false;
                    
                }

                
            }
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