<template>
  <div class="row">
  <el-row :gutter="24" :style="{'background-color':color}">
    <el-col :span="4"><slot name="logo">logo</slot></el-col>
    <el-col :span="11"><div style="opacity: 0">#占位符</div></el-col>
    <el-col :span="9"><slot name="button">相关选项</slot></el-col>
  </el-row>
  </div>
</template>

<script lang="ts">
  import {Options,Vue} from "vue-class-component";
  @Options({
    props:{
      color:String
    }
  })
  export default class IndexPage extends Vue{
    color !: string
  }
</script>

<style scoped lang="scss">
.row{
  background-color: #2196f3;
  height: 100%;
  width: 100%;
}
  .el-row,.el-row>.el-col{
    height: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
</style>