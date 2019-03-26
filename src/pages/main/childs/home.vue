<template>
	<div class="home-wrapper">
    <div class="home-header">
      <MyHeader title="借贷宝"></MyHeader>
      <div class="slider-wrapper">
	      <cube-slide @change="changePage">
	        <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
	          <a :href="item.url">
	            <img :src="item.image">
	          </a>
	        </cube-slide-item>
	      </cube-slide>
      </div>
    </div>
    <div class="home-content">
      <div class="topside">

        <div class="status-apply" v-if="currStatus == 1">
          <p class="number">{{rangeInfo.value}}<span>元</span></p>
          <div class="range">
          	<input type="range" v-model="rangeInfo.value" :max="rangeInfo.max" :min="rangeInfo.min" :step="rangeInfo.step" />
	          
          </div>
          
          <div class="rangeOfMoney">
            <span class="min">{{rangeInfo.min}}元</span>
            <span class="max">{{rangeInfo.max}}元</span>
          </div>


          <span class="day"></span>
        </div>

        <div class="status-fail" v-if="currStatus == 2">
			<img src="./img/home-fail.png" />
        </div>

        <div class="status-check" v-if="currStatus == 3">
			<img src="./img/home-check.png" />
        </div>

      </div>
      <div class="bottomside">
        <div class="button">
          <span v-text="buttonWord"></span>
        </div>
      </div>
    </div>
    <div class="alert">不向在校大学生提供贷款服务</div>
	</div>
</template>

<script type="text/ecmascript-6">
  import MyHeader from '../../../components/MyHeader'
	export default{
		components:{
      MyHeader
    },
    data() {
      return {
        currStatus:3,
        statusStaticInfo:[{
          name:'apply',
          btnWord:'立即申请',
          typeNumber:1,
          btnMethods:()=>{

          }
        },{
          name:'fail',
          btnWord:'签约失败',
          typeNumber:2,
          btnMethods:()=>{

          }
        },{
          name:'check',
          btnWord:'审核中',
          typeNumber:3,
          btnMethods:()=>{

          }
        },],
        rangeInfo:{
          max:10000,
          min:1000,
          step:1000,
          value:1000,

        },
        items: [
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
          }, {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
          }, {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
          }
        ]
      }
    },
    computed:{
      buttonWord(){
        let _this = this
        let word
        _this.statusStaticInfo.forEach(function(item,index){
          _this.currStatus == (index+1) && (function(item){word = item.btnWord})(item)
        })
        return word
      }
    },
    methods: {
      changePage(current) {
        //console.log('当前轮播图序号为:' + current)
      },
      clickHandle(item, index) {
        //console.log(item, index)
      }
    }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../assets/stylus/variable.styl'
 .home-wrapper{
	.slider-wrapper{
		position:relative;
	}
    .alert{
		font-size: 10px;
		text-align: center;
		padding-top:20px;
		position:relative;
		&:after{
			content: '';
			background: url(./img/home-alert.png) 0 0 no-repeat;
			background-size: 100% 100%;
			position: absolute;
			left: 20%;
			top: 16px;
			width: 18px;
			height: 18px;
			display: block;
		}
		
    }
 }
 .home-header {
    margin-bottom 20px
 }
  .home-content{
    width:92%;
    height:235px;
    background #fff;
    border-radius :10px;
    margin auto
    position relative
    .topside{
      height 150px
      width:100%
    }
    .status-apply{
      .day{
        width 58px
        height: 58px
        position absolute
        display: block
        background url("./img/homeside.png") 0 0 no-repeat
        background-size 100% 100%
        right: 0
        top:0
      }
      .number{
        text-align center
        line-height :75px;
        font-size 20px
        font-weight bold
        span{
        	font-size: 12px;
        	padding-left: 4px;
        }
      }
      .rangeOfMoney{
		width: 100%;
		overflow: hidden;
		line-height: 30px;
		font-size: 10px;
		color: $font_gray;
		.min{
			float: left;
			padding-left: 10px;
		}
		.max{
			float: right;
			padding-right: 10px;
		}
      }
    }
    .status-fail{
    	overflow: hidden;
		img{
			display: block;
			width: 130px;
			margin:auto;
			margin-top: 20px;
		}
    }
    .status-check{
    	overflow: hidden;
    	img{
    		display: block;
    		width: 130px;
    		margin: auto;
    		margin-top: 20px;
    	}

    }
    .bottomside{
    	width: 100%;
    	padding-top: 20px;
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
