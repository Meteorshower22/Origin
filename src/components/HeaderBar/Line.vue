<template>
  <div class="size" :style="{'background-color':color,'border-color':color}"></div>
</template>

<script>
  import {Options,Vue} from "vue-class-component";
  @Options({
    props:{
      color:String
    }
  })
  export default class Line extends Vue{
    color
  }
</script>

<style scoped>
.size{
  display: block;
  height: 95%;
  width: 1px;
  border: 1px black solid;
  margin: 0 10px;
  padding: 0;
  background-color:black;
}
</style>