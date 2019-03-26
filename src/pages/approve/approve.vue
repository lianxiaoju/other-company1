<template>
	<div class="approve">
		<MyHeader title='认证资料' back='true' @back='goback()'></MyHeader>
		<div class="approve-header">
			
		</div>
		<div class="approve-content">
			<ul>
				<li v-for="(item,index) in approveSub" :class="[item.class,'item']" @click="toApprovePage(item.linkTo)">
					<span class="icon"></span>
					<p class="name">{{item.word}}</p>
					<p class="flag" :style="{color:item.flag?'#323232':'pink'}" v-text="item.flag?'已认证':'未认证'"></p>
				</li>
			</ul>
		</div>
		<div class="button" :style="[{background:approveStatus=='1'?'#aaa':'#3ee5b1'}]" @click="getLimit()">
			获取信用额度
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import MyHeader from '../../components/MyHeader'
	export default{
		components:{
			MyHeader
		},
		data(){
			return{
				approveSub:[{
					name:'银行卡认证',
					word:'银行卡认证',
					class:'card',
					linkTo:'/card',
					flag:true
				},{
					name:'运营商授权',
					word:'运营商授权',
					class:'phone',
					linkTo:'/phone',
					flag:false
				},{
					name:'个人信息',
					word:'个人信息',
					class:'info',
					linkTo:'/info',
					flag:false
				},{
					name:'拍照认证',
					word:'拍照认证',
					class:'photo',
					linkTo:'/photo',
					flag:false
				},],
			}
		},
		methods:{
			goback(){
				this.$router.go(-1)
			},
			getLimit(){
				if(this.$comput.approveStatus=="1"){
					alert('cc')
				}else if(this.approveStatus=="2"){
					alert('dd')
				}
			},
			toApprovePage(link){
				//console.log(link)
				this.$router.push(link);
			}
		},
		computed:{
			approveStatus(){
				return "2"
			}//1：未认证完，2：认证完
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import '../../assets/stylus/variable.styl'
.approve-header{
	background: url("./img/approve-bg.jpg") 0 0 no-repeat;
	background-size: cover;
	width: 100%;
	padding-bottom: 25.4%;
}
.approve-content{
	position: relative;
	width: 92%;
	padding-bottom: 92%;
	margin: auto;
	margin-top: -20px;
	&>ul{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		&>li{
			position: absolute;
			width: 48%;
			padding-bottom: 56%;
			background: #fff;
			border-radius: 10px;
			box-shadow: 0 2px 5px rgba(#3ee5b1,.2);
			.icon{
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				top: 15%;
				display: block;
				width: 50%;
				padding-bottom: 50%;
			}
			.name{
				width: 100%;
				position: absolute;
				bottom:35px
				text-align: center;
			}
			.flag{
				width: 100%;
				position: absolute;
				bottom:13px;
				text-align: center;
				font-size: 12px;
			}
		}
		.card{
			&>.icon{
				background: url(./img/approve-card.png) 0 0 no-repeat;
				background-size: 100% 100%;
			}
		}
		.phone{
			&>.icon{
				background: url(./img/approve-phone.png) 0 0 no-repeat;
				background-size: 100% 100%;
			}
		}
		.photo{
			&>.icon{
				background: url(./img/approve-photo.png) 0 0 no-repeat;
				background-size: 100% 100%;
			}
		}
		.info{
			&>.icon{
				background: url(./img/approve-info.png) 0 0 no-repeat;
				background-size: 100% 100%;
			}
		}
		&>li:nth-of-type(1){
			left: 0px;
			top: 0px;
		}
		&>li:nth-of-type(2){
			left: 52%;
			top: 0px;
		}
		&>li:nth-of-type(3){
			left: 0px;
			top: 60%;
		}
		&>li:nth-of-type(4){
			left: 52%;
			top: 60%;
		}
		
	}
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
   margin-top: 80px;
}
</style>