<template>
    <div class="movie-detail">
        <div>
            <img :src="movieDetail.img" alt="">
        </div>
        <div>
            导演：{{movieDetail.dir}}
        </div>
        <div>
            主演：{{movieDetail.star}}
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                movieDetail:{}
            }
        },
        created () {
            axios.get(`./static/data/moviedetail.json`).then(res=>{
                console.log(res)
                this.movieDetail=res.data.data.MovieDetailModel;
            }).catch()
        }
    }
</script>

<style scoped>
.movie-detail{
    margin: 1rem 0;
    font-size: .32rem;
}
</style>