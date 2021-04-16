<template>
    <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow: 1px 1px 2px #e5e5e5;
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
    text-align: center;
  }
</style>
