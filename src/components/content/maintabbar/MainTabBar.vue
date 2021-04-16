<template>
    <div>
      <tab-bar>
        <tab-bar-item path="/home" activeColor="#f96702">
          <img src="~assets/img/tabbar/index.png" slot = 'item-icon'>
          <img src="~assets/img/tabbar/indexChoosed.png" slot = 'item-icon-active'>
          <div slot = 'item-text'>首页</div>
        </tab-bar-item>
        <tab-bar-item path="/flashpay" activeColor="#f96702">
          <img src="~assets/img/tabbar/flashPay.png" slot = 'item-icon'>
          <img src="~assets/img/tabbar/flashPayChoosed.png" slot = 'item-icon-active'>
          <div slot = 'item-text'>分类</div>
        </tab-bar-item>
        <tab-bar-item path="/navigation" activeColor="#f96702">
          <img src="~assets/img/tabbar/navigation.png" slot = 'item-icon'>
          <img src="~assets/img/tabbar/navigationChoosed.png" slot = 'item-icon-active'>
          <div slot = 'item-text'>购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="#f96702">
          <img src="~assets/img/tabbar/customerCenter.png" slot = 'item-icon'>
          <img src="~assets/img/tabbar/customerCenterChoosed.png" slot = 'item-icon-active'>
          <div slot = 'item-text'>我的</div>
        </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
    export default {
      name: "MainTabBar",
      components:{
        TabBar,TabBarItem
      }
    }
</script>

<style scoped>

</style>
