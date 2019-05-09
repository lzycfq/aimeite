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
		<section class="rescontent">
			<div class="N_title">社会责任</div>
			<div class="resContent">

				<h2>
					艾美特企业社会责任主要可分为三部分：
				</h2>
				<dl>
					<dd>
						<figure><img src="http://www.airmate-china.com/amtdqj201708217221/uploadfiles/image/about_img1.jpg"></figure>
						<div class="txt">
							<h2>
								艾美特与员工 ── “企业爱员工,员工爱企业”和谐氛围
							</h2>
							<p>
								艾美特注重人才培训与应用，会不定期针对各部门员工提出的职业进修需求，聘请相关行业知名人士讲师做培训和鼓励团队成员内部技术交流分享。艾美特为员工设置篮球场、羽球场及健身中心、举办各式运动与人文比赛、家长亲子讲座、创建员工社团、打造开放的学习空间（例如：图书馆、电脑室、下棋间、卡拉OK中心）等等，提升员工素质与人文气息。此外，更标榜纪律并辅以人性化的管理制度，提供每位员工良好的工作环境与福利，让每位员工有正面积极工作态度及创新的团队精神，使得人才成为艾美特的重要资源。
							</p>
						</div>
					</dd>
					<dd>
						<div class="txt">
							<h2>
								艾美特与环境 ── 维护生态环境，永续绿色环保
							</h2>
							<p>
								艾美特一直致力于环境保护事业，秉持着永续经营的理念。公司成立专门的ISO14001推行委员会，将工业废水、生活废水、废气、噪音、垃圾分类回收等列入治理工程，并投入建设污水处理装置，日处理污水1200立方米，全厂生活污水和工业污水经过处理后，全都可以回收利用，从而实现了环保和效益的双赢，使得艾美特顺利通过ISO14001环境管理体系认证。
							</p>
							<p>
								艾美特积极打造“节能减排”绿色企业，落实低碳生活理念，其绿色环保体系，不但维护了生态环境的平衡，使能源得到充份的再利用，更对当地的环保事业起到良好的促进作用。
							</p>
						</div>
						<figure><img src="http://www.airmate-china.com/amtdqj201708217221/uploadfiles/image/about_img2.jpg"></figure>
					</dd>
					<dd>
						<figure><img src="http://www.airmate-china.com/amtdqj201708217221/uploadfiles/image/about_img3.jpg"></figure>
						<div class="txt">
							<h2>
								艾美特与社会
							</h2>
							<p>
								艾美特公司自1991年在企业稳健发展的同时，积极主动承担企业社会责任，先后在江西、云南四川等地建设了多所希望小学，并始终如一给予希望小学持续性的关心、关注和关爱。此外，艾美特也创建失足孩子帮扶项目，提供就业机会帮助失足孩子拨开重回社会的阴霾。
							</p>
							<p>
								艾美特同时也关注台湾儿童的生活成长环境，捐款补助台湾儿童福利联盟文教基金会，积极关注公益。艾美特更与广东省麦田教育基金会合作进行长期捐赠计划，捐赠电风扇、电暖器与空气净化器至就学环境恶劣的学校，以改善贫困地区儿童学习环境，让贫困地区儿童同样能感受到温暖和欢乐。
							</p>
						</div>
					</dd>
				</dl>
				<div class="clear">
				</div>
			</div>
			<!--栏目内容 结束-->
			</div>
		</section>
	</el-col>
</template>
<style lang="scss" scoped="scoped">
	.rescontent {
		width: 76%;
		overflow: hidden;
		margin: 0 auto;

		.N_title {
			padding: 55px 0;
			text-align: center;
			color: #333;
			font-size: 30px;
			padding-bottom: 30px;
		}

		.resContent {
			h2 {
				font-size: 15px;
				color: #005bac;
			}

			dl {
				padding: 20px 0;

				dd {
					display: table;
					line-height: 30px;
					background: #f9f9f9;
					margin-bottom: 20px;
					.txt {
						padding: 0 30px;
						font-size: 14px;
					}
					figure{
						display: table-cell;
						vertical-align: middle;
					}
					
					.txt {
						display: table-cell;
						vertical-align: middle;
					}

					.txt p {
						margin: 25px 0;
						font-size: 14px;

					}
				}
			}
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
