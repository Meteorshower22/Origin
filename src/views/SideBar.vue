<template>
  <div class="asidebox">
      <pbtn title="书本信息">
        <ibtn>选项1</ibtn>
      </pbtn>
  </div>
</template>

<script lang="ts">
  import {Options,Vue} from "vue-class-component";

  import SlideParentBtn from '@/components/SlideItem/ParentBtn.vue'
  import ItemBtn from '@/components/SlideItem/ItemBtn.vue'
  @Options({
    components:{
      pbtn:SlideParentBtn,
      ibtn:ItemBtn
    },
    methods:{
    }
  })
  export default class SideBar extends Vue{}
</script>

<style scoped lang="scss">
  @import "@/assets/css/gobal.scss";
  *{
    @extend .Unselect;
  }
.el-button[titles='2']{
  width: 100%;
  height: 5%;
  border-radius: 0;
}
  .asidebox{
    display: block;
    width: 100%;
    height: 100%;
  }
</style>