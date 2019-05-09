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
				<li id="SubmenID16">
					<router-link to='servezhineng'>智能产品专区</router-link>
				</li>
				<li id="SubmenID17" class="on">
					<router-link to='serverzhuanmai'>专卖网络</router-link>
				</li>
				<li id="SubmenID174">
					<router-link to='servehaibao'>海报下载</router-link>
				</li>

			</ul>
			<div class="clear"></div>
		</div>
		<div class="Network">
			<figure class="mapleft"><img src="http://www.airmate-china.com/uploadfiles/image/network_map.jpg"></figure>
			<dl class="search">
				<dt>分类查询</dt>
				<el-form ref="selectform" :model="selectform" label-width="80px" @submit.native.prevent>
					<dd>
						<el-select v-model="selectform.leibie" rel="leibie"  placeholder="请选择类别">
							<el-option label="item.selectleibie" value="item.selectleibie"></el-option>
						</el-select>
					</dd>
					<dd>
						<el-select v-model="selectform.product" rel="product" placeholder="请选择产品">
							<el-option label="item.selectproduct" value="item.selectproduct"></el-option>
						</el-select>
					</dd>
					<dd>
						<el-select v-model="selectform.weizhi" rel="weizhi" placeholder="请选择位置">
							<el-option label="item.selectweizhi" value="item.selectweizhi"></el-option>
						</el-select>
					</dd>
					<dt>
						<el-button class="btn" @click="search">搜索</el-button>
						<p>我们的产品营销中国31省12,000余家商场，并远销日、韩、欧、美等世界60余国家和地区，为消费者 提供更健康优质的生活而努力。</p>
					</dt>
				</el-form>
			</dl>
			<div class="clear"></div>
		</div>
	</el-col>
</template>
<style lang="scss" scoped>
	.Network {
		margin: 0 auto;
		width: 65%;
		padding: 20px;
		border: 1px solid #eeeeee;

		overflow: hidden;

		.mapleft {
			float: left;
			width: 48%;
			overflow: hidden;
		}

		.search {
			float: right;
			height: auto;

			width:50%;
			padding-top: 30px;

			dt {
				color: #444;
				font-size: 18px;
				margin-bottom: 20px;
				display: block;
			}
		}

	}

	.Network .search dt {
		color: #444;
		font-size: 18px;
		margin-bottom: 20px;
		display: block;
	}

	.Network .search dd {
		position: relative;
		
		display: inline-block;
		margin-right: 15px;
		height: 45px;

		line-height: 45px;

		margin-bottom: 20px;


	}

	.Network .search dd select {
		opacity: 0;
		z-index: 1;
		position: absolute;
		left: 0;
		top: 0;
		border: 0px;
		height: 38px;
		line-height: 38px;
		width: 295px;


	}

	.Network .search dt {
		color: #444;
		font-size: 18px;
		margin-bottom: 20px;
		display: block;
	}

	.Network .search dt .btn {
		width: 135px;
		
		height: 38px;
		text-align: center;
		background: #005bac;
		color: #fff;
		border: none;
		margin-bottom: 50px;
		margin-top: 30px;
	}

	.Network .search dt p {
		line-height: 30px;
		color: #999;
		font-size: 14px;
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
			font-weight: bold;
			font-size: 16px;
			text-align: left;
		}

		a.active {
			font-weight: bold;
    color: #005bac;
		}
	}
</style>

<script>
	const serveheaders = () => import('../../web/compoents/serveheader');
	// 	import 'swiper/dist/css/swiper.css';
	// 	import {
	// 		swiper,
	// 		swiperSlide
	// 	} from 'vue-awesome-swiper';
	export default {

		data() {
			return {
				selectform: {
					leibie: '',
					product: '',
					weizhi: ''
				}
			}
		},
		// 		created() {
		// 			this.buildzhineng();
		// 		},
		methods: {
			search(selectform) {
				this.$refs[selectform].validate((valid) => {					
					if (valid) {
						this.axios.get('/api/Servezhuanmai',this.selectform,{
							params:{
								'leibie':this.$rels.leibie.value,
								'product':this.$rels.product.value,
								'weizhi':this.$rels.weizhi.value,
							}
						}).then(res => {
						}).catch(function(error) {

						});
						// 表单提交
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		},
		components: {
			serveheaders,
			// 			swiper,
			// 			swiperSlide,
		},
	}
</script>
