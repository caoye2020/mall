<template>
    <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="content"><slot name="content"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
    export default {
        name: "NavBar"
    }
</script>
<style>
   .nav-bar{
       background-color: var(--color-tint);
       color: #fff;
      /* position: fixed;
       left: 0;
       right: 0;
       top:0;*/
       height: 44px;
       line-height: 44px;
       box-shadow: 0 1px 1px rgba(100,100,100,.1);
       z-index: 100;
   }
   .left,.right{
      width:60px;
   }
   .content{
      flex: 1;
      text-align: center;
   }
</style>
