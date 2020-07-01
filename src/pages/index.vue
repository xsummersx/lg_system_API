<template>
  <div>
    <Info></Info>
    <div class="indexBox" v-bind:style="height">
      <Top></Top>
      <div id="zhuEchart"></div>
    </div>
  </div>
</template>
<script>
import Info from '../components/Info.vue'
import Top from '../components/Top.vue'
import '../assets/css/index.css'
import echarts from 'echarts'
export default {
  name: 'index',
  //钩子函数
  data () {
    return {
      height: {
        height: ''
      },
    }
  },
  mounted () {
    this.init()
    this.myEcharts()
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
    myEcharts () {
      let myChart = echarts.init(document.getElementById('zhuEchart'))
      let option = {
        color: ['#f44'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '每月花费',
            type: 'bar',
            barWidth: '60%',
            data: [995, 666, 444, 858, 654, 236, 645, 546, 846, 225, 547, 356]
          }
        ]
      };
      myChart.setOption(option)
    }
  }
}
</script>
<style scoped>
#zhuEchart {
  width: 600px;
  height: 250px;
  border: 1px solid #e3e3e5;
  background: #fff;
  margin-left: 34px;
  margin-top: 34px;
  border-radius: 12px;
}
</style>