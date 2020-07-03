<template>
  <div class="TopBox">
    <svg class="topicon" aria-hidden="true">
      <use xlink:href="#icon-calendar"></use>
    </svg>
    <span class='time'>{{week}}</span>
    <span class='time'>{{timeStr}}</span>
  </div>
</template>
<script>
export default {
  name: 'Top',
  props: {
    'Time': String
  },
  data () {
    return {
      week: '',//星期
      timeStr: '',//时间
      isCollapse: true,//展开收拢
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let myDate = new Date();
      let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      this.week = weeks[myDate.getDay()]
      let yy = String(myDate.getFullYear())
      let mm = myDate.getMonth() + 1
      let dd = String(myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate())
      this.timeStr = yy + '-' + mm + '-' + dd;
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped>
.TopBox {
  width: 100%;
  background: #fff;
  height: 90px;
  border-bottom: 1px solid #e3e3e5;
}
.topicon {
  width: 28px;
  height: 28px;
  color: #409eff;
  float: left;
  margin-top: 30px;
  fill: currentColor;
  overflow: hidden;
  margin-left: 34px;
}
.time {
  line-height: 88px;
  margin-left: 15px;
  color: #409eff;
}
.btnOpen {
  float: left;
  margin-top: 24px;
  margin-left: 24px;
}
</style>