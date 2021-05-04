<template>
  <box color="lightyellow">
    更改背景板颜色
    <template v-slot:logo><img src="@/assets/img/logo/OriginLogo.png" alt="" style="width: 80%"></template>
    <template v-slot:button>
      <ButtonBox>
<!--        <Button Btncolor="#fff" Select="#000" value="选项"/>-->
<!--        <Line color="#845132"/>-->
<!--        <Button Btncolor="red" Select="#000" value="登录"/>-->
<!--        <Line color="#251252"/>-->
<!--        <Button Btncolor="green" Select="#000" value="注册"/>-->
        <el-button>选项</el-button>
        <Line color="#251252"/>
        <el-button>选项</el-button>
        <Line color="#251252"/>
        <el-button>选项</el-button>
        <Line color="#251252"/>
        <el-button class="userinfobox"><div class="userinfo"><img  src="@/assets/img/header/用户.png" type="svg" style="width: 20%;" alt="">用户</div></el-button>
      </ButtonBox>
    </template>
  </box>
</template>

<script lang="ts">
  import box from '../components/HeaderBar/Headerbox.vue'
  import ButtonBox from '../components/HeaderBar/ButtonBox.vue'
  import Line from '../components/HeaderBar/Line.vue'

  export default {
    name: "HeaderBar",
    components:{
      box,
      ButtonBox,
      Line
    }
  }
</script>

<style scoped lang="scss">
.el-button{
  flex: 2;
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: 0;
  box-shadow: -5px -8px 8px 6px lightyellow,5px -8px 8px 6px lightyellow,0 0 60px 3px lightyellow inset,0 0 60px 3px lightyellow inset;
  background-color: #eeeed0;
  color: black;
}
.userinfobox{

  flex: 3;
}
.userinfo{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>