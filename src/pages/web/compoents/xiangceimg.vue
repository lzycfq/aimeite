<template>
  <!-- 过渡动画 -->
  <transition name="fade">
    <div class="img-view" @click="bigImg">
      <!-- 遮罩层 -->
      <div class="img-layer"></div>
      <div class="img">
        <img :src="imgSrc">
				<img class="close" src="../../../assets/images/close_1.png">
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    props: ['imgSrc'],
    methods: {
      bigImg() {
        // 发送事件
        this.$emit('clickit')
      }
    }
  }
</script>
<style scoped>
  /*动画*/
  .fade-enter-active,
  .fade-leave-active {
    transition: img 0s  0s ease;
    transform: translate3D(0%, 0, 10%);
  }

  .fade-enter,
  .fade-leave-active {
    transform: translate3D(100%, 0, 0);
  }


  /* bigimg */

  .img-view {
    position: relative;
    width: 100%;
    height: 250px;
  }

  /*遮罩层样式*/
  .img-view .img-layer {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.45);
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  /*不限制图片大小，实现居中*/
  .img-view .img  {
  width:40%;
	height: 58%;
	 border: 3px #ebebeb solid;
	
   margin: auto;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 1000;
  }
	.img-view .img  img{
	height: 100%;
	width: 100%;
	}
	.img-view .img .close{
		width: 40px;
		height: 40px;
		position: absolute;
	right: -55px;
		top: 0px;
		
	}
	

</style>