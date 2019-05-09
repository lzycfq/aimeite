<template>
	<!--轮播-->
	<div class="swiperlunbo">
		<div class="lunboheader"><img class="lunboicon" src="../../../assets/images/lunboicon.png">&nbsp;<span>会员专区</span></div>
		<div class="adswiper">
			<swiper :options="swiperOption" v-if="banner_list.length > 0">
				<swiper-slide v-for="(item, index) in banner_list" :key="index">
					<router-link :to="{ name:'detail', params: { id: item.building.id }}">
						<a><img class="lt" :src="item.image" /></a>
						<div class="text" data-swiper-parallax="-300" style="text-align: left;padding-left: 15px">
							<p>{{item.building.name}}:{{item.title}}</p>
						</div>
					</router-link>
				</swiper-slide>
			</swiper>
		</div>
		<div style="clear: both;"></div>
	</div>

</template>
<style scoped>
	.swiperlunbo {
		margin-top: 10px;
		width: 100%;
		position: relative;
		margin-bottom: 10px;
	}

	.swiperlunbo .lunboheader {
		width: 95%;
		margin: 0 auto;
		text-align: left;
		height: 2rem;
		line-height: 2rem;
		margin-bottom: 0.5rem;
	}

	.swiperlunbo .lunboheader span {
		font-size: 1.2rem;
		color: #555555;
		font-weight: 600;
	}

	.swiperlunbo .lunboheader .lunboicon {
		width: 1.5rem;
		height: 1.25rem;
		float: left;
		vertical-align: text-bottom;
		display: block;
		margin: 0;
		margin-top: 4px;
	}
	@media screen and (min-width:768px){
	.swiperlunbo .lunboheader .lunboicon {
		width: 2rem;
		height: 1.5rem;
		float: left;
		vertical-align: text-bottom;
		display: block;
		margin: 0;
		margin-top: 2px;
	}	
	}

	   .adswiper {
	       width: 100%;
	     height: auto;
	       overflow: hidden;
	   }
	   @media screen and (min-width:320px){
	      .adswiper .swiper-slide {
	          width: 93%;
	          height:200px;
					border-radius: 5px;

	      }
	   }
	@media screen and (min-width:375px){
	 .adswiper .swiper-slide {
	       width: 93%;
	       height:220px;  
			   border-radius: 5px;

	   }
	}
	@media screen and (min-width:414px){
	   .adswiper .swiper-slide {
	       width: 93%;
	       height:250px;      
	   }
	}
	@media screen and (min-width:415px) and (max-width:640px){
	   .adswiper .swiper-slide {
	       width: 93%;
	       height:270px;   
			  border-radius: 5px;

	   }
	}
	@media screen and (min-width:641px) and (max-width:768px){
	  .adswiper  .swiper-slide {
	       width: 93%;
	       height:320px; 
				border-radius: 5px;

	   }
	}
	@media screen and (min-width:769px){
	   .adswiper .swiper-slide {
	       width: 93%;
	       height:360px;    
			 border-radius: 5px;

	   }
	}
	.adswiper .swiper-slide-active .text{
		position: absolute;
		bottom: 0;
		width: 95.9%;
		height: 40px;
		line-height: 40px;
		color: whitesmoke;
		font-size: 20px;
		background: #222222;
		opacity: 0.8;
		text-align: center;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	
	}
	.adswiper .swiper-slide-active .text p{
		font-size: 15px;
	}
	
	   .adswiper img {
	       display: block;
	       margin: 0 auto;
	       margin-top: 3.5%;
	       width: 98%;
		   border-radius: 5px;
	       height: 90.625%;
	       border-radius: 5px;
	       vertical-align: middle;
	       -webkit-transition: all 1s ease 0s;
	       -moz-transition: all 1s ease 0s;
	       -ms-transition: all 1s ease 0s;
	       -o-transition: all 1s ease 0s;
	       transition: all 1s ease 0s;
	   }
	
	   .swiper-slide-active img {
	       margin-top: 0;
	       width: 100%;
	       height: 100%;
	       border-radius: 5px;
	       /*  -moz-box-shadow:0px 0px 10px #A1A1A1; -webkit-box-shadow:0px 0px 10px #A1A1A1; box-shadow:0px 0px 10px #A1A1A1;*/
	      
	   }
</style>

<script>
	import 'swiper/dist/css/swiper.css';
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper';
	export default {
		name: 'advert',
		data() {
			return {
				banner_list: [],
				//轮播js
				swiperOption: {
					loop: true,
					initialSlide: 1,
					watchSlidesProgress: true,
					slidesPerView: 'auto',
					autoplay: {
						delay: 3000,
						stopOnLastSlide: false,
						disableOnInteraction: false,
					},
					autoplayDisableOnInteraction: true,
					slidesPerView: "auto", //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
					centeredSlides: true //<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>
				},
				methods: {
					progress: function(progress) {
						for (i = 0; i < this.slides.length; i++) {
							var slide = this.slides.eq(i);
							var slideProgress = this.slides[i].progress;
							modify = 1;
							if (Math.abs(slideProgress) > 1) {
								modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
							}
							translate = slideProgress * modify * 1050 + 'px';
							scale = 1 - Math.abs(slideProgress) / 4;
							zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
							slide.transform('translateX(' + translate + ') scale(' + scale + ')');
							slide.css('zIndex', zIndex);
							slide.css('opacity', 1);
							if (Math.abs(slideProgress) > 3) {
								slide.css('opacity', 0);
							}
						}
					},
					setTransition: function(transition) {
						for (var i = 0; i < this.slides.length; i++) {
							var slide = this.slides.eq(i)
							slide.transition(transition);
						}
					},
				}
			}
		},

		created() {
			this.bannerList();
		},
		methods: {
			bannerList() { //正确
				this.axios.get('/admin/advert').then(res => {
					this.banner_list = res.data //请求出来的推荐楼盘数据
				}).catch(function(error) {
					console.log(error);
				})
			},

		},
		components: {
			swiper,
			swiperSlide
		},
	}
</script>
