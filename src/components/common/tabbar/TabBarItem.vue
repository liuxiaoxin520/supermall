<template>
  <div class="tab-bar-item" @click="itemBind">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      data(){
          return{

          }
      },
      computed:{
        isActive(){
          return this.$route.path.indexOf(this.path) != -1
        },
        activeStyle(){
          return this.isActive?{color:this.activeColor}:{}
        }
      },
      props:{
        path:String,
        activeColor: {
          type:String,
          default: '#f96702'
        }
      },
      methods:{
        itemBind(){
          this.$router.replace(this.path)
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{flex: 1;text-align: center;font-size: 14px;color: #666}
  .tab-bar-item img{display: block;width: 24px;height: 24px;margin: 0 auto;margin-top: 3px;margin-bottom: 2px;vertical-align: middle}
</style>
