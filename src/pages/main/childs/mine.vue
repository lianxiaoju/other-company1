<template>
	<div class="mine-wrapper">
		<div class="mine-header">
			<p>个人中心</p>
			<div class="help">
				<span></span>
			</div>
		</div>
		<div class="mine-content">
			<div class="header">
				<div class="imgbox">
					<img src="./img/fakeHeader.png" />
				</div>
			</div>
			<p class="name">158****288</p>
			<ul>
				<li v-for="(item,index) in mineStaticInfo" :class="item.class" @click="linkTo(item.linkTo)">
					<span class="icon"></span>
					<p>{{item.word}}</p>
					<span class="rarr"></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				mineStaticInfo: [{
					name: 'card',
					class: 'card',
					word: '我的银行卡',
					linkTo: '/'
				}, {
					name: 'help',
					class: 'help',
					word: '帮助与反馈',
					linkTo: '/'
				}]
			}
		},
		methods: {
			linkTo(url) {
				console.log(url)
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../../assets/stylus/variable.styl'
	.mine-wrapper {
		position: relative;
	}
	
	.mine-header {
		width: 100%;
		padding-bottom: 40%;
		background: url("./img/mine-bg.png") 0 0 no-repeat;
		background-size: 100% 100%;
		position: relative;
		p {
			text-align: center;
			color: #fff;
			line-height: 38px;
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0);
			top: 10;
			font-size: 15px;
		}
		.help {
			width: 40px;
			height: 40px;
			position: absolute;
			right: 0px;
			top: 0;
			span {
				display: block;
				width: 24px;
				height: 24px;
				background: url("./img/mine-setting.png") 0 0 no-repeat;
				background-size: 100% 100%;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}
	
	.mine-content {
		position: relative;
		width: 90%;
		background: #fff;
		margin: auto;
		margin-top: -30px;
		border-radius: 10px;
		padding-top: 15px;
		.header{
			position: absolute;
			left:10px;
			top: -50px;
			border-radius: 50%;
			background: #fff;
			width: 90px;
			height:90px;
			.imgbox{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
				width: 80px;
				height: 80px;
				border-radius: 50%;
				overflow: hidden;
				img{
					width: 100%;
				}
			}
		}
		&>p{
			padding-left: 90px;
			color: #323232;
			font-size: 14px;
		}
		ul{
			overflow: hidden;
			padding-top: 10px;
			li{
				height: 40px;
				padding-left: 40px;
				position: relative;
				font-size: 13px;
				color: $font_black;
				.icon{
					position: absolute;
					left: 10px;
					width: 20px;
					height: 20px;
					display: block;
					background: #fff;
					top: 9px;
				}
				&>p{
					line-height: 40px;
				}
				.rarr{
					position: absolute;
					right: 10px;
					width: 8px;
					height: 12px;
					display: block;
					background:url(./img/mine-rarr.png) 0 0 no-repeat !important;
					background-size: cover !important;
					top: 50%;
					transform: translateY(-50%);
				}
				&:after{
					content: '';
					display: block;
					position: absolute;
					left: 40px;
					bottom: 0;
					height: 1px;
					width: 500px;
					background: #ececec;
				}
				&:last-of-type:after{
					background: none !important;
				}
			}
			.help{
				.icon{
					background:url(./img/mine-icon1.png) 0 0 no-repeat !important;
					background-size: cover !important;
				}
			}
			.card{
				.icon{
					background:url(./img/mine-icon2.png) 0 0 no-repeat !important;
					background-size: cover !important;
				}
			}
		}
	}
</style>