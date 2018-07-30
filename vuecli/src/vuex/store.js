import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const state = {
    count:20,
    num:5
};
const mutations ={
    add(state){
        state.count++
    }
};
const getters={
    add2(state){
        return state.count+state.num
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters
})