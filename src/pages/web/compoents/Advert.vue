<template>
	<div class="swiperlunbo">
		<div class="lunboheader"><img class="lunboicon" src="../../../assets/images/lunboicon.png">&nbsp;&nbsp;<span>会员专区</span></div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper">
					<swiper :options="swiperOption" v-if="bannerList.length > 0">
						<swiper-slide v-for="(item, index) in bannerList" :key="index">
							<router-link :to="{ name:'detail', params: { id: item.building_id }}">
								<img class="lt" :src="item.image" />
								<div class="text" data-swiper-parallax="-300" style="text-align: left;padding-left: 15px">
									<p>{{item.building.name}}:{{item.title}}</p>
								</div>
							</router-link>
						</swiper-slide>

					</swiper>
				</div>
				<div class="swiper-button-prev swiper-button-prev-layoutSwiperOptions swiper-button-white"></div>
				<div class="swiper-button-next swiper-button-next-layoutSwiperOptions swiper-button-white"></div>
			</div>
		</div>
	</div>
</template>
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
				bannerList: [],
				//轮播js
				swiperOption: {
					initialSlide: 1,
					watchSlidesProgress: true,
					loop: true,
					preloadImages: false, //不加载所有图片
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					lazy: {
						loadPrevNext: true,
					},
					lazyLoading: true, //懒加载开启
					autoplay: {
						delay: 3000,
						stopOnLastSlide: false,
						disableOnInteraction: false,
					},
					autoplayDisableOnInteraction: true,
					slidesPerView: "auto", //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
					centeredSlides: true //<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>
				},
			}
		},
		created() {
			this.advert();
		},

		methods: {
			//轮播axios
			advert() { //正确
				var that = this;
				this.axios.get('/admin/advert').then(res => {
					that.bannerList = res.data //请求出来的轮播图数据
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
<style scoped>
	.swiperlunbo {
	    width: 1220px;
		margin: 25px auto;
		height: 580px;
		margin-bottom: 50px;
	}

	.swiperlunbo .lunboheader {
		width:100%;
		margin: 0 auto;
		text-align: left;
		height: 40px;
		line-height: 40px;
	}

	.swiperlunbo .lunboheader span {
		font-size: 1.4rem;
		color: #555555;
		font-weight: 600;
	}

	.swiperlunbo .lunboheader .lunboicon {

		float: left;
		vertical-align: text-bottom;
		display: block;
		margin: 0;
		margin-top: 0.3%;
	}

	.swiper {
		width: 100%;
		height: 550px;
		overflow: hidden;
	}

	.swiper-slide {
		width: 65%;
		height: 550px;
		border-radius: 10px;
	}

	.swiper .swiper-slide-active .text {
		position: absolute;
		bottom: 0;
		width: 98.1%;
		height: 60px;
		line-height: 60px;
		color: whitesmoke;
		font-size: 20px;
		background: #222222;
		background: rgba(0,0,0,0.45);
		text-align: center;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;

	}

	.swiper .swiper-slide-active .text p {
		font-size: 20px;
	}

	.swiper img {
		display: block;
		margin: 0 auto;
		margin-top: 3.5%;
		width: 96%;
		height: 90.625%;
		border-radius: 15px;
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
		border-radius: 15px;
		/*  -moz-box-shadow:0px 0px 10px #A1A1A1; -webkit-box-shadow:0px 0px 10px #A1A1A1; box-shadow:0px 0px 10px #A1A1A1;*/
		box-shadow: 0px 0px 8px 6px whitesmoke;
	}
</style>
