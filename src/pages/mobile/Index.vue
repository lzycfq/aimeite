<template>
	<div style="overflow: hidden;">
		<el-col :span="24">
			<el-header>
				<app-header></app-header>
			</el-header>
			<div style="clear: both;"></div>
			<div class="el-main">
				<!--轮播-->
				<Advert></Advert>
				<!--轮播结束-->
				<!--我是分割线分割线-->
				<div style="clear: both;"></div>
				<el-col :span="24">
					<div style="background: #F1F1F1;width: 100%; height: 1rem;"></div>
				</el-col>
				<div style="clear: both;"></div>
				<!--推荐楼盘-->
				<div class="m_tuijian">
					<div class="lunboheader"><img class="lunboicon" src="../../assets/images/tuijian1.png">&nbsp;
						<span>推荐楼盘</span><label class="tjmore">
							<router-link to="/list" class="tjmore">更多
								<img src="../../assets/images/arrow_right.png">
							</router-link>
						</label>
					</div>
					<el-row :gutter="12">
						<el-col :span="12" v-for="(item, index) in hot_list" :key="index" v-if="index<6">
							<router-link :to="{ name:'detail', params: { id: item.id }}">
								<div class="grid-content">
									<my_img :src="item.image"></my_img>
									<div class="grid-content_wenzi">
										<p><label class="grid-content_header">{{item.name}}</label></p>
										<p>价格：<label class="grid-content_public">{{item.price}}</label></p>
										<p>类型：<label class="grid-content_public">{{item.propertyType}}</label></p>
										<p>户型：<label class="grid-content_public">{{item.room}}</label></p>
										<p>面积：<label class="grid-content_public">{{item.acreage}}</label></p>
										<p>位置：<label class="grid-content_public">{{item.address}}</label></p>
									</div>
									<div class="grid-content_btn">
										<button :class="tagChoose(k)" v-for="(v,k) in item.tag"><label>{{v | indexellipsis}}</label></button>
									</div>
								</div>
							</router-link>
						</el-col>
					</el-row>
				</div>

				<!--我是分割线分割线-->
				<div style="clear: both;"></div>
				<el-col :span="24">
					<div style="background: #F1F1F1;width: 100%; height: 0.5rem;"></div>
				</el-col>
				<div style="clear: both;"></div>
				<!--	优选房源-->
				<div class="m_tuijian">
					<div class="lunboheader"><img class="lunboicon" src="../../assets/images/tuijian2.png">&nbsp;<span>优选房源</span><label>
							<router-link to="/preferential-list" class="tjmore">更多<img src="../../assets/images/arrow_right.png"></router-link>
						</label></div>
					<el-row :gutter="12">
						<el-col :span="12" v-for="(item, index) in preferential_list" :key="index" v-if="index<6">
							<div class="grid-content">
								<router-link :to="{ name:'detail', params: { id: item.building_id }}">
									<my_img :src="item.image"></my_img>
									<div class="grid-content_wenzi">
										<p><label class="grid-content_header">{{item.type}},{{item.layout}},约{{item.acreage}}m²</label></p>
										<p>价格：<label class="grid-content_public">{{item.price}}</label></p>
										<p>楼盘：<label class="grid-content_public">{{item.building.name}}</label></p>
										<p>位置：<label class="grid-content_public">{{item.building.address}}</label></p>
									</div>
									<div class="grid-content_btn">
										<button :class="tagChoose(k)" v-for="(v,k) in item.characteristic"><label>{{v | indexellipsis}}</label></button>
									</div>
								</router-link>
							</div>
						</el-col>
					</el-row>
				</div>
				<!--优选房源结束-->
				<div style="clear: both;"></div>
				<webTantou></webTantou>
			</div>
		</el-col>
	</div>
</template>
<style scoped>
	.el-header {
		padding: 0 !important;
	}

	.el-main {
		display: block;
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		flex-basis: auto;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		padding: 0px !important;
	}

	.el-aside,
	.el-main {
		overflow: hidden;
		width: 100%;
		-webkit-box-sizing: border-box;
	}

	.el-footer {
		padding: 0px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		-ms-flex-negative: 0;
		flex-shrink: 0;
	}



	/*推荐楼盘*/
	.m_tuijian {
		width: 95%;
		height: auto;
		border-bottom: 0.5rem white solid;
		margin: 0 auto;
	}

	.m_tuijian .lunboheader {
		width: 100%;
		text-align: left;
		height: 3rem;
		line-height: 3rem;
		border-bottom: #EBEBEB 1px solid;
	}

	.m_tuijian .lunboheader span {
		font-size: 1.15rem;
		color: #555555;
		font-weight: 600;
	}

	.m_tuijian .lunboheader .tjmore {
		float: right;
		font-size: 13px;
		height: 2rem;
		position: relative;
		top: 1px;
		color: #888888;


	}

	.m_tuijian .lunboheader .tjmore img {
		width: 13px;
		height: 13px;
		vertical-align: text-top;
		position: relative;
		top:0.5px;

	}


	.m_tuijian .lunboheader .lunboicon {
		width: 1.5rem;
		height: 1.4rem;
		float: left;
		vertical-align: text-bottom;
		display: block;
		margin: 0;
		margin-top: 10px;

	}

	@media screen and (min-width:768px) {
		.m_tuijian .lunboheader .lunboicon {
			width: 2rem;
			height: 1.8rem;
			float: left;
			vertical-align: text-bottom;
			display: block;
			margin: 0;
			margin-top: 5px;

		}
	}

	.m_tuijian .grid-content {
		width: 100%;

		margin-top: 0.5rem;
		margin-bottom: 0.5rem;

	}

	@media screen and (min-width:768px) {
		.m_tuijian .grid-content {
			width: 100%;

			margin-top: 0.5rem;
			margin-bottom: 1.5rem;

		}
	}

	.m_tuijian .grid-content .grid-content_img {
		width: 100%;
		height: 115px;
	}

	.m_tuijian .grid-content .grid-content_wenzi {
		width: 100%;
		height: auto;
		margin: 0 auto;
		margin-bottom: 0.4rem;
	}

	.m_tuijian .grid-content .grid-content_wenzi p {
		color: #555555;
		line-height: 26px;
		overflow: hidden;
		text-align: left;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.95rem;
		letter-spacing: 0.5px;
	}

	.m_tuijian .grid-content .grid-content_wenzi p .grid-content_public {
		color: #666666;
		font-size: 0.95rem;
	}

	.m_tuijian .grid-content .grid-content_wenzi p label {
		font-size: 0.95rem;
	}

	.m_tuijian .grid-content .grid-content_wenzi p .grid-content_header {
		color: #ec2e38;
		font-size: 1.1rem;
		font-weight: 600;
	}

	.m_tuijian .grid-content .grid-content_btn {
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		text-align: left;
	}

	/*<button class="red"><label>危险按钮</label></button>
<button class="green"><label>危险按钮</label></button>
<button class="yellow"><label>危险按钮</label></button>*/
	.m_tuijian .grid-content .grid-content_btn .red {
		padding: 6px 0.5vw;
		background: #feeeee;
		border-radius: 5px;
		border: none;
		overflow: hidden;

		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.m_tuijian .grid-content .grid-content_btn .red label {
		color: #c48784;
		font-size: 12px;

		transform: scale(0.9);
		display: inline-block;

	}

	.m_tuijian .grid-content .grid-content_btn .green {

		padding: 6px 0.5vw;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		background: #e1f5ec;
		border-radius: 5px;
		margin-left: 3px;
		border: none;
	}

	.m_tuijian .grid-content .grid-content_btn .green label {
		color: #51c98b;
		font-size: 12px;
		transform: scale(0.9);
		display: inline-block;

	}

	.m_tuijian .grid-content .grid-content_btn .yellow {
		padding: 6px 0.5vw;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		background: #fff6e5;
		border-radius: 5px;
		margin-left: 3px;

		border: none;
	}

	.m_tuijian .grid-content .grid-content_btn .yellow label {
		color: #e4c181;
		font-size: 12px;
		transform: scale(0.9);
		display: inline-block;
	}

	.el-footer {
		height: 0px !important;
	}
</style>
<script>
	
	const Header =()=> import('../mobile/components/Header');
	const Advert =()=> import('../mobile/components/Advert');
	const webTantou =()=> import('../mobile/components/webTantou');
	import 'swiper/dist/css/swiper.css';
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper';
	//import My_img from "../../components/common/MyImg";
	const My_img =()=> import('../../components/common/MyImg');
     
	export default {
		name: 'index',
		filters: {
// 			    indexellipsis(value) {
// 			      if (!value) return ''
// 			      if (value.length > 5) {
// 			        return value.slice(0,5) + '...'
// 			      }
// 			      return value
// 			    }
			  
			indexellipsis(value) {
				let screenWidth = document.body.clientWidth;
					    if (screenWidth <= '375') { 
						if (!value) return ''
						if (value.length > 5) {
							return value.slice(0, 5) + '...'
						}
						return value
						} else if (screenWidth <= '414') {
							if (!value) return ''
							if (value.length > 6) {
								return value.slice(0, 6) + '...'
							}
							return value
					} else if (screenWidth <= '520') {
						if (!value) return ''
						if (value.length > 7) {
							return value.slice(0, 7) + '...'
						}
						return value
				} else if (screenWidth <= '620') {
							if (!value) return ''
							if (value.length > 8) {
								return value.slice(0, 8) + '...'
					}
					return value
					} else if (screenWidth <= '768') {
						if (!value) return ''
						if (value.length > 9) {
							return value.slice(0, 9) + '...'
						}
						return value
					} else if (screenWidth <= '1920') {
				        if (!value) return ''
						if (value.length > 12) {
							return value.slice(0, 12) + '...'
						}
						return value
					}
				

			},
		},
		data() {
			return {
				hotbtn1: false,
				hotbtn2: false,
				hotbtn3: false,
				youxuanbtn1: false,
				youxuanbtn2: false,
				youxuanbtn3: false,
				bannerList: [],
				hot_list: [],
				preferential_list: [],
				//轮播js
			}
		},
		//跳转到对应详情页面
		created() {
			this.hotList();
			this.preferentialList();

		},
		methods: {
			hotList() { //正确
				this.axios.get('/admin/hot').then(res => {
					this.hot_list = res.data //请求出来的推荐楼盘数据
				
				}).catch(function(error) {
					console.log(error);
				})
			},
			preferentialList() { //正确
				this.axios.get('/admin/preferential').then(res => {
					this.preferential_list = res.data //请求出来的优选房源数据
				}).catch(function(error) {
					console.log(error);
				})
			},

		},
		computed: {
			tagChoose() {
				return function(key) {
					if (key === 0) {
						return 'red';
					} else if (key === 1) {
						return 'green';
					} else {
						return 'yellow';
					}
				}
			},





		},
		components: {
			My_img,
			'app-header': Header,
			Advert,
			swiper,
			swiperSlide,
			webTantou
		},

		//		控制头尾部分是否显示
		beforeCreate: function() {
			this.$emit('public_footer', false);
		},
	}
</script>
