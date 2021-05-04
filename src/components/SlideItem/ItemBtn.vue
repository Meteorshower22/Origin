<template>
  <div class="item"><div name="1"><slot>选项1</slot></div><div name="2"><i class="el-icon-arrow-right"></i></div></div>
</template>

<script>
  import {Options,Vue} from "vue-class-component";
  @Options({
  })
  export default class Item extends Vue{}
</script>

<style scoped lang="scss">
  .item{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: orange;
    div[name="1"]{
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 5;
    }
    div[name="2"]{
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
    }
  }
</style>