<template>
	<el-col :span="24">
		<serveheaders></serveheaders>
		<div style="clear: both;"></div>
		<div class="servezhishi">
			<router-link to="serveshouhou" class='servezhishi_a'>售后服务</router-link>
			<router-link to="servewangdian" class='servezhishi_a'>服务网点</router-link>
			<router-link to="servewenti" class='servezhishi_a '>常见问题</router-link>
			<router-link to="servelianxi" class='servezhishi_a '>客服联系</router-link>
			<router-link to="servezhongxin" class='servezhishi_a active'>下载中心</router-link>
			<router-link to="serveliuyan" class='servezhishi_a'>在线留言</router-link>
		</div>

		<div class="Submen">
			<ul class="ul">
				<li id="SubmenID15">
					<router-link to='serveruanjian'>软件下载</router-link>
				</li>
				<li id="SubmenID16" class="on">
					<router-link to='servezhineng'>智能产品专区</router-link>
				</li>
				<li id="SubmenID17">
					<router-link to='serverzhuanmai'>专卖网络</router-link>
				</li>
				<li id="SubmenID174">
					<router-link to='servehaibao'>海报下载</router-link>
				</li>

			</ul>
			<div class="clear"></div>
		</div>
		
		<div class="Intelligence_list" v-for="(item,index) in zhineng" :key="index">
			<dl class="dl1" v-if="item.type==1">
				<dt><img src="http://www.airmate-china.com/uploadfiles/image/icon/down_icon1.png">电风扇</dt>
				<dd class="dl_1_swiper">
					<swiper :options="swiperOption" ref="mySwiper">
						<swiper-slide class="swiper-slide" v-for="(item,index) in item.zhinengfirst"  :key="index">
							<router-link to='/s'>
								<img :src="item.zhinengimg" />
								<div style="clear: both;"></div>
								<p id="psb"><span id="spansb">{{item.zhinengjieshao}}</span></p>
							</router-link>
						</swiper-slide>
					</swiper>
					<div class="swiper-button-next"></div>
					<div class="swiper-button-prev"></div>
				</dd>
			</dl>
			<dl class="dl2" v-else='item.type==2'>
				<dd class="dl_2_swiper">
					<swiper :options="swiperOption" ref="mySwiper">
						<swiper-slide class="swiper-slide" v-for="(item,index) in item.zhinengtwo" :key="index">
							<router-link to='/s'>
								<img :src="item.zhinengimg" />
								<div style="clear: both;"></div>
								<p id="psb"><span id="spansb">{{item.zhinengjieshao}}</span></p>
							</router-link>
						</swiper-slide>
					</swiper>
					<div class="swiper-button-next"></div>
					<div class="swiper-button-prev"></div>
				</dd>
				<dt><img src="http://www.airmate-china.com/uploadfiles/image/icon/down_icon2.png">电风扇</dt>
			</dl>
			
		</div>
	</el-col>
</template>
<style lang="scss" scoped>
	.Intelligence_list {
		margin: 0 auto;
		width: 85%;
		height: auto;
	}
	.Intelligence_list .dl1 {
		position: relative;
		padding: 30px 0 50px 300px;
		background: #f3f3f3;
		overflow: hidden;
		margin-bottom: 30px;
	}
.Intelligence_list .dl2 {
		position: relative;
		padding: 30px 0 300px 300px;
		background: #f3f3f3;
		overflow: hidden;
		margin-bottom: 30px;
	}
	.Intelligence_list .dl1 dt {
		position: absolute;
		left: 0;
		top: 165px;
		width: 300px;
		height: 100px;
		text-align: center;
		font-size: 24px;
		color: #000;
	}
.Intelligence_list .dl2 dt {
		position: absolute;
		right: 0;
		top: 165px;
		width: 300px;
		height: 100px;
		text-align: center;
		font-size: 24px;
		color: #000;
	}

	.Intelligence_list .dl1 dt img {
		max-width: 63px;
		max-height: 63px;
		display: block;
		margin: 0 auto 16px;
	}
.Intelligence_list .dl2 dt img {
		max-width: 63px;
		max-height: 63px;
		display: block;
		margin: 0 auto 16px;
	}
	.Intelligence_list .dl_1_swiper {
		position: relative;
    
		overflow: hidden;

		.swiper-slide {
			width: 220px !important;
			height: 250px;
			background: white;
			overflow: hidden;
 
			a {
				display: inline-block;
			}
		}
	}
	.Intelligence_list .dl_2_swiper {
	position: absolute;
	left: 40px;
	   width: 80%;
	
		.swiper-slide {
			width: 220px !important;
			height: 250px;
			background: white;
			overflow: hidden;
	 
			a {
				display: inline-block;
			}
		}
	}
	@media screen and (max-width:1600px) {
		.Intelligence_list .dl_2_swiper {
		position: absolute;
		left: 40px;
		   width: 77%;
		
			.swiper-slide {
				width: 220px !important;
				height: 250px;
				background: white;
				overflow: hidden;
		 
				a {
					display: inline-block;
				}
			}
		}
	}
         .Intelligence_list .dl_1_swiper{
			 /deep/ .swiper-button-prev{
				 position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
	left: -35px;
    cursor: pointer;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
			 }
			 }
			 .Intelligence_list .dl_1_swiper{
			 		 /deep/ .swiper-button-next{
			 			 position: absolute;
			 top: 50%;
			 width: 27px;
			 height: 44px;
			 margin-top: -22px;
			 z-index: 10;
			
			 right:5px;
			 cursor: pointer;
			 background-size: 27px 44px;
			 background-position: center;
			 background-repeat: no-repeat;
			 		 }
			 		 }
					  .Intelligence_list .dl_2_swiper{
					 		 /deep/ .swiper-button-prev{
					 			 position: absolute;
					 top: 50%;
					 width: 27px;
					 height: 44px;
					 margin-top: -22px;
					 z-index: 10;
					 left: -35px;
					 cursor: pointer;
					 background-size: 27px 44px;
					 background-position: center;
					 background-repeat: no-repeat;
					 		 }
					 		 }
					 		 .Intelligence_list .dl_2_swiper{
					 		 		 /deep/ .swiper-button-next{
					 		 			 position: absolute;
					 		 top: 50%;
					 		 width: 27px;
					 		 height: 44px;
					 		 margin-top: -22px;
					 		 z-index: 10;
					 		
					 		 right:-20px;
					 		 cursor: pointer;
					 		 background-size: 27px 44px;
					 		 background-position: center;
					 		 background-repeat: no-repeat;
					 		 		 }
					 		 		 }
									 #psb{
										    color: #666;
    height: 55px;
    padding: 8px 20px;
    text-align: center;
    margin: 0;
    line-height: 55px; 
									 }
	#spansb {
    display: inline-block;
    vertical-align: middle;
    line-height: 20px;
		   
	}

	.Submen {
		text-align: center;
		padding: 20px 0 40px;
	}

	.Submen li {
		display: inline-block;
		margin: 0 30px 10px;
	}

	.Submen li a:hover,
	.Submen li.on a {
		color: #005bac;
		text-decoration: underline;
	}

	.Submen li a {
		color: #666;
		font-size: 24px;
	}

	.servezhishi {
		width: 85%;
		height: 70px;
		line-height: 70px;
		margin: 0 auto;
		border-bottom: 1px #E1E1E1 solid;

		a {
			display: inline-block;
			width: 90px;
			color: #666666;
			font-size: 16px;
			text-align: left;
			font-weight: bold;

		}

		a.active {
			font-weight: bold;
    color: #005bac;
		}
	}
</style>

<script>
	const serveheaders = () => import('../../web/compoents/serveheader');
	import 'swiper/dist/css/swiper.css';
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper';
	export default {

		data() {

			return {
				zhineng: [],
				swiperOption: {
					slidesPerView:'auto',
					spaceBetween: 45,


					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				},

			}
		},
		created() {
			this.buildzhineng();
		},
		methods: {
			buildzhineng() {
				this.axios.get('/api/buildzhineng').then(res => {
					console.log(res.data.data)
					this.zhineng = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			}
		},
		components: {
			serveheaders,
			swiper,
			swiperSlide,
		},
	}
</script>
