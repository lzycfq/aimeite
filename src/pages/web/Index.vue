<template>
	<el-col :span="24">
		<div class="Indexall">
			<!-- //首页轮播 -->
			<div class="indexbanner">
				<swiper :options="swiperOption" ref="mySwiper" v-if="tween.length>0">
					<el-col :span='24'>
						<div class="navbar">
							<el-col :span='14'><img src="../../assets/images/aimeite/logo.png" height="29px"></el-col>
							<el-col :span='10'>
								<ul class="navul">
									<li>
										<router-link to="/" class="nav_a">首页</router-link>
									</li>
									<li @mouseenter="enter(index)">
										<router-link to="/product" class="nav_a">产品</router-link>
									</li>
									<li @mouseenter="enters(index)">
										<router-link to="/serve" class="nav_a">服务</router-link>
									</li>
									<li>
										<router-link to="/shoping" class="nav_a">网上商城</router-link>
									</li>
									<li><img class="nav_img" @click="toggle()" src="../../assets/images/aimeite/index-seach.png" width="32px"
										 height="32px"></li>
								</ul>
							</el-col>
						</div>
						<div class="productcontent" v-if="seen&&index==current">
							<div class="pcontent">
								<img src="../../assets/images/aimeite/productline.jpg" width="100%">
								<ul class="pcontent_ul">
									<router-link class="lia" to="" v-for="(item,index) in pcontent" :key="index">
										<img :src="item.pcontentimg1" class="imgblock" height="55px" /><span class="pcontent_ul_wenzi">{{item.pcontentc}}</span>
									</router-link>
								</ul>
							</div>
						</div>
						<div class="productcontents" v-if="seens&&index==currents">
							<div class="pcontent">
								<img src="../../assets/images/aimeite/productline1.jpg" width="100%">
								<div class="tableform">
									<router-link to="/index_5" href='/fwln/index_5.aspx' style="color: #111111;">售后服务</router-link>
									<router-link to="/index_6" style="color: #555555;">服务理念</router-link>
									<router-link to="/index_7" style="color: #555555;">服务政策</router-link>
									<router-link to="/index_8" style="color: #555555;">上门服务公告</router-link>
									<router-link to="/index_9" style="color: #555555;">[金卡]服务介绍</router-link>
								</div>
								<div class="tableform">
									<router-link to="/index_5" href='/fwln/index_5.aspx' style="color: #111111;">服务网点</router-link>

								</div>
								<div class="tableform">
									<router-link to="/index_5" href='/fwln/index_5.aspx' style="color: #111111;">常见问题</router-link>
									<router-link to="/index_6" style="color: #555555;">电风扇</router-link>
									<router-link to="/index_7" style="color: #555555;">电暖气</router-link>
									<router-link to="/index_8" style="color: #555555;">小家电</router-link>
									<router-link to="/index_9" style="color: #555555;">住宅电器</router-link>
								</div>
								<div class="tableform">
									<router-link to="/index_5" href='/fwln/index_5.aspx' style="color: #111111;">客服联系</router-link>
									<router-link to="/index_6" style="color: #555555;">联系我们</router-link>
									<router-link to="/index_7" style="color: #555555;">商用服务</router-link>

								</div>
								<div class="tableform">
									<router-link to="/index_5" href='/fwln/index_5.aspx' style="color: #111111;">下载中心</router-link>
									<router-link to="/index_6" style="color: #555555;">软件下载</router-link>
									<router-link to="/index_7" style="color: #555555;">智能产品专区</router-link>
									<router-link to="/index_6" style="color: #555555;">专卖网络</router-link>
									<router-link to="/index_7" style="color: #555555;">海报下载</router-link>
								</div>
								<div class="tableform">
									<router-link to="/index_5" href='/fwln/index_5.aspx' style="color: #111111;">在线留言</router-link>

								</div>
							</div>
						</div>
						<div class="searchtoggel" v-if="searchtoggel">
							<div class="searchcontent">
								<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="serachruleForm">

									<el-input placeholder="请输入搜索内容" class="input-with-select">
										<el-button slot="append" v-model="ruleForm.searchcontent" @click="seachbtn()" class="seachbtn">搜索</el-button>
									</el-input>
								</el-form>
								<i class="elform_close" @click="toggle()"></i>
							</div>
						</div>
						<i class="arrow_xia" @click="getdown()"></i>
					</el-col>
					<swiper-slide class="swiper-slide" v-for="(item,index) in tween" :key="index">
						<img :src="item.tweenimg" width="100%" @mouseleave="leave(index)" @mouseout='leaves(index)'>
					</swiper-slide>

				</swiper>
			</div>
			<!-- //首页轮播结束-->
			<el-col :span='24'>
				<div class="navcai">
					<div class="navcai_content">
						<div v-for="(item,index) in ncdata" :key="index"  class="ul" id="home">
							<router-link :to="{ name:'Product_list', params: { id: item.id }}">
								<div class="li">
									<img :src="item.ncimg" class="imgb" style="max-width: 62px;
    max-height: 76px; margin: 0 auto;" />
									<img :src="item.ncimg1" class="imgh" style="    max-width: 62px;
    max-height: 76px;  margin: 0 auto;" />
									<div style="clear: both;"></div>
									<br /><br /><br /><span>{{item.pcontentc}}</span>
								</div>
							</router-link>
						</div>
					</div>
				</div>
			</el-col>
			<!-- 	navcai结束 -->
			<div style="clear: both;"></div>
			<el-row :gutter="20" class="box1">
				<el-col :span="12" class="boxcontent" v-for="(item,index) in box1" :key="index" >
					<div class="grid-content boxcontentbg-purple" id='boxhover'>
						<router-link :to="{ name:'Product_list', params: { id: item.id }}">
							<img :src="item.boxcontent_wenzi_img">
							<div id="boxcontent_wenzi">
								<p class="boxcontent_wenzi_name">{{item.boxcontent_wenzi_name}}</p>
								<p class="boxcontent_wenzi_dsc">{{item.boxcontent_wenzi_dsc}}</p>
							</div>
						</router-link>

					</div>
				</el-col>
			</el-row>
			<!--box1结束 -->
			<div style="clear: both;"></div>
			<el-row :gutter="20" class='box2'>
				<el-col :span="8" v-for="(item,key) in box2" :key="key" v-if="key<6">
					<div class="box2gridcontent">
						<router-link to="">
							<div class="box2gridcontent_img"><img :src="item.box2gridcontent_img" /></div>
							<h2>{{item.box2gridcontent_name}}</h2>
							<p>{{item.box2gridcontent_dsc}}</p>
						</router-link>
					</div>
				</el-col>
			</el-row>
			<!-- 	box2结束 -->
			<!-- 	<button @click="isActive = !isActive">展开/折叠</button> -->
			<div class="more">
				<a @click="isActive = !isActive">加载更多</a>
			</div>
			<collapse>
				<div class="more_content" v-show="isActive">
					<el-row :gutter="20" class='box4'>
						<el-col :span="8" v-for="(item,index) in box2" :key="index">
							<div class="box4gridcontent">
								<router-link to="">
									<div class="box4gridcontent_img"><img :src="item.box2gridcontent_img" /></div>
									<h2>{{item.box2gridcontent_name}}</h2>
									<p>{{item.box2gridcontent_dsc}}</p>
								</router-link>
							</div>
						</el-col>
					</el-row>
				</div>
			</collapse>
			<div style="clear: both;"></div>
			<!-- 	加载更多结束 -->
			<el-row class="box3">
				<div class="box3_content">
					<el-col :span="6">
						<div class="box3gridcontent_1 bg-purple box3gridcontent">
						<router-link to="/list_38">品牌活动<span>了解详情&gt;</span></router-link>
						</div>
					</el-col>
					<el-col :span="6" >
						<div class="box3gridcontent_1 bg-purple box3gridcontent">
						<router-link to="/list_15">下载专区<span>了解详情&gt;</span></router-link>
						</div>
					</el-col>
					<el-col :span="6" >
						<div class="box3gridcontent_1 bg-purple box3gridcontent">
						<router-link to="/list_15">专卖网点<span>了解详情&gt;</span></router-link>
						</div>
					</el-col>
					<el-col :span="6" >
						<div class="box3gridcontent_1 bg-purple box3gridcontent">
						<router-link to="/list_15">下载专区<span>了解详情&gt;</span></router-link>
						</div>
					</el-col>
				</div>
			
			</el-row>
		</div>
		
		

	</el-col>
</template>
<style lang="scss" scoped="scoped">
	.indexbanner .searchtoggel {
		position: absolute;
		top: 0px;
		width: 100%;
		height: 80px;
		-webkit-transition: all ease-in-out .6s;
		-o-transition: all ease-in-out .6s;
		-moz-transition: all ease-in-out .6s;
		-ms-transition: all ease-in-out .6s;
		transition: all ease-in-out .6s;
		background: white;
		z-index: 1001;

		.searchcontent {
			width: 80%;
			height: 40px;
			position: relative;
			margin: 20px auto;


			.serachruleForm {
				width: 95%;
				float: left;
			}

			.elform_close {
				background: url('http://www.airmate-china.com/cn/images/close.png') no-repeat;
				width: 31px;
				height: 31px;
				float: right;
				position: relative;
				;
				top: 3px;
				cursor: pointer
			}

			.seachbtn {
				color: white;
				width: 90px;
				background: #005BAC;
			}
		}
	}



	.indexbanner .arrow_xia {
		width: 20px;
		height: 55px;
		position: absolute;
		left: 50%;
		margin-left: -10px;
		bottom: 10px;
		background: url('http://www.airmate-china.com/cn/images/banner_btn.png') no-repeat center;
		z-index: 201;
		cursor: pointer;
	}


	.swiperslide {
		text-align: center;
		font-size: 18px;
		background: #fff;

		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	.indexbanner {
		/deep/ .swiper-pagination {
			bottom: 90px;
			left: 48%;
		}
	}

	.indexbanner {
		/deep/ .swiper-pagination-bullet {
			width: 12px;
			height: 12px;
			display: inline-block;
			border-radius: 100%;
			background: #111111;


		}
	}

	.indexbanner {
		/deep/ .swiper-pagination-bullet {
			margin: 0 4px;
		}
	}

	.indexbanner {
		/deep/ .swiper-pagination-bullet-active {
			background: white;
			opacity: 1;
			width: 8px;
			height: 8px;
			position: relative;
			top: 1px;
			background-color: gainsboro;
			border: 3px white solid;
			border-radius: 50%;
		}
	}

	// 导航
	.indexbanner .navbar {
		position: absolute;
		top: 4%;
		width: 76%;
		z-index: 1001;
		height: 50px;
		left: 13%;
		overflow: hidden;
	}

	.indexbanner .navul li {
		width: 20%;
		float: left;
		position: relative;
		list-style: none;
		text-align: right;

		.nav_a {
			position: relative;
			top: 5px;

			font-size: 15px;
			color: #222222;
		}

	}

	.indexbanner {
		.productcontent {
			position: absolute;
			top: 0px;
			width: 100%;
			height: 180px;
			background: white;
			z-index: 1000;
			pointer-events: none;

			.pcontent {
				position: absolute;
				bottom: 0;
				height: 95px;
				width: 80%;
				left: 150px;

				.pcontent_ul {
					margin-top: 10px;
				}

				.lia {
					float: right;
					margin-right: 80px;
				}

				.pcontent_ul_wenzi {
					position: relative;
					color: #111111;
					top: -25px;
					left: 25px;
				}

			}

		}

		.productcontents {
			position: absolute;
			top: 0px;
			width: 100%;
			height: 268px;
			background: white;
			z-index: 1000;
			pointer-events: none;

			.pcontent {
				position: absolute;
				bottom: 48px;
				height: 135px;
				width: 75%;
				left: 15%;

				.tableform {
					width: 150px;
					height: 150px;
					float: right;

					a {
						display: block;
						line-height: 30px;
						font-size: 15px;
					}
				}
			}

		}
	}

	.navcai {
		width: 70%;
		height: 200px;
		margin: 0 auto;

		.navcai_content {
			width: 100%;
			height: 150px;
			margin-top: 40px;

			.ul .li {
				width: 16%;
				float: left;
				list-style: none;
				text-align: center;

				span {
					color: #333;
					display: inline-block;
				}


			}

			#home .imgh {
				display: none;
				padding: 0;
				margin: 0
			}

			#home:hover .imgb {
				display: none;

			}

			#home:hover .imgh {

				display: block;

			}

			#home:hover span {
				color: #005bac;
				position: relative;
				top: 3px;
			}
		}
	}

	// box1css
	.box1 {
		width: 76%;
		margin: 0 auto !important;
		height: auto;

		.grid-content {
			width: 631px;
			height: 415px;
			overflow: hidden;
			position: relative;
		}
	}

	#boxcontent_wenzi {
		position: absolute;
		bottom: 45px;
		left: 45px;
		width: 250px;
		height: 50px;

		.boxcontent_wenzi_name {
			// color:#005bac;
			color: #111111;
			font-size: 15px;
		}

		.boxcontent_wenzi_dsc {
			// color:#005bac;
			color: #888888;
			font-size: 14px;
		}
	}

	#boxhover:hover img {
		transform: scale(1.1);
		-moz-box-shadow: 0px 0px 5px #000000;
		-webkit-box-shadow: 0px 0px 5px #000000;
		box-shadow: 0px 0px 5px #000000;
		-webkit-transition: all ease-in-out .6s;
		-o-transition: all ease-in-out .6s;
		-moz-transition: all ease-in-out .6s;
		-ms-transition: all ease-in-out .6s;
		transition: all ease-in-out .6s;
		color: red;

	}

	#boxhover:hover .boxcontent_wenzi_name {
		color: #005bac;
	}

	#boxhover:hover .boxcontent_wenzi_dsc {
		color: #005bac;
	}

	// box2
	.box2 {
		width: 76%;
		margin: 0 auto !important;
		height: auto;
		margin-top: 30px !important;

		.box2gridcontent {
			margin-top: 25px;
			overflow: hidden;
			width: 100%;
		}

		.box2gridcontent_img {

			overflow: hidden;
			-webkit-transition: all ease-in-out .6s;
			-o-transition: all ease-in-out .6s;
			-moz-transition: all ease-in-out .6s;
			-ms-transition: all ease-in-out .6s;
			transition: all ease-in-out .6s;

			img {
				width: 100%;
				height: 100%;
			}
		}

		h2 {
			padding: 15px 17px 2px;
			font-weight: normal;
			font-size: 14px;
			color: #000000;

		}

		h2:hover {

			color: #0063CE;
		}

		img:hover {
			transform: scale(1.1);


			-webkit-transition: all ease-in-out .6s;
			-o-transition: all ease-in-out .6s;
			-moz-transition: all ease-in-out .6s;
			-ms-transition: all ease-in-out .6s;
			transition: all ease-in-out .6s;
		}

		p {
			font-size: 12px;
			color: #999;
			padding: 0px 17px;
			overflow: hidden;
			height: 26px;
		}
	}

	// box3
	.box3 {
		width: 100%;
		height: 200px;
		background: #f9f9f9;
		margin-top: 35px;

		.box3_content {
			width: 76%;
			margin: 0 auto;
		}

		.box3gridcontent {

			margin-top: 35px;
			height: 110px;
			padding-bottom: 3px;

			border: 1px solid #E5E5E5;
			text-align: center;
			line-height: 110px;

			span {
				display: block;
				color: #77848c;
				font-size: 12px;
			}

			a:hover {
				color: #005BAC;
			}
		}

		.box3gridcontent_1 a {
			display: inline-block;
			padding-left: 73px;
			color: rgb(66, 66, 66);
			font-size: 18px;
			font-family: 宋体;
			vertical-align: middle;
			min-height: 47px;
			line-height: 20px;
			text-align: left;
			padding-top: 10px;
			background: url('http://www.airmate-china.com/cn/images/bottom_icon1.png') left top no-repeat;
		}

		.box3gridcontent_2 a {
			display: inline-block;
			padding-left: 73px;
			color: rgb(66, 66, 66);
			font-size: 18px;
			font-family: 宋体;
			vertical-align: middle;
			min-height: 47px;
			line-height: 20px;
			text-align: left;
			padding-top: 10px;
			background: url("http://www.airmate-china.com/cn/images/bottom_icon2.png") left top no-repeat;

		}

		.box3gridcontent_3 a {
			display: inline-block;
			padding-left: 73px;
			color: rgb(66, 66, 66);
			font-size: 18px;
			font-family: 宋体;
			vertical-align: middle;
			min-height: 47px;
			line-height: 20px;
			text-align: left;
			padding-top: 10px;
			background: url('http://www.airmate-china.com/cn/images/bottom_icon3.png') left top no-repeat;
		}

		.box3gridcontent_4 a {
			display: inline-block;
			padding-left: 73px;
			color: rgb(66, 66, 66);
			font-size: 18px;
			font-family: 宋体;
			vertical-align: middle;
			min-height: 47px;
			line-height: 20px;
			text-align: left;
			padding-top: 10px;
			background: url('http://www.airmate-china.com/cn/images/bottom_icon4.png') left top no-repeat;
		}
	}

	.more {
		width: 74%;
		margin: 0 auto;
		margin-top: 70px;
		border-top: 1px solid #e4e4e4;
		text-align: center;

	}

	.more a {
		width: 103px;
		background: url('http://www.airmate-china.com/cn/images/more_icon1.png') no-repeat center top #fff;
		color: #666666;
		font-size: 12px;
		padding-top: 25px;
		margin-top: -5px;
		display: inline-block;
	}

	// box2
	.box4 {
		width: 76%;
		margin: 0 auto !important;
		height: auto;
		margin-top: 30px !important;

		.box4gridcontent {

			overflow: hidden;
			width: 100%;
		}

		.box4gridcontent_img {

			overflow: hidden;
			-webkit-transition: all ease-in-out .6s;
			-o-transition: all ease-in-out .6s;
			-moz-transition: all ease-in-out .6s;
			-ms-transition: all ease-in-out .6s;
			transition: all ease-in-out .6s;

			img {
				width: 100%;
				height: 100%;
			}
		}

		h2 {
			padding: 15px 17px 2px;
			font-weight: normal;
			font-size: 14px;
			color: #000000;

		}

		h2:hover {

			color: #0063CE;
		}

		img:hover {
			transform: scale(1.1);


			-webkit-transition: all ease-in-out .6s;
			-o-transition: all ease-in-out .6s;
			-moz-transition: all ease-in-out .6s;
			-ms-transition: all ease-in-out .6s;
			transition: all ease-in-out .6s;
		}

		p {
			font-size: 12px;
			color: #999;
			padding: 0px 17px;
			overflow: hidden;
			height: 26px;
		}
	}
</style>

<script>
	import 'swiper/dist/css/swiper.css';
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper';
	import collapse from '../../../static/js/collapse.js.js'
	export default {
		name: 'app',

		data() {

			return {
				isActive: false,
				searchtoggel: false,
				ruleForm: {
					searchcontent: ''
				},
				rules: {
					searchcontent: [{
						required: true,
						message: '请输入搜索内容',
						trigger: 'blur'
					}]

				},
				index: 0,
				seen: false,
				current: 0,
				seens: false,
				currents: 0,
				swiperOption: {
					observer: true, //修改swiper自己或子元素时，自动初始化swiper
					observeParents: true, //修改swiper的父元素时，自动初始化swiper
					speed: 3000,
					effect: 'fade',
					autoplay: true,
					autoplayDisableOnInteraction: false,
					pagination: {
						el: '.swiper-pagination',
					},
					preventLinksPropagation: false, // 阻止点击事件冒泡

				},
				tween: [],
				pcontent: [],
				ncdata: [],
				box1: [],
				box2: []
			}
		},
		created() {
			this.buildtween();
			this.buildpcontent();
			this.buildncdata();
			this.buildbox1();
			this.buildbox2();

		},

		methods: {


			buildtween() {
				this.axios.get('/api/tween').then(res => {
					this.tween = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildpcontent() {
				this.axios.get('/api/buildpcontent').then(res => {
					this.pcontent = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildncdata() {
				this.axios.get('/api/buildncdata').then(res => {
					this.ncdata = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildbox1() {
				this.axios.get('/api/buildbox1').then(res => {
					this.box1 = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildbox2() {
				this.axios.get('/api/buildbox2').then(res => {
					this.box2 = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			},
			enter(index) {
				this.seen = true;
				this.current = index;
			},
			leave() {

				this.seen = false;
				this.current = index;
			},
			enters(index) {
				this.seens = true;
				this.currents = index;
			},
			leaves() {

				this.seens = false;
				this.currents = index;
			},
			getdown() {
				// 	document.body.animate({scrollTop:925},500);
				// 	 document.documentElement.animate({scrollTop:925},500);
				document.body.scrollTop = 950
				document.documentElement.scrollTop = 950
			},
			toggle() {

				this.searchtoggel = !this.searchtoggel
			},
			//头部搜索
			//买房咨询
			seachbtn(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {

							},
						}).then(res => {
							if (res.data.success) {
								this.house_consultation = false;
							}
							alert(res.data.message);

						}).catch(function(error) {
							console.log(error);
						});
						// 表单提交
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}

		},
		// 			  computed: {
		//                 reverseData() {
		//                     return this.list.reverse();
		//                 }  
		//  	},
		components: {
			swiper,
			swiperSlide,
			collapse
		},

	}
</script>
