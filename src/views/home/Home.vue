<template>
  <div id="home">
    <NavBar class="nav-bar"><div slot="content">购物街</div></NavBar>
    <tab-control ref="tabControl2"  v-show="isTabCount"  class="tab-control"   :titles="titles" @tabClick="tabClick"></tab-control>
    <Scroll class="content" ref="scrollHome"
            :probe-type="3"
            @scroll="contentScroll"
            :pullUpLoadType="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <HomeRecommendView :recommends="recommends"></HomeRecommendView>
      <HomeFeatureView></HomeFeatureView>
      <tab-control ref="tabControl" class="tab-control" :titles="titles" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
  </div>
</template>
<script>
    import NavBar from "components/common/navbar/NavBar";
    import HomeSwiper from "./childComps/HomeSwiper";
    import HomeRecommendView from "./childComps/HomeRecommendView";
    import HomeFeatureView from "./childComps/HomeFeatureView";
    import TabControl from "../../components/content/tabControl/TabControl";
    import GoodsList from "../../components/content/goods/GoodsList";
    import Scroll from "../../components/common/scroll/Scroll";
    import BackTop  from  'components/content/backTop/BackTop';
    import {debounce} from 'common/util'

    import {getHomeMultidata,getHomeGoods} from "network/home";
    export default {
        components: {
            NavBar,
            HomeSwiper,
            HomeRecommendView,
            HomeFeatureView,
            TabControl,
            GoodsList,
            Scroll,
            BackTop
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
                currentType:'pop',
                isShowBackTop:true,
                tabOffsetTop:0,
                isTabCount:false,
                saveY:0
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
        mounted(){
            const refresh= debounce(this.$refs.scrollHome.refresh)
            //3.监听item图片加载完成
            this.$bus.$on('itemImageLoad',()=>{
                //this.$refs.scrollHome.refresh()
                refresh()
            })

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
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page+=1
                    this.$refs.scrollHome.finishPullUpss()
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
               this.$refs.tabControl2.currentIndex=index;
               this.$refs.tabControl.currentIndex=index;
            },
            backClick(){
               this.$refs.scrollHome.scrollTo(0,0,500)
            },
            contentScroll(position){
              /*  -position.y>1000?this.isShowBackTop=true:this.isShowBackTop=false*/
                  this.isShowBackTop=-position.y>1000
                //tabControl是否吸顶
                this.isTabCount=(-position.y)>this.tabOffsetTop
            },
            loadMore(){
                this.getHomeGoods(this.currentType)
            },
            swiperImageLoad(){
                this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop;
                //console.log(this.tabOffsetTop)
                if(this.tabOffsetTop<510){
                    this.tabOffsetTop=510;
                    console.log('')
                }
            }
        },
        activated() {
            this.$refs.scrollHome.scrollTo(0,this.saveY,0)
            this.$refs.scrollHome.refresh()
        },
        deactivated() {
           this.saveY=this.$refs.scrollHome.scroll.y
        }
    }
</script>
<style scoped>
  #home{
    height:100vh;
    position: relative;
  }
  #home .nav-bar{
     position: relative;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
  }
  .tab-control{
    position: relative;
    z-index: 2;
    background-color: #ffffff;
   }
/*  .content{
!*    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;*!
    height: calc(100% - 93px);
    overflow: hidden;
  }*/
</style>
