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
		<section class="maincontent">
      <div class="N_title">企业文化</div>
      <div class="Content">
         <!--栏目内容-->
		 <div class="info_201711091031">
	<h2>
		艾美特的愿景使命与核心价值
	</h2>
	<dl>
		<dd>
			<figure><img src="http://www.airmate-china.com/amtdqj201708217221/uploadfiles/image/about_iocn1.png"></figure>
			<div class="txt">
				<h2>
					品牌愿景
				</h2>
				<p>
					期许每个中国家庭都能享受艾美特用心打造的舒适、便利、健康、愉悦生活！
				</p>
			</div>
		</dd>
		<dd style="margin-right:0;">
			<figure><img src="http://www.airmate-china.com/amtdqj201708217221/uploadfiles/image/about_iocn2.png"></figure> 
			<div class="txt">
				<h2>
					品牌使命
				</h2>
				<p>
					致力成为消费者、员工、合作伙伴、社会大众及股东所赞誉的标杆企业。
				</p>
			</div>
		</dd>
		<dd>
			<figure><img src="http://www.airmate-china.com/amtdqj201708217221/uploadfiles/image/about_iocn3.png"></figure>
			<div class="txt">
				<h2>
					核心价值
				</h2>
				<p>
					<span>诚--诚实之经营理念</span><span>信--信用为基础之原则</span><span>公--公是公非事理圆融</span><span>勤--勤劳奋发之意志</span> 
				</p>
			</div>
		</dd>
		<dd style="margin-right:0;">
			<figure><img src="http://www.airmate-china.com/amtdqj201708217221/uploadfiles/image/about_iocn4.png"></figure> 
			<div class="txt">
				<h2>
					艾美特品牌标签
				</h2>
				<p>
					时尚、创新、精致、健康、节能、环保、台湾、人文关怀
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
	.maincontent {
    width: 76%;
    margin: 0 auto;
    padding-bottom: 50px;
	.N_title {
    padding: 55px 0;
    text-align: center;
    color: #333;
    font-size: 30px;
    padding-bottom: 30px;
}
 h2 {
    font-size: 14px;
    color: #005bac;
}
 dl {
    overflow: hidden;
    padding: 20px 0;
	dd {
    width: 570px;
    padding: 0 32px;
    margin-right: 32px;
    margin-bottom: 30px;
    float: left;
    background: #f9f9f9;
    height: 140px;
    display: table;
}
dd figure {
    padding-right: 10px;
    width: 78px;
}
dd figure{
    display: table-cell;
    vertical-align: middle;
}
 dd figure, dd .txt {
    display: table-cell;
    vertical-align: middle;
}
dd .txt h2 {
    margin: 0 0 10px;
}
 dd .txt p {
    margin: 0;
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
