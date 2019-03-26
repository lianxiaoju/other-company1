<template>
	<div>
		<div class="wrapper">
			<router-view></router-view>
		</div>
		<div class="footer">
			<ul>
				<li v-for="(item,index) in footerNav" @click="footerNavClick(item,index)">
					<!--<span :style="{background:item.isCurr?item.indexIcon:item.icon}"></span>-->
          <span v-bind:class="[item.isCurr?item.indexIcon:item.icon,'icon']"></span>
					<p v-bind:class="[item.isCurr?'p_index':'','p']">{{item.name}}</p>
				</li>
			</ul>
      <span class="footer_slider" ref="footerSlider"></span>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		data(){
			return {
				footerNav:[                                                                                                                                                         
					{
						name:'贷款',
						path:'/main/home',
						icon:'home',
            indexIcon:'home_index',
						isCurr:true,
					},{
						name:'还款',
						path:'/main/repayment',
						icon:'repayment',
            indexIcon:'repayment_index',
						isCurr:false
					},{
						name:'我的',
						path:'/main/mine',
						icon:'mine',
            indexIcon:'mine_index',
						isCurr:false
					}
				]
			}
		},
    methods:{
      footerNavClick(item,index){
        this.footerNavAnimate(index)
        this.toNavUrl(item)
      },
      footerNavAnimate(currIndex){
        let _this = this
        this.footerNav.forEach((item,index)=>{
          item.isCurr = false
          if(currIndex == index)item.isCurr = true
        })
        let _left = currIndex*33+16.5
        _this.$refs.footerSlider.style.left = _left + '%'

      },
      toNavUrl(item){
      	this.$router.push(item.path)
      }
    }
	}
</script>

<style lang="scss">
	.footer{
    width:100%;
    height: 43px;
    position: absolute;
    bottom: 0px;
    left:0px;
    box-shadow: 0 -2px 2px 0 rgba(0,0,0,.05);
    .footer_slider{
      width:20px;
      height: 20px;
      background: url("./img/footerSlider.png") 0 0 no-repeat;
      background-size: cover;
      position: absolute;
      top:4px;
      left: 16.5%;
      transform: translate(-50%,0);
      transition: all ease .4s;
    }
    ul{
      width:100%;
      display: flex;
      position: relative;
      padding-top: 6px;
      li{
        width:33%;
        overflow: hidden;
        font-size: 12px;
        .icon{
          width:15px;
          height: 15px;
          display: block;
          margin: auto;
          margin-bottom: 4px;
        }
        .home_index{
          background: url("./img/home_index.png") 0 0 no-repeat;
          background-size: 100% 100%;
        }
        .home{
          background: url("./img/home.png") 0 0 no-repeat;
          background-size: 100% 100%;
        }
        .repayment_index{
          background: url("./img/repayment_index.png") 0 0 no-repeat;
          background-size: 100% 100%;
        }
        .repayment{
          background: url("./img/repayment.png") 0 0 no-repeat;
          background-size: 100% 100%;
        }
        .mine_index{
          background: url("./img/home_index.png") 0 0 no-repeat;
          background-size: 100% 100%;
        }
        .mine{
          background: url("./img/home.png") 0 0 no-repeat;
          background-size: 100% 100%;
        }
        .p{
          text-align: center;
          color: #b8b8b8;
        }
        .p_index{
          color: #556984 !important;
        }
      }
    }
  }


  @keyframes silderpartmove
  {
    0% {transform:scale(1);}
    50%{transform:scale(0.7);}
    100% {transform:scale(1);}
  }
</style>
