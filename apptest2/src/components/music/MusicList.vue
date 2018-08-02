<template>
    <div class="musiccontent">
        <div v-for="(obj,index) in musicList" :key="index" class="music-list" @click="goMusic(obj.id)">
            <img :src="obj.bg" alt="">
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                musicList:[]
            }
        },
        created () {
            axios.get(`./static/data/musiclist.json`).then(res=>{
                this.musicList=res.data.albums;
            }).catch(res=>{
                
            })
        },
        methods: {
            goMusic(id){
                this.$router.push(`/music/musicDetail/${id}`)
            }
        }
    }
</script>

<style scoped>
    .musiccontent{
        margin: 1rem 0
    }
    .music-list{
        float: left;
        width: 50%;
    }
    .music-list img{
        display: block;
        width:100%;
    }
</style>