<template>
  <div id="app">
    <common-header></common-header> 
    <router-view/>
    <common-footer></common-footer>
  </div>
</template>

<script>
import commonHeader from '@/components/common/Header'
import commonFooter from '@/components/common/Footer'
export default {
  name: 'App',
  components:{
    commonHeader,
    commonFooter
  }
}
</script>

<style>

</style>
