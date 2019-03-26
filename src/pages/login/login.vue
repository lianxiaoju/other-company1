<template>
	<div class="loginwrapper">
		<MyHeader title="" back="true" @back="goback()"></MyHeader>
		<div class="login">
			<div class="header">
				<div class="imgWrapper">
					<img src="./img/defaul.png"/>
				</div>
				<p class="name">321</p>
			</div>
			<div class="iptBox">
				<input class="phone" placeholder="请输入手机号码" type="tel" name="phone" id="phone" v-model="phone" />
				<input class="password" placeholder="请输入密码" name="password" id="password" type="password" v-model="password"/>
				<span class="forgetPassword" @click="toPage('\/forgetPassword')">忘记密码</span>
				<div class="loginBtn">登录</div>
				<div class="register" @click="toPage('\/register')">注册</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import MyHeader from '../../components/MyHeader'
	export default{
		data(){
			return {
				phone:'',
        password:''
			}
		},
		methods:{
			goback(){
				this.$router.go(-1)
			},
			toPage(path){
				path && this.$router.push(path)
			}
		},
		components:{
			MyHeader
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import '../../assets/stylus/variable.styl'
	.loginwrapper{
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		background: $main;
	}
	.login{
		background:#fff
		width:90%;
		position: absolute;
		top: 60px;
		bottom: 30px;
		left: 50%;
		transform: translateX(-50%);
		background: #fff;
		margin: auto;
		border-radius: 10px;
		padding-top: 30%;
		.header{
			position: absolute;
			width: 100%;
			top: -30px;
			.imgWrapper{
				width: 25%;
				padding-bottom: 25%;
				background: #fff;
				position: relative;
				left: 50%;
				transform: translateX(-50%);
				background: #fff;
				border-radius: 8px;
				box-shadow: 0px 2px 10px rgba($main,.2);
				img{
					width: 100%;
					display: block;
					position: absolute;
					left: 0;
					top: 0;
				}
			}
			p{
				text-align: center;
				line-height: 30px;
			}
		}
		.iptBox{
			input{
				width: 80%;
				display: block;
				height: 40px;
				border: 1px solid rgba($border_gray,1);
				margin: auto;
				margin-bottom: 10px;
				border-radius: 20px;
				text-align: center;
				font-size: 14px;
				box-shadow: 0px 2px 10px rgba($main,.1) inset;
			}
			.forgetPassword{
				width: 40%;
				float: right;
				font-size: 12px;
				color: $font_pink;
				text-align: center;
				line-height: 20px;
			}
			.loginBtn{
				width: 80%;
				display: block;
				height: 40px;
				background: $main;
				margin: auto;
				margin-bottom: 10px;
				border-radius: 20px;
				text-align: center;
				font-size: 16px;
				font-weight: bold;
				margin-top: 14%;
				line-height: 40px;
				color: #fff;
			}
			.register{
				text-align: center;
				color: $main;
				font-size: 14px;
				line-height: 30px;
				display: block;
				width: 40%;
				margin: auto;
			}
		}
	}
</style>
