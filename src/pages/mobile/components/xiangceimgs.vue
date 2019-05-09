<template>
  <!-- 过渡动画 -->
  <transition name="fades">
    <div class="lpimg-views" @click="lpbigImgs">
      <!-- 遮罩层 -->
      <div class="lpimg-layers"></div>
      <div class="lpimgs">
        <img :src="lpimgSrcs">
				<img class="closes" src="../../../assets/images/close_1.png">
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    props: ['lpimgSrcs'],
    methods: {
      lpbigImgs() {
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

  .lpimg-views {
    position: relative;
    width: 100%;
    height: 250px;
  }

  /*遮罩层样式*/
  .lpimg-views .lpimg-layers {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  /*不限制图片大小，实现居中*/
  .lpimg-views .lpimgs  {
  width:40%;
	height: 65%;
	 border: 3px #ebebeb solid;
	
   margin: auto;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 1000;
  }
	.lpimg-views .lpimgs  img{
	height: 100%;
	width: 100%;
	}
	.lpimg-views .lpimgs .closes{
		width: 40px;
		height: 40px;
		position: absolute;
	right: -55px;
		top: 0px;
		
	}
	

</style>