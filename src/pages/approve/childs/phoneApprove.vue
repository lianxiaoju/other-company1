<template>
	<div>
		<MyHeader title="运营商认证" back="true" @back='goback()'></MyHeader>
	</div>
</template>

<script type="text/ecmascript-6">
	import MyHeader from '../../../components/MyHeader'
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			goback(){
				this.$router.go(-1)
			}
		},
		components:{
			MyHeader
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
/*	@import '../../assets/stylus/variable.styl'*/
</style>