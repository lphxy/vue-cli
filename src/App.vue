<template>
  <div id="app">
    <!--路由挂载-->
    <router-view></router-view>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'app',
   created() {
     //初始化从缓存中取数据赋值给state的对象
      this.INIT_STATE();//由于引入了mapMutations 这句话实际是：this.$store.commit('INIT_STATE')
  },
  methods: {
      ...mapMutations([
          'INIT_STATE'
      ])
  }
}
</script>

<!--全局引入样式-->
<style lang="scss">
@import 'src/assets/css/reset';
@import 'src/assets/css/common';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
