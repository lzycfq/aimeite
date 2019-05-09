<template>
  <!-- 过渡动画 -->
  <transition name="fades">
    <div class="img-views" @click="bigImgs">
      <!-- 遮罩层 -->
      <div class="img-layers"></div>
      <div class="imgs">
        <img :src="imgSrcs">
				<img class="closes" src="../../../assets/images/close_1.png">
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    props: ['imgSrcs'],
    methods: {
      bigImgs() {
        // 发送事件
        this.$emit('clickit')
      }
    }
  }
</script>
<style scoped>
  /*动画*/
  .fades-enter-active,
  .fade-leave-active {
    transition: img 0s  0s ease;
    transform: translate3D(0%, 0, 10%);
  }

  .fades-enter,
  .fades-leave-active {
    transform: translate3D(100%, 0, 0);
  }


  /* bigimg */

  .img-views {
    position: relative;
    width: 100%;
    height: 250px;
  }

  /*遮罩层样式*/
  .img-views .img-layers {
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
  .img-views .imgs  {
  width:35vw;
	height:35vw;
 
	 border: 3px #ebebeb solid;
	
   margin: auto;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 1000;
  }
	

	.img-views .imgs  img{
	height: 100%;
	width: 100%;
	}
	.img-views .imgs .closes{
		width: 40px;
		height: 40px;
		position: absolute;
	right: -55px;
		top: 0px;
		
	}
	

</style>