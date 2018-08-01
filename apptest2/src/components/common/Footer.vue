<template>
    <ul class="footer" :style="{'background-color':$store.state.bcolor}">
        <li @click="$store.commit('chan',{cl:'#0077ff',tit:'Movie'})">
            <router-link to="/movie/movielist">电影</router-link>
        </li>
        <li @click="$store.commit('chan',{cl:'green',tit:'Music'})">
            <router-link to="/music/musiclist">音乐</router-link>
        </li>
        <li @click="$store.commit('chan',{cl:'pink',tit:'Book'})">
            <router-link to="/book/booklist">图书</router-link>
        </li>
        <li @click="$store.commit('chan',{cl:'orange',tit:'Photo'})">
            <router-link to="/photo/photolist">照片</router-link>
        </li>
    </ul>
</template>

<script>
    import store from '@/vuex/store'
    export default {
        store
        
    }
</script>

<style scoped>
    .footer{
        height: 1rem;
        width: 100%;
        position: fixed;
        bottom:0;
        left: 0;
        text-align: center;
        background:#0077ff;
        display: flex;
    }
    .footer li{
        font-size: .32rem;        
        flex:1;
        line-height: 1rem; 
    }
    .footer li a{
        color:#000;
    }
</style>