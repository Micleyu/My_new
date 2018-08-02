<template>
    <div class="music-detail">
        <aplayer :list="newList" 
            :music="newList[0]" v-if="isShow" :showLrc="true"/>
    </div>
</template>

<script>
    import Aplayer from 'vue-aplayer'
    import axios from 'axios'
    export default {
        components: {
            Aplayer
        },
        data(){
            return{
                musicList:[],
                newList:[],
                isShow:false
            }
        },
        created() {
            axios.get(`./static/data/musicdata.json`).then(res =>{
                this.musicList=res.data.musicData;
                for(let i=0;i<this.musicList.length;i++){
                    let {author,lrc,musicImgSrc:pic,src,title}=this.musicList[i];
                    let obj={
                        artist:author,
                        lrc:lrc,
                        pic:pic,
                        src:src,
                        title:title
                    }
                    this.newList.push(obj);
                    
                }
                
                this.isShow='true'
            }).catch(res =>{

            })
        }
    }
</script>

<style scoped>
    .music-detail{
        margin: 1rem 0;
        font-size: .32rem;
    }
</style>