<template>
  <TabBar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg">
      <img slot="item-icon" src="~assets/img/tabbar/cart.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </TabBar>
</template>

<script>
    import TabBar from "../../common/tabbar/TabBar"
    import TabBarItem from "../../common/tabbar/TabBarItem"

    export default {
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style>

</style>
