import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
    bcolor:'',
    title:'Movie',
    
};
const mutations= {
    chan(state,obj){
        state.bcolor=obj.cl,
        state.title=obj.tit
    }
}


export default new Vuex.Store({
    state,
    mutations
    
})