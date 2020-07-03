<template>
  <div>
    <div class="indexBox" v-bind:style="height">
      interface
    </div>
  </div>
</template>
<script>
import '../assets/css/global.css'
export default {
  name: 'interface',
  data () {
    return {
      pageOne: '1',//导航页面
      height: {
        height: ''
      }
    }
  },
  //计算函数
  computed: {

  },
  //组件
  components: {
  },
  //钩子函数
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let h = window.innerHeight - 5 + 'px';
      this.height.height = h;
    },
  }
}
</script>