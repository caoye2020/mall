<template>
  <div id="app">
    <router-view/>
    <MainTabBar/>
  </div>
</template>

<script>
   import MainTabBar from "./components/content/mailTabBar/MainTabBar";
    export default {
      name: 'app',
      components: {
          MainTabBar
      }
    }
</script>

<style>
 @import "./assets/css/base.css";
</style>
