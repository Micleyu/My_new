<template>
    <div class="div2">
        zheshiyigeceshiwenjian 
        <h1>{{count}}</h1>
        <h2>{{num}}</h2>
        <h3>{{add2}}</h3>
        {{$store.state.count}}
        <button @click="$store.commit('add')">++</button>
        <button @click="add">+++</button>
    </div>
</template>

<script>
    import store from '@/vuex/store'
    import {mapState,mapMutations,mapGetters} from 'vuex'
    export default {
        store,
        /* computed:{
            count(){
                return this.$store.state.count
            }
        } */

        computed:{
            ...mapState(["count","num"]),
            ...mapGetters(["add2"])
        },
        methods:mapMutations(["add"])
    }
</script>

<style scoped>
    .div2{
        width:200px;
        height:200px;
        background:green;
        display:block;
        margin:0 auto;
    }
</style>