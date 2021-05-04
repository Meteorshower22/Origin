<template>
  <div>
    <el-button titles='1' @click="Show = !Show">{{title}}<i :class="{'el-icon-arrow-left':!Show,'el-icon-arrow-down':Show}"/></el-button>
    <div style="overflow: hidden; box-sizing: border-box;">
      <el-collapse-transition>
        <div v-show="Show">
          <slot></slot>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
  import {Options,Vue} from "vue-class-component";

  @Options({
    props:{
      title:String
    },
    data:()=>({
      Show:false
    }),
  })
  export default class SideParentBtn extends Vue{
    title
  }
</script>

<style scoped lang="scss">
  .el-button[titles='1']{
    width: 100%;
    height: 5%;
    border-radius: 0;
  }
</style>