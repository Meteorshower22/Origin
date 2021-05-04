<template>
  <div class="BtnBox">
    <slot>
    </slot>
  </div>
</template>

<script>
  import {Options,Vue} from "vue-class-component";
  @Options({})
  export default class IndexPage extends Vue{}
</script>

<style scoped>
.BtnBox{
  display: inline-flex;
  margin: 0 1px;
  width: 100%;
  height: 100%;
}
</style>