<template>
  <div>
    <Info></Info>
    <Top></Top>
  </div>
</template>
<script>
import Info from '../components/Info.vue'
import Top from '../components/Top.vue'
import '../assets/css/index.css'
export default {
  name: 'index',
  //钩子函数
  mounted () {

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

  }
}
</script>