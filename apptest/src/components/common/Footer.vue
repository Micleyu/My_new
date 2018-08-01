<template>
    <ul class="footer" :style="{'background-color':bg}">
        <li>
            <router-link to="/movielist">电影</router-link>
        </li>
        <li>
            <router-link to="/musiclist">音乐</router-link>
        </li>
        <li>
            <router-link to="/booklist">图书</router-link>
        </li>
        <li>
            <router-link to="/photolist">照片</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        props:['bg']
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