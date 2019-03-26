<template>
  <div class="home-content-banner-new" ref="scrollContent" v-on:touchstart="distoryIntval()">
    <div class="home-content-banner-wrapper" ref="scrollwrapper">
      <ul class="scroll-wrapper" ref="scrollwrapper_inside">
        <li class="scroll-item" v-for="(item,index) in bannerList" :key="index" ref="scrollitem">
          <img :src="item.titleImg" @click="goBannerPage(item.url,item.id,index)" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {BScroll} from 'cube-ui'
export default {
    name: 'swiper',
    //props: ['title', 'iconShow','pullRight','pullCB','color'],
    props:{
      bannerData:Array,
    },
    data () {
      return{
        bannerScroller : null,
        bannerList:[],
        scrollIntval:null
      }
    },
    mounted(){
        this.$nextTick(() =>{
          this.refresh();
          //console.log(this.bannerList)
        })


    },
    methods: {
      // 统计banner点击量
      goBannerPage(url,bannerId,index) {
        this.$http.post("/loansupermarket-app/platform/visitCount",{token:this.token,bannerId:index+1})
          .then(function(response){
            if(response.body.code=='000'){
              // 点击banner图片跳转到相应的渠道页面


              //如果地址存在则跳转地址，如果不存在跳产品
              if(url.indexOf('http')!=-1){
                window.location.href = url;
              }else{
                this.$router.push({ path: '/loanplatformdetail', query: { id: url, status: 2 ,index: 1} })
              }
            }
          })
      },
      initScroller(){
        //console.log(this.$props.bannerData)
        let _this = this;
        this.$refs.scrollwrapper_inside.style.width =  (_this.$refs.scrollitem.length +2 ) * 230 + 'px'
        this.bannerScroller = new BScroll(this.$refs.scrollwrapper, {
          click:true,
          scrollY:false,
          scrollX:true,
          momentum: false,
          snap:{
            loop: true,
            threshold: 0.3,
            speed: 400
          },
          momentumLimitTime:100,
        });
        let index = _this.bannerScroller.getCurrentPage().pageX;
        this.addScrollerClassByIndex(index-1);
        this.bannerScroller.on('scrollEnd',() => {
          let index = _this.bannerScroller.getCurrentPage().pageX;
          _this.addScrollerClassByIndex(index-1);
        })
        this.initIntval()
      },
      initIntval (){
        let _this = this
        this.$nextTick(() => {
          console.log("initInteval")
          _this.startIntval()
//          this.bannerScroller.on('touchEnd',function(){
//            console.log('touchstart')
//            _this.distoryIntval()
//          })
          this.bannerScroller.on('touchEnd',function(){
            console.log('touchEnd')
            _this.startIntval()
          })
        })
      },
      startIntval(){
        this.scrollIntval = setInterval(() => {
          let curPage = this.bannerScroller.getCurrentPage().pageX
          let nextPageIndex = curPage+1
          this.bannerScroller.goToPage(nextPageIndex,0,300)
        },3000)
      },
      distoryIntval(){
        let _this = this
        console.log('aa')
        if(this.scrollIntval!=null) {
          clearInterval(_this.scrollIntval)
        }
      },
      addScrollerClassByIndex(index){
        let refList = [];
        refList = this.$refs.scrollitem;
        for (let i in refList){
          refList[i].className = 'scroll-item'
        }
        refList[index].className += ' scroll_index';
      },
      refresh(){
        try {
          let _this = this;
          //console.log(this.$props.bannerData)
          this.bannerList = this.$props.bannerData
          let scrollerExtFlag = this.bannerScroller != null;//true：存在实例
          let listLengthFlag = false;
          //console.log(scrollerExtFlag+"."+listLengthFlag)

          if(scrollerExtFlag == false){
            _this.$nextTick(()=>{
              _this.initScroller()
            })
            return
          }
          if(scrollerExtFlag){
              _this.bannerScroller.refresh();
          }
          return
        } catch (e){
          console.log('hello')
        }
      }
    },
  destroyed(){
      clearInterval(this.scrollIntval)
    this.bannerScroller.destroy()
  },
    watch:{
      bannerData:function (){
        this.$nextTick(()=>{
          try {
            this.refresh();
          } catch (e){
            console.log(e)
          }
        })
      }
    }
}
</script>
<style lang="scss" scoped="true">
@import '../scss/variable/base.scss';
.home-content-banner-new{
  margin-top: 1.2rem;
  padding-top: 10px;
  background: #fff;
  width: 100%;
  height: 100px;
  overflow: hidden;
  padding-bottom: 10px;
  .home-content-banner-wrapper{
    width: 230px;
    height: 100px;
    background: #fff;
    margin:auto;
    padding-top: 16px;
    .scroll-wrapper{
      .scroll-item{
        width:180px;
        height: 68px;
        float: left;
        overflow: hidden;
        border-radius: 4px;
        box-shadow: 0 2px 5px 0px rgba(0,0,0,.2);
        transition: all .15s ease;
        margin: 0 25px;
        img{
          width:100%;
        }
      }
      .scroll_index{
        transform: scale(1.4,1.4);
      }
    }
  }
}
</style>


