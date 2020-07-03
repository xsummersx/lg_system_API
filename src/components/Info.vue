<template>
  <div class="infoBox" v-bind:style="height">
    <el-row class="tac">
      <el-col>
        <h5>接口系统</h5>
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-menu-item v-bind:index="item.ID" v-for=" (item,itemIndex) in InfoList" :key="itemIndex"
            @click="click(item.ID)" v-bind:class="{'is-active':one == itemIndex}">
            <i v-bind:class="item.icon"></i>
            <span>{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import '../assets/css/components/info.css'
export default {
  name: 'Info',
  props: {
    'one': String
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
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    //点击事件
    click (id) {
      this.router.put({
        "path": '/' + id
      })
    }
  }
}
</script>
<style scoped>
.infoBox {
  border-right: 1px solid #e6e6e6;
}
.el-menu {
  border-right: none;
}
h5 {
  font-size: 24px;
  color: #409eff;
  text-align: center;
  border-bottom: 1px solid #409eff;
  padding-bottom: 30px;
  margin-bottom: 30px;
  margin-top: 29px;
}
</style>