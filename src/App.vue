<template>
  <div id="app">
    <Info class="infoBox"></Info>
    <Top></Top>
    <router-view></router-view>
  </div>
</template>
<script>
import Info from './components/Info.vue'
import Top from './components/Top.vue'
export default {
  name: 'App',
  //组件
  components: {
    Info,
    Top
  },
}
</script>
