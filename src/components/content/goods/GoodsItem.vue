<template>
    <div class="goods-item">
      <img :src="goodsItem.show.img" @load="imageLoad">
      <div class="good-info">
         <p>{{goodsItem.title}}</p>
        <span class="price" >{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsItem",
        props:{
            goodsItem:{
                 type:Object,
                 default:[]
             }
        },
        methods:{
            imageLoad(){
                this.$bus.$emit('itemImageLoad')
            }
        }
    }
</script>

<style scoped>
  .goods-item{
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }
  .goods-item img{
     width: 100%;
     border-radius: 5px;
  }
  .good-info{
     font-size: 12px;
     position: absolute;
     bottom:5px;
     left: 0px;
     right: 0px;
     overflow: hidden;
     text-align: center;
  }
  .good-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .good-info .price{
      color:var(--color-high-text);
      margin-right: 20px;
  }
  .good-info .collect{
    position: relative;
  }
  .good-info .collect::before{
     content:'';
     position: absolute;
     left: -15px;
     top:-1px;
     width: 14px;
     height: 14px;
     background: url("./collect.svg") 0 0/14px 14px;
  }
</style>
