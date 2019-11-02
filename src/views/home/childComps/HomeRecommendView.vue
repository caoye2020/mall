<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
        <a href="item.link">
            <img :src="item.image">
            <div>{{item.title}}</div>
        </a>
    </div>
  </div>
</template>
<script>
    export default {
        components: {},
        props: {
            recommends: {
                type: Array,
                default: []
            }
        },
        data() {
            return {}
        },
        watch: {},
        computed: {},
        methods: {},
        created() {},
        mounted() {}
    }
</script>
<style>
   .recommend{
      margin-top: 50px;
      display: flex;
      width: 100%;
      padding-bottom: 15px;
      box-shadow: 0px 10px 2px #eeeeee;
   }
  .recommend-item{
     flex: 1;
     text-align: center;
  }
   .recommend-item img{
      display: inline-block;
      width: 65px;
      height: 65px;
     margin-bottom:8px;
   }
</style>
