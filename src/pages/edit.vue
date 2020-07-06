<template>
  <div class="indexBox">
    <div class="editBox" v-bind:style="height">
      <el-form class="form" ref="form" :model="form" label-width="80px">
        <el-form-item label="接口类型">
          <el-radio-group v-model="form.type">
            <el-radio label="get"></el-radio>
            <el-radio label="post"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="接口名称">
          <el-input v-model="form.name" placeholder="1-1 W_GetPaper" style></el-input>
        </el-form-item>
        <el-form-item label="接口描述">
          <el-input v-model="form.bak"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import '../assets/css/global.css'
export default {
  name: 'edit',
  data () {
    return {
      height: {
        height: ''
      },
      form: {
        type: 'get',
        name: '',
        bak: '',
      }
    }
  },
  mounted () {
    this.init();
  },
  components: {

  },
  computed: {

  },
  methods: {
    init () {
      let h = window.innerHeight - 135 + 'px';
      this.height.height = h;
    },
  }
}
</script>
<style scoped>
.editBox {
  margin: 20px;
  background: #fff;
  border-radius: #e6e6e6;
  border-radius: 8px;
  border: 1px solid #e3e3e5;
  overflow-y: auto;
  padding-top: 20px;
  padding-bottom: 20px;
}
.form {
  width: 90%;
}
</style>