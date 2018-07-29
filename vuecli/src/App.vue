<template>
  <div id="app">
    <button @click="goHome()">首页</button>
    <button @click="goNext()">下一页</button>
    <button @click="goBack()">上一页</button>
    <br/>
    <router-link to="/test">
      <button>
          测试
      </button>
    </router-link>
    <router-link to="/test2">
      <button>
          测试2
      </button>
    </router-link>
    <router-link to="/test3/5/zs">
      <button>
          测试3
      </button>
    </router-link>
    <router-link :to="{name:'Test4',params:{name:'zs',age:10}}">
      <button>
          测试4
      </button>
    </router-link>
    <router-link to="/gonew/7/ls">
      <button>
          重定向
      </button>
    </router-link>
    <router-link to="/smallName">
      <button>
          alias
      </button>
    </router-link>
    <div class="div1">
      <transition name="fade">
        <router-view></router-view>
      </transition>
      
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goHome(){
      this.$router.push('/test')
    },
    goNext(){
      this.$router.go(1)
    },
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.div1{
  background:red;
}
.fade-enter{
  opacity:0
}
.fade-enter-active{
  transition:opacity 2s;
}
.fade-enter-to{
  opacity:1
}
.fade-leave{
  opacity:1
}
.fade-leave-active{
   transition:opacity 2s;
}
.fade-leave-to{
  opacity:0
}
</style>
