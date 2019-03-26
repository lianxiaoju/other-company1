<template>
    <div class="header">
      <div class="leftSideWrapper" v-on:click="leftClick()" v-show="canBack">
        <slot name="leftSide">
          <!--默认为返回-->
          <!--如果不需要goback，可以传递一个空的span-->
          <span class="goback" @click="leftClick()" v-show="canBack"></span>
        </slot>
      </div>
      <p>{{title}}</p>
      <div class="rightSideWrapper">
        <slot name="rightSide">

        </slot>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      canBack:false,
    }
  },
  props:{
    title:String,
    back:String,
  },
  method:{
    goback(){
      this.$router.back()
    }
  },
  created(){
    if (this.$props.back == 'true'){
      this.canBack = true;
    }else {
      this.canBack = false
    }
  },
  methods:{
    leftClick () {
      if(this.canBack){
        this.$emit('back')
      }
//    this.goback()
    }
  }
}
</script>
<style lang="scss" scoped="scoped">
  @import '../assets/scss/variable/base.scss';
  .header{
  height: 40px;
    width:100%;
  background: $main;
    position: relative;
    left: 0px;
    top:0px;
    width:100%;
    .leftSideWrapper{
      width:40px;
      height: 40px;
      position: absolute;
      left: 0;
      top:0;
      .goback{
        display: block;
        width:10px;
        height: 18px;
        background: url("./img/goback.png") 0 0 no-repeat;
        background-size: 100% 100%;
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translate(0,-50%);
      }
    }
    p{
      line-height: 40px;
      color: #fff;
      text-align: center;
      font-size: 15px;
    }
    .rightSideWrapper{

    }
  }
</style>


