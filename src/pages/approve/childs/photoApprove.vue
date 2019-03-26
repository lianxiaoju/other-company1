<template>
	<div class="photo">
		<MyHeader title="拍照认证" back="true" @back='goback()'></MyHeader>

		<!--<input type="file" id="picFile" accept="image/x-png,image/jpeg" @change="readFile()" ref="testipt" />
		<div>aaaa</div>-->

		<div class="topside">
			<div class="left common">
				<p>身份证正面</p>
				<div class="wrapper">
					<input type="file" accept="image/x-png,image/jpeg" @change="readFile('ida')" ref="ida" />
					<img ref="idaImg" />
				</div>
			</div>
			<div class="right common">
				<p>身份证反面</p>
				<div class="wrapper">
					<input type="file" accept="image/x-png,image/jpeg" @change="readFile('idb')" ref="idb" />
					<img ref="idbImg" />
				</div>
			</div>
		</div>
		<div class="notice">
			<p>身份证正反照片拍摄须知</p>
			<img src="./img/photo-example-8.png" />
		</div>
		<div class="bottomside">
			<p>请上传您的手持身份证照片</p>
			<div class="wrapper">
				<input type="file" accept="image/x-png,image/jpeg" @change="readFile('idc')" ref="idc" />
				<img ref="idcImg"/>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import MyHeader from '../../../components/MyHeader'
	export default {
		computed: {

		},
		data() {
			return {
				idPic: [{
					name: 'ida',
					refIpt: 'ida',
					ref: 'idaImg',
					index: 1,
					dataPic: ''
				},{
					name: 'idb',
					refIpt: 'idb',
					ref: 'idbImg',
					index: 2,
					dataPic: ''
				},{
					name: 'idc',
					refIpt: 'idc',
					ref: 'idcImg',
					index: 3,
					dataPic: ''
				}]
			}
		},
		methods: {
			setSrc() {
				let _this = this
				this.$nextTick(() => {
					//console.log(_this.$refs)
					_this.idPic.forEach((item, index) => {
						console.log(item)
						//console.log(item.dataPic == '321' ? '' : item.dataPic)
						_this.$refs[item.ref].src = item.dataPic
					})
				})
			},
			goback() {
				this.$router.go(-1)
			},
			readFile(name) {
				let _this = this
				this.$nextTick(() => {
					let _item;
					let _data;
					let reader = new FileReader();
					this.idPic.forEach((item, index) => {
						if(name == item.name) _item = item
					})
					let file = this.$refs[_item.refIpt].files[0];
					reader.readAsDataURL(file);
					//判断类型是不是图片  
					if(!/image\/\w+/.test(file.type)) {
						alert("请确保文件为图像类型");
						return false;
					}
					reader.onload = function(e) {
						_data = reader.result; //就是base64  
						//console.log(_data)
						_this.$set(_item, 'dataPic', _data)
						_this.$refs[name+'Img'].src=_data
						return true
					}
				})
			}

		},
		components: {
			MyHeader
		},
		watch: {
			'idPic':function(){
				alert()
			},
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import '../../../assets/stylus/variable.styl'
	.photo{
		width: 100%;
		overflow: hidden;
		background:#fff;
		height:100%;
		input{
			appearance: none;
		}
		.topside{
			display:flex;
			.common{
				width: 49.5%;
				overflow:hidden;
				p{
					text-align: center;
					line-height: 40px;
					font-weight: bold;
					font-size: 12px;
				}
				.wrapper{
					width: 90%;
					padding-bottom: 52%;
					margin: auto;
					position: relative;
					background: url('./img/photo-example-1.png') 0 0 no-repeat;
					background-size: cover;
					&>input{
						width: 100%;
						height: 100%;
						position: absolute;
						left: 0;
						top: 0;
						z-index: 10;
					}
					&>img{
						width: 100%;
						position: absolute;
						left: 0;
						top: 0;
					}
				}
			}
		}
		.notice{
			width: 100%;
			padding: 20px 0px;
			p{
				width: 100%;
				text-align: center;
				font-size: 12px;
				color: $font_gray;
				padding: 10px 0;
			}
			img{
				width: 90%;
				margin: auto;
				display: block;
			}
		}
		.bottomside{
			width: 100%;
			p{
				width: 100%;
				text-align: center;
				line-height: 50px;
				font-weight: bold;
				font-size: 12px;
			}
			.wrapper{
				width: 90%;
				padding-bottom: 50%;
				margin: auto;
				background: url('./img/photo-example-7.png') 0 0 no-repeat;
				background-size: cover;
				position: relative;
				overflow: hidden;
				&>input{
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					z-index: 10;
				}
				&>img{
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
				}
			}
		}
	}
		
</style>