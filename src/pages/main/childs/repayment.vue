<template>
	<div class="wrapper">
		<div class="repay">
			<MyHeader title='还款'></MyHeader>
			<div class="repay-nav">
				<ul>
					<li v-for="item in NavInfo" ref="navItem" @click="changeCurrNav(item.navIndex)" v-text="item.word"></li>
				</ul>
				<span class="slider" ref="slider"></span>
			</div>
			<div class="content">
				<img src="./img/repay-img.png" />
				<p>您还没有申请借款哦</p>
				<div class="button">
					申请借款
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import MyHeader from '../../../components/MyHeader'
	export default {
		components: {
			MyHeader
		},
		data(){
			return{
				currNav:1,//[1-2]
				NavInfo:[
					{
						name:'还款',
						navIndex:1,
						word:'还款'
					},
					{
						name:'历史借款',
						navIndex:2,
						word:'历史借款'
					}
				]
			}
		},
		methods:{
			changeNavSliderBar(i){
				this.scrollSlider(i)
			},
			changeCurrNav(i){
				this.currNav = i
			},
			changeNavAnimate(i){
				this.changeNavClass(i)
				this.changeNavContent(i)
				this.changeNavSliderBar(i)
			},
			changeNavClass(i){
				this.$refs.navItem.forEach((item,index) => {
					item.className = ' ';
				})
				i == this.currNav && (this.$refs.navItem[i-1].className = 'index')
			},
			changeNavContent(i){
				
			},
			changeNavHandler(){
				let i = this.currNav
				this.changeNavAnimate(i)
			},
			scrollSlider(i){
				let l = this.NavInfo.length
				let _l = (i-1)*(100/l) + (100/l)/2 -2.5
				this.$refs.slider.style.left = _l + '%'
			}
			
		},
		watch:{
			currNav:'changeNavHandler'
		},
		mounted(){
			this.changeNavAnimate(1)
		}
		
	}
</script>

<style lang="stylus" rel="text/stylus">
  @import '../../../assets/stylus/variable.styl'
  /*.repay{
    width 100%
    height 38px
    background #fff
  	.repay-nav{
  		ul{
  			
  		}width 100%
		  height 100%
		  display flex	
  			li{
 				width: 50% 				
  			}
  		}
  		
  	}
  }*/
.repay{
 width 100%
 position relative
 overflow hidden
 .repay-nav{
  width: 100%;
  height 38px;
  position: relative;
  overflow: hidden;
  background: #fff;
  ul{
   display: flex;
   li{
    width:49.5%;
    text-align: center;
    line-height: 38px;
    font-size: 12px;
   }
   .index{
    color: $main;
   }
  }
  .slider{
  	display: block;
  	width: 15px;
  	height: 4px;
  	background: url("./img/slider.png") 0 0 no-repeat;
  	background-size: 100% 100%;
  	position: absolute;
  	left: -20px;
  	bottom: 0;
  	transition: left .2s ease;
  }
 }
 .content{
  img{
  	display: block;
   width: 136px;
   margin: 50px auto;
  }
  p{
   text-align: center;
   padding-bottom: 30px;
  }
  .button{
   margin: auto;
   width: 80%;
   text-align: center;
   height: 38px;
   background: $main;
   color: #fff;
   border-radius: 19px;
   line-height: 38px;
  }
 }
}


</style>
