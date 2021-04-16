<template>
    <div class="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  .tab-bar{display: flex;background-color: #f5f5f5;height: 49px;width:100%;box-shadow: 0 -1px 2px #e5e5e5;position: fixed;
  z-index: 500;bottom: 0;left: 0}
</style>
