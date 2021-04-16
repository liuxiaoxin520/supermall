<template>
    <div>
      <nav-bar class="nav-bar-bg">
        <div slot ='center'>购物街</div>
      </nav-bar>
    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  export default {
    name: "Home",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  .nav-bar-bg{
    background: var(--color-tint);
    color: white;
  }
</style>
