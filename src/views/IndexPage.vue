<template>
  <el-container style="height: 100%">
    <el-header><HeaderBar></HeaderBar></el-header>
    <el-aside class="color" width="15%"><SideBar></SideBar></el-aside>
  </el-container>
</template>

<script lang="ts">
  import HeaderBar from "./HeaderBar.vue";
  import SideBar from './SideBar.vue'
  export default {
    components: {
      HeaderBar,
      SideBar
    }
  }
</script>

<style scoped lang="scss">
.el-header{
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}
  .color{
    padding-top: 60px;
    background-color: #ffb45f;
    height: 100%;
  }
</style>