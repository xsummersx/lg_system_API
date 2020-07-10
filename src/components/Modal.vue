<template>
  <div class="Main">
    <div class="Box">
      <slot name="addParams"></slot>
    </div>
    <div class="back" @click="close">
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data () {
    return {

    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
.Main {
  width: 100%;
  height: 100%;
  position: relative;
}
.back {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
}
.Box {
  width: 600px;
  min-height: 150px;
  z-index: 1;
  background: #fff;
  margin: 50px auto;
  position: absolute;
  border-radius: 6px;
  left: calc(50% - 300px);
  top: 15%;
  padding: 20px 15px;
}
</style>