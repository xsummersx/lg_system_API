<template>
  <div>
    <div class="indexBox" v-bind:style="height">

      main
    </div>
  </div>
</template>
<script>

import '../assets/css/global.css'
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