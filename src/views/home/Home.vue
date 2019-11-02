<template>
  <div id="home">
    <NavBar><div slot="content">购物街</div></NavBar>
    <home-swiper :banners="banners"></home-swiper>
    <HomeRecommendView :recommends="recommends"></HomeRecommendView>
    <HomeFeatureView></HomeFeatureView>
    <tab-control class="tab-control" :titles="titles" @tabClick="tabClick"></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
    import NavBar from "components/common/navbar/NavBar";
    import HomeSwiper from "./childComps/HomeSwiper";
    import HomeRecommendView from "./childComps/HomeRecommendView";
    import HomeFeatureView from "./childComps/HomeFeatureView";
    import TabControl from "../../components/content/tabControl/TabControl";
    import GoodsList from "../../components/content/goods/GoodsList";

    import {getHomeMultidata,getHomeGoods} from "network/home";
    export default {
        components: {
            NavBar,
            HomeSwiper,
            HomeRecommendView,
            HomeFeatureView,
            TabControl,
            GoodsList
        },
        data() {
            return {
                banners: [],
                recommends: [],
                titles:["流行","新款","精选"],
                goods:{
                    'pop':{page:0,list:[]},
                    'new':{page:0,list:[]},
                    'sell':{page:0,list:[]}
                },
                currentType:'pop'
            }
        },
        created() {
            //1.请求多个数据
            this.getHomeMultidata(),
            //2.请求商品数据
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
        methods:{
            getHomeMultidata(){
                getHomeMultidata().then(res => {
                    console.log(res)
                    this.banners = res.data.banner.list
                    this.recommends = res.data.recommend.list
                })
            },
            getHomeGoods(type){
                const page=this.goods[type].page+1
                getHomeGoods(type,page).then(res=>{
                    console.log(res)
                    this.goods[type].list=res.data.list/*.push(...res.data.list)*/
                    this.goods[type].page+=1;

                })
            },
            tabClick(index){
               if(index==0){
                   this.currentType='pop'
               }else if(index==1){
                   this.currentType='new'
               }else{
                   this.currentType='sell'
               }
            }
        }
    }
</script>
<style scoped>
  .tab-control{
    position: sticky;
    top: 44px;
    background-color:#ffffff;
    z-index: 100;
  }
</style>
