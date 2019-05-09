<template>
	<div class="showAdvantageous_estate">
		<div class="tuijianheader"><img class="lunboicon" src="../../../assets/images/iconlp.png">&nbsp;&nbsp;<span class="span">楼盘优势</span>
			<div class="tab" v-if="tween.length > 0">
				<!--	轮播标签-->
				<!-- tab选项 -->
				<div>
					<!--  v-for="(item,index) in tween" :key="index" v-for="(value,key) in  item" :key="key"   {{value.title}}-->
					<a id="lunbonavs" class="swiper-pagination ys" slot="swiper-pagination">

					</a>
				</div>
			</div>
		</div>
		<!--	轮播数据tab框-->
		<div class="tabas active">
			<div>
				<div class="swiper-container ">
					<div class="swiper-wrapper">
						<swiper :options="swiperOption" ref="mySwiper" v-if="tween.length>0">
							<swiper-slide class="swiperslide_3" v-for="(item,index) in tween" :key="index" data-index="index">
								
								<div v-for="(value,key) in item" :key="key"  v-if="value.name.length!=0&&value.content.length!=0" class='swiper-containerbg'> 
									<div class="swiperslide_3_left" v-if="key%2 === 0">
										<p align="center" class="leftp" id="name" :data-idn='value.name.length'>{{value.name}}</p>
										<div class="swiperslide_3_left_content" v-html="value.content" id="content" :data-idc='value.content.length'>{{value.content}}</div>
										<div class="swiperslide_3_left_contentimg" v-if="value.name.length!=0&&value.content.length!=0"><img :src="value.image"></div>
										<div class="swiperslide_3_left_contentimg"><img :src="value.image"></div>

									</div>
									<div class="swiperslide_3_right" v-if="key%2!== 0">
										<p align="center" class="rightp" id="name" :data-idn='value.name.length'>{{value.name}}</p>
										<div class="swiperslide_3_right_content" v-html="value.content" id="content" :data-idc='value.content.length'>{{value.content}}</div>
										<div class="swiperslide_3_right_contentimg"><img :src="value.image"></div>
									</div>
								</div>
						

								<div v-for="(value,key) in item" :key="key" class='swiper-containerbg_1' v-else>
									<div class="swiperslide_3_left" v-if="key%2 === 0">
										
										<div  class="swiperslide_3_left_tween"><img :src="value.image"></div>
									</div>
									<div class="swiperslide_3_right" v-if="key%2 !== 0">
										
										<div class="swiperslide_3_right_tween"><img :src="value.image"></div>
									</div>
								</div>
							</swiper-slide>
						</swiper>
					</div>
					<div class="swiper-button-prev swiper-button-prev-swiperOption  swiper-button-white"></div>
					<div class="swiper-button-next swiper-button-next-swiperOption swiper-button-white"></div>
				</div>
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
		name: 'app',
		data() {
			const self = this
			return {
				id: this.$route.params.id,
				tween: [],
				tween_index: 0,
				swiperOption: {
					observer: true, //修改swiper自己或子元素时，自动初始化swiper
					observeParents: true, //修改swiper的父元素时，自动初始化swiper
					speed: 1000,
					effect: 'fade',
					loop: true,
					// autoplay: true,
					autoplayDisableOnInteraction: false,
					pagination: {
						el: '.ys',
						clickable: true,
						renderBullet: (index, className) => {
							let text = this.tween[index][0].title;
							let text2 = this.tween[index][1].title;
						
							if (text==text2) {
								return '<span class="' + className + '">' + text + '</span>';
							} else {
								return '<span class="' + className + '">' + text + '  /  ' + text2 + '</span>';

							}
						},
					},
					preventLinksPropagation: false, // 阻止点击事件冒泡
					navigation: {
						nextEl: '.swiper-button-next-swiperOption',
						prevEl: '.swiper-button-prev-swiperOption',
					},
				},
			}
		},

		created() {
			this.buildingTween();
		},

		methods: {
			//获取推文信息
			buildingTween() {
				this.axios.get('/admin/' + this.id + '/tween',{
                    params:{
                        'preview':this.$route.query.preview,
                    }
                }).then(res => {
					this.tween = res.data; //请求出来的楼盘数据
					//console.log(res.data);
				}).catch(function(error) {
					//console.log(error);
				})
			},

			changeTweenIndex(e) {
				return function(index) {
					this.tween_index = index;
				};
			},

		},
		components: {
			swiper,
			swiperSlide,
		},
	}
</script>

<style>
	/*必须每个写一次*/

	.el-header {
		height: 0px !important;
		margin-bottom: 0 !important;
	}

	/*    优势楼盘*/

	.showAdvantageous_estate {
		width: 1200px;
		height: 815px;
		margin: 0 auto;
		overflow: hidden;
		position: relative;
	}

	.showAdvantageous_estate .tuijianheader {
		width: 100%;
		text-align: left;
		height: 70px;
		line-height: 74px;
	}

	.ys {
		width: 70%;
	}

	.ys .swiper-pagination-bullet {
		width: 40px;
		height: 8px;
		display: inline;
		border-radius: 0%;
		color: #999999;

		margin-top: 2px;
		margin-left: 3em;
		text-align: left;
		background: white;
		opacity: 1;
	}

	.ys .swiper-pagination-bullet-active {
		opacity: 1;
		color: #ff4a59;
		background: white;
		font-weight: bold;
		padding: 8px 0px;
		border-bottom: 2px red solid;

	}

	.showAdvantageous_estate .tuijianheader .span {
		font-size: 20px;
		color: #222222;
		font-weight: 500;
		float: left;
		margin-left: 5px;
	}

	.showAdvantageous_estate .tuijianheader .lunboicon {
		width: 32px;
		height: 33px;
		float: left;
		display: inline-block;
		margin: 1.25% 0 0 0;
		vertical-align: middle
	}

	.showAdvantageous_estate .tuijianheader .tuijianmore {
		float: right;
		color: #777777;
		font-size: 0.6rem;
	}


	.showAdvantageous_estate .tuijianheader .tab {
		float: left;
		color: #777777;
		margin-left: 0px;
		height: 45px;
		margin-top: 1px;

	}

	.showAdvantageous_estate .tabas {
		display: none;
		width: 100%;
		overflow: hidden;
		/* -moz-box-shadow: 0px 0px 5px #ADADAD;
		-webkit-box-shadow: 0px 0px 5px #ADADAD;
		box-shadow: 0px 0px px #ADADAD;
		border: 1px #ebebeb solid; */
	}

	.showAdvantageous_estate .tabas .swiper-container {
		margin: 0 auto;
		position: relative;
		overflow: hidden;
		list-style: none;
		padding: 0;
		width: 100% !important;
		z-index: 1;
	}

	.showAdvantageous_estate .tabas  .swiperslide_3  .swiper-containerbg {
		background: url(../../../assets/images/shu.jpg);
		background-size:cover;
		overflow: hidden;
		width: 1200px;
		height: auto;

	}
.showAdvantageous_estate .tabas  .swiperslide_3  .swiper-containerbg_1 {
		background: url(../../../assets/images/shu_1.jpg);
		background-size:cover;
		overflow: hidden;
		width: 1200px;
		height: auto;

	}
	.showAdvantageous_estate .tabas .swiperslide_3 {
		width: 100% !important;
		height: 720px;
		overflow: hidden;
	}

	.showAdvantageous_estate .tabas .swiper-container-fade .swiper-slide {
		opacity: 0 !important;
	}

	.showAdvantageous_estate .tabas .swiper-container-fade .swiper-slide-active {
		opacity: 1 !important;
	}

	/* .showAdvantageous_estate .tabas .swiper-slide-active{
	   -webkit-transition: all 1s ease 0s;
	 -moz-transition: all 1s ease 0s;
	 -ms-transition: all 1s ease 0s;
	 -o-transition: all 1s ease 0s;
	 transition: all 1s ease 0s;
} */
	.showAdvantageous_estate .tabas .swiperslide_3 .swiperslide_3_left {
		width: 50%;
		float: left;
		height: 720px;
		background-size: 100% 100%;
	}

	.showAdvantageous_estate .tabas .swiperslide_3 .swiperslide_3_left .leftp {
		width: 100%;
		height: 100px;
		line-height: 115px;
		font-size: 1.7rem;
		color: #ff4a59;
	}

	.showAdvantageous_estate .tabas .swiperslide_3 .swiperslide_3_left .swiperslide_3_left_content {
		width: 75%;
		height: auto;
		margin: 15px auto;
		font-size: 16px;
		font-size: #333333;
		line-height: 33px;
	}

	.showAdvantageous_estate .tabas .swiperslide_3 .swiperslide_3_left .swiperslide_3_left_contentimg {
		width: 448px;
		height: 336px;
		left: 7.8%;
		position: absolute;
		bottom: 25px;
	}

	.showAdvantageous_estate .tabas .swiperslide_3 .swiperslide_3_left .swiperslide_3_left_contentimg img {
		width: 100%;
		height: 100%;
	}

	/* v-else=type=2*/
	.showAdvantageous_estate .tabas .swiperslide_3 .swiperslide_3_left .swiperslide_3_left_tween {
	width: 467px;
	height: 684px;
	min-height:500px;
	position: absolute;
	top: 20px;
	left: 6%;
	}


	.showAdvantageous_estate .tabas .swiperslide_3 .swiperslide_3_right {
		width: 50%;
		float: right;
		height: 720px;
		-webkit-transition: all 1s ease 0s;
		-moz-transition: all 1s ease 0s;
		-ms-transition: all 1s ease 0s;
		-o-transition: all 1s ease 0s;
		transition: all 1s ease 0s;
		background-size: 100% 100%;
		overflow: hidden;
	}

	.showAdvantageous_estate .tabas .swiperslide_3 .swiperslide_3_right .rightp {
		width: 50%;
		height: 100px;
		
		font-size: 1.7rem;
		color: #ff4a59;
		position: absolute;
		top: 40px;
	}

	.showAdvantageous_estate .tabas .swiperslide_3 .swiperslide_3_right .swiperslide_3_right_content {
		width: 50%;
		height: auto;
		margin: 15px auto;
		font-size: 16px;
		font-size: #333333;
		line-height: 33px;
		position: absolute;
		top: 95px;
	}

	.showAdvantageous_estate .tabas .swiperslide_3 .swiperslide_3_right .swiperslide_3_right_contentimg {
		width: 448px;
		height: 336px;
		right: 6%;
		position: absolute;
		bottom: 25px;
	}

	.showAdvantageous_estate .tabas .swiperslide_3 .swiperslide_3_right .swiperslide_3_right_contentimg img {
		width: 100%;
		height: 100%;
	}

	.showAdvantageous_estate .tabas .swiperslide_3 img {
		width: 100%;
		height: 100%;
	}

	.showAdvantageous_estate .tabas .swiperslide_3 .swiperslide_3_right .swiperslide_3_right_tween {
		width: 467px;
		height: 684px;
		position: absolute;
		top: 20px;
		right: 6%;
	}

	.showAdvantageous_estate .tabas .swiper-button-prev {

		position: absolute;
		top: 50% !important;
		width: 40px;
		border-radius: 50%;
		height: 40px;
		margin-top: -22px;
		z-index: 10;
		background-color: #222222;
		opacity: 0.7;
		left: 2%;
		cursor: pointer;
		background-size: 22px 22px;
		background-position: center;
		background-repeat: no-repeat;

	}

	.showAdvantageous_estate .tabas .swiper-button-next {
		position: absolute;
		top: 50% !important;
		width: 40px;
		border-radius: 50%;
		height: 40px;
		margin-top: -22px;
		z-index: 10;
		right: 2%;
		background-color: #222222;
		opacity: 0.7;
		cursor: pointer;
		background-size: 22px 22px;
		background-position: center;
		background-repeat: no-repeat;
	}

	.showAdvantageous_estate .tabas.active {
		display: block;
	}


	.showAdvantageous_estate .tab #lunbonavs {

		text-align: left;
		color: #555555;
		margin-left: 45px;

	}

	.showAdvantageous_estate .tab #lunbonavs.active {

		font-weight: bold;
		color: #ff4a59;
		border-bottom: 3px #ff4a59 solid;
	}
</style>
