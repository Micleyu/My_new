<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Rem from '@/assets/js/rem.js'
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
</style>
