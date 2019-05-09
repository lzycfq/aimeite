<template>
	<el-col :span="24">
		<div class="Indexall">
			<!-- //首页轮播 -->
			<div class="indexbanner">
				<el-col :span='24'>
					<div class="navbar">
						<el-col :span='14'><img src="../../../assets/images/aimeite/logo.png" height="29px"></el-col>
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
								<li><img class="nav_img" @click="toggle()" src="../../../assets/images/aimeite/index-seach.png" width="32px"
									 height="32px"></li>
							</ul>
						</el-col>
						<div style="clear: both;"></div>
						<div class="cengji">
							<router-link to='shouserve'>关于艾美特</router-link> &gt; <span>公司简介</span>
						</div>
					</div>

					<div class="productcontent" v-if="seen&&index==current">
						<div class="pcontent">
							<img src="../../../assets/images/aimeite/productline.jpg" width="100%">
							<ul class="pcontent_ul">
								<router-link class="lia" to="" v-for="(item,index) in pcontent" :key="index">
									<img :src="item.pcontentimg1" class="imgblock" height="55px" /><span class="pcontent_ul_wenzi">{{item.pcontentc}}</span>
								</router-link>
							</ul>
						</div>
					</div>
					<div class="productcontents" v-if="seens&&index==currents">
						<div class="pcontent">
							<img src="../../../assets/images/aimeite/productline1.jpg" width="100%">
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
					<!-- //<img src="http://www.airmate-china.com/cn/images/banner_btn.png" class="arrow_xia" @click="getdown()"> -->
				</el-col>
			</div>
			<img src="http://www.airmate-china.com/uploadfiles/image/banner_about.jpg" style="position: relative;top: 150px;"
			 width="100%" height="500px" @mouseleave="leave(index)" @mouseout='leaves(index)'>

			<div style="clear: both;"></div>
		</div>
		<!-- <div class="servezhishi">
		<router-link to="serveshouhou" class='servezhishi_a active'>售后服务</router-link>
		<router-link to="servewangdian" class='servezhishi_a'>服务网点</router-link>
		<router-link to="servewenti" class='servezhishi_a'>常见问题</router-link>
		<router-link to="servelianxi" class='servezhishi_a'>客服联系</router-link>
		<router-link to="servezhongxin" class='servezhishi_a'>下载中心</router-link>
		<router-link to="serveliuyan" class='servezhishi_a'>在线留言</router-link>
	</div> -->
		<div class="introduction">
			<div class="introduction_title">公司简介</div>
			<div class="introduction_Content">
				<!--栏目内容-->
				<p>
					艾美特于1973年创始於台湾，其品牌名称源於空气良伴(Airmate)，长期专注于空气品质改善类家用电器产品，创业初期以电风扇的制造与出口贸易为主。凭着品质至上的敬业态度与务实创新兼具的研发精神，艾美特不断茁壮与成长。自1997年起更专注于拓展中国市场自有品牌的发展，经过多年的市场深耕，艾美特深入中国各地，更跨足电暖器与健康小家电等新产品领域，俨然已成为中国市场精品小家电的前列品牌。艾美特于2013年3月成功在台湾挂牌上市，并于2014年5月签约设立艾美特九江小家电产业园。
				</p>
				<p>
					艾美特一直坚持提供优质产品和服务，在产品制造与研发创新的重要课题上，艾美特团队也从未懈怠。艾美特于2015年发布全新品牌策略—“舒适环境
					为您智造”，在行业内首推优质空气整合系统，从空气的温度、湿度、质量、循环四个维度评价空气品质，利用感知科技将进行整合，适当搭配春夏秋冬不同季节使用到电风扇、电暖器、空气净化器、加湿机、除湿机、新风系统等六大品类空气产品。艾美特期许为每个中国家庭智造优质的空气解决方案，让每一位用户享受舒适、便利、健康、愉悦的生活环境！
				</p>
				<p>
					<strong><span style="color:#005bac;">研发不断追求创新，工业设计引领潮流</span></strong><strong><span style="color:#005bac;"></span></strong>
				</p>
				<p>
					艾美特拥有强大的研发能力和工业设计团队为后盾，汇聚来自日本、法国、韩国、台湾、香港及中国内地等600多人的研发精英，以及来自日本、韩国、香港、台湾和大陆地区的工业设计师。自40年来专注电机的研发与设计，于2011年起开创电机领域先河，掌握直流电机核心技术，开发一系列高效节能的直流风扇、换气扇等系列产品。此外，丰富的设计与开发经验能针对不同区域市场消费特性量身定做，每年可自行开发200款以上的新产品，平均每1.5天推出一款新产品，深具因应市场变化调整所需的弹性与竞争优势，使艾美特产品能引领潮流，始终保持市场先导地位。
				</p>
				<p>
					<strong><span style="color:#005bac;">领先工艺+智能化生产机制，奠定坚强生产实力</span></strong><strong><span style="color:#005bac;"></span></strong>
				</p>
				<p>
					艾美特设有近60多条组装生产线，各型成熟先进的零部件生产部门包含金工、塑胶、冲压、制网、车床、马达、喷漆、喷印、印刷、PCB、模具制造搭配先进CAD/CAM加工设备与完善的模具设计中心，可实现国内外具挑战性的设计造型与工艺，其生产能力可达每年小家电2,000万台、马达1,400万组及模具1,200套，产品自制力高达95％以上。<br>
					艾美特于2002年全面导入ERP系统电脑化作业，搭配CRM、BPM、SRM、PLM等商业智能系统，从生产管理、采购计划、库存控制到成本管理，艾美特打造智能化生产机制，掌握第一手生产讯息，在统一的讯息管理系统协调下，优化资源分配，有效减少库存，增加资金运转，缩短生产周期，为实现生产成本的降低奠定坚实的基础。
				</p>
				<p>
					<strong><span style="color:#005bac;">品质是艾美特的生命</span></strong><strong><span style="color:#005bac;"></span></strong>
				</p>
				<p>
					艾美特秉持着〝品质第一，客户优先〞的服务观念，对品质有绝对的坚持，以严谨的质量检验标准和检验手法实现全面品质管理，包含来料质量管制（IQC）、生产线百分百质量管制（PQC）、完善的品质控管（QA）、产品寿命测试室以及配备精密量测仪器的产品实验室。艾美特所生产的产品陆续获得美国UL、加拿大CSA、德国GS、VDE、澳洲SAA、新加坡SISIR、日本SHARK和中国3C等多国家电安全标准的认证，并于1999年更获ISO9001国际品保标准的认证，进一步完善艾美特从外观设计、开发、生产、安装以至售后服务各环节对品质的要求。
				</p>
				<p>
					<strong><span style="color:#005bac;">艾美特与消费者</span></strong><strong><span style="color:#005bac;"></span></strong>
				</p>
				<p>
					艾美特专注于空气质量改良类家用电器产品，为消费者提供外观时尚做工精致的健康小家电，目前产品营销中国国内31个省市的12,000余家商场，遍及线上与线下渠道，其中线下渠道包含大润发、家乐福、沃尔玛、苏宁电器、国美电器、华润万家、乐购等各种型态的连锁及区域大型零售商场，而线上渠道更布局天猫、京东商城、苏宁易购、易迅、国美在线、亚马逊、拍拍网、当当网等线上平台。此外，产品也出口至日本、韩国、欧洲及美洲等世界60余国家和地区，是全球小家电主要结合设计、开发、生产一体的生产及品牌商之一，并与国际多家知名品牌保持长久合作关系。从OEM、ODM到OBM，艾美特期许永续经营，也积极关注环保议题与社会责任，为消费者提供更健康优质的生活而努力。
				</p>
				<!--栏目内容 结束-->
			</div>
		</div>
	</el-col>
</template>
<style lang="scss" scoped="scoped">
	.introduction {
		width: 76%;
		height: auto;
		margin: 0 auto;
		overflow: hidden;

		.introduction_title {
			padding: 55px 0;
			text-align: center;
			color: #333;
			font-size: 30px;
			padding-bottom: 30px;
			
		}
		.introduction_Content{
			font-size: 14px;
			color: #555555;
			margin-bottom: 35px;
			line-height: 35px;
		}
	}
	

	.Indexall {
		width: 100%;
		height: 650px;
		overflow: hidden;
	}

	// 导航
	.indexbanner .navbar {
		position: absolute;
		top: 31px;
		width: 80%;
		z-index: 1003;
		height: 150px;
		left: 140px;
		overflow: hidden;

		.cengji {
			width: 100%;
			height: 50px;
			background: white;
			position: relative;
			top: 25px;
			z-index: 1001;
			line-height: 50px;

			border-top: 1px #D3DCE6 solid;
			margin: 0px auto;

			a {
				font-size: 12px;
				color: #666666;
			}

			span {
				font-size: 12px;
			}
		}
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
			height: 250px;
			background: white;
			z-index: 1001;
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
			height: 308px;
			background: white;
			z-index: 1002;
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

	.indexbanner .searchtoggel {
		position: absolute;
		top: 0px;
		width: 97%;
		height: 80px;
		-webkit-transition: all ease-in-out .6s;
		-o-transition: all ease-in-out .6s;
		-moz-transition: all ease-in-out .6s;
		-ms-transition: all ease-in-out .6s;
		transition: all ease-in-out .6s;
		background: white;
		z-index: 1003;

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
		position: absolute;
		bottom: 25px;
		z-index: 1003;
		left: 49.25%;
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
	export default {
		name: 'app',

		data() {

			return {

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

			}
		},
		created() {

			this.buildpcontent();


		},

		methods: {



			buildpcontent() {
				this.axios.get('/api/buildpcontent').then(res => {
					this.pcontent = res.data.data //请求出来的标签数据			
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
				this.currents = null;
			},
			leaves() {

				this.seens = false;
				this.currents = null;
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


	}
</script>
