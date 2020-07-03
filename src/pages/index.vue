<template>
  <div>
    <Info class="infoBox" v-bind:one="pageOne"></Info>
    <div class="indexBox" v-bind:style="height">
      <Top></Top>
      main
    </div>
  </div>
</template>
<script>
import Info from '../components/Info.vue'
import Top from '../components/Top.vue'
import '../assets/css/index.css'
export default {
  name: 'index',
  data () {
    return {
      height: {
        height: ''
      },
      pageOne: '0'
    }
  },
  //钩子函数
  mounted () {
    this.init()
  },
  //计算属性
  computed: {
  },
  //组件
  components: {
    Info,
    Top
  },
  methods: {
    init () {
      let h = window.innerHeight - 5 + 'px';
      this.height.height = h;
    },
  }
}
</script>
<style scoped>
</style>