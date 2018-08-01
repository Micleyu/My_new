<template>
    <div>
        <div class="header" :style="{'background-color':bg}">
            <span class="header-index">
                <router-link to="/">
                    首页
                </router-link>
            </span>
            <span class="header-title">{{title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:['title','bg']
    }
</script>

<style scoped>
    .header{
        height: 1rem;
        width: 100%;
        position: fixed;
        top:0;
        left: 0;
        text-align: center;
        background:#0077ff;
        color: #fff;
    }
    .header-index{
        font-size: .32rem;
        position: absolute;
        top: 50%;
        left: .2rem;
        transform: translate(0,-50%)
    }
    .header-title{
        font-size: .64rem;
        line-height: 1rem;
        display: block;
    }
    a{
        color: #fff;
    }
</style>