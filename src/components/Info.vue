<template>
  <div class="infoBox" v-bind:style="height">
    <h2>接口系统
    </h2>
    <h3>
      对外提供的接口实时查询，可以反馈推送结果。
    </h3>
    <ul>
      <li class="navBox" v-for="(item,index) in InfoList" :key="index">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xxx" v-bind:href="'#icon-'+item.icon"></use>
        </svg>
        <span class="text">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import '../assets/css/components/info.css'
export default {
  name: 'Info',
  props: {

  },
  data () {
    return {
      height: {
        height: ''
      },
      InfoList: []
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      let h = window.innerHeight - 5 + 'px';
      this.height.height = h;
      this.axios.get("/json/InfoList.json").then((response) => {
        let res = response.data;
        console.log(res)
        this.InfoList = res;
      })
    }
  }
}
</script>