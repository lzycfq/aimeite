<template>
	
	<el-col :span="24">
		<header class="header">
			<div class="wid">
				<span class="logo"><img class="logo_img" src="http://www.airmate-china.com/uploadfiles/image/wap_logo.png">
					<img @click="opennav(index)" src="../../../assets/images/aimeite/xitongcaidan.png" class="logo_caidan">
				</span>
			</div>
			<!-- 轮播 -->
			<div class="mb_navbar" v-if="nbnavbar">
				<div class="mb_search">
					<p align="right" style="margin-right: 5px;position: relative;top: 25px;"><img @click="navclose(index)" src="../../../assets/images/aimeite/mb_close.png"
						 width="40px"></p>
					<el-form ref="mbsearchformrul" class="mbsearchformrul" :model="mbsearchform" label-width="80px">
						<el-input v-model="mbsearchform.searchcontent" rel="searchcontent">
							<i class="el-icon-search" slot="suffix" @click="mbsearch"></i>
						</el-input>
					</el-form>
				</div>
				<ul class="mbul" v-for="(item,index) in navbarjson" :key="index">
			
					<li>
						<router-link to="/"><span>首 页</span><img style="vertical-align: middle;float: right;" src="../../../assets/images/aimeite/arrow_right.png"></router-link>
					</li>
					<li @click="clickproduct= !clickproduct"><a><span>产品中心</span><img style="vertical-align: middle;float: right;" src="../../../assets/images/aimeite/arrow_right.png"></a>
						<dl v-show="clickproduct" >
							<dd v-for="(item,index) in item.na" :key="index" @click="navclose(index)">
								<router-link :to="{path:item.link,params: { id: item.id }}" >{{item.nac}}</router-link>
							</dd>
						</dl>
					</li>
					<li @click="clickfuwu= !clickfuwu"><a><span>服务</span><img style="vertical-align: middle;float: right;" src="../../../assets/images/aimeite/arrow_right.png"></a>
						<dl v-show="clickfuwu" >
							<dd v-for="(item,index) in item.nb" :key="index">
								<router-link :to="{path:item.link}">{{item.nbc}}</router-link>
							</dd>
						</dl>
					</li>
					<li @click="clickliyi= !clickliyi"><a><span>利益关系专区</span><img style="vertical-align: middle;float: right;" src="../../../assets/images/aimeite/arrow_right.png"></a>
						<dl v-show="clickliyi" >
							<dd v-for="(item,index) in item.nc" :key="index">
								<router-link to="/">{{item.ncc}}</router-link>
							</dd>
						</dl>
					</li>
					<li>
						<router-link to=""><span>网上商城</span><img style="vertical-align: middle;float: right;" src="../../../assets/images/aimeite/arrow_right.png"></router-link>
					</li>
					<li @click="clickg= !clickg"><a><span>关于艾美特</span><img style="vertical-align: middle;float: right;" src="../../../assets/images/aimeite/arrow_right.png"></a>
						<dl v-show="clickg" >
							<dd v-for="(item,index) in item.ne" :key="index">
								<router-link to="/">{{item.nec}}</router-link>
							</dd>
						</dl>
					</li>
					<li @click="clickz= !clickz"><a><span>新闻资讯</span><img style="vertical-align: middle;float: right;" src="../../../assets/images/aimeite/arrow_right.png"></a>
						<dl v-show="clickz" >
			
							<dd v-for="(item,index) in item.nf" :key="index">
								<router-link to="/">{{item.nfc}}</router-link>
							</dd>
						</dl>
					</li>
					<li @click="clickr= !clickr"><a><span>人力资源</span><img style="vertical-align: middle;float: right;" src="../../../assets/images/aimeite/arrow_right.png"></a>
						<dl v-show="clickr" >
							<dd v-for="(item,index) in item.ng" :key="index">
								<router-link to="/">{{ngc}}</router-link>
							</dd>
						</dl>
					</li>
				</ul>
			</div>
		</header>
		
	</el-col>
</template>
<script>
	export default {
		name: 'header',
		data() {
			return {
				nbnavbar: false,
				clickproduct: false,
				clickfuwu: false,
				clickliyi: false,
				clickg: false,
				clickz: false,
				clickr: false,
				mbsearchform: {
					searchcontent: ''
				},
				mbsearchformrul: {
					searchcontent: [{
							required: true,
							message: '请输入搜索内容',
							trigger: 'blur'
						},
	
					]
				},
				
			
				product: [],
				producttwo: [],
				navbarjson:[]
	
			}
		},
	
		created() {
			
			this.buildproduct();
			this.buildproducttwo();
			this.buildnavbarjson();
		},
	
		methods: {
			
			buildproduct() {
				this.axios.get('/api/buildlayoutproduct').then(res => {
					this.product = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildproducttwo() {
				this.axios.get('/api/buildproducttwo').then(res => {
					console.log(res)
					this.producttwo = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildnavbarjson() {
				this.axios.get('/api/buildnavbarjson').then(res => {
					console.log(res)
					this.navbarjson = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			},
			mbsearch(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {
								'searchcontent': this.$rels.searchcontent.value
							},
						}).then(res => {}).catch(function(error) {
							console.log(error);
						});
						// 表单提交
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
	
			clickproduct(index) {
				this.clickproduct = false;
				
			},
			clickfuwu(index) {
				this.clickfuwu = false;
			},
			clickliyi(index) {
				this.clickliyi = false;
			},
			clickg(index) {
				this.clickg = false;
			},
			clickz(index) {
				this.clickz = false;
			},
			clickr(index) {
				this.clickr = false;
			},
			opennav(index) {
				this.nbnavbar = true
			},
			navclose(index) {
				
				this.nbnavbar = false
			},
		},
		
	}
</script>
<style lang="scss" scoped>
	
		.header {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			overflow: hidden;
			z-index: 100;
		}
	
		
	
		.header .wid {
	    position: relative;
	}
	.wid {
	    max-width: 640px;
	    margin: 0 auto;
	    padding: 0 2%;
	}
	
		.header .logo {
	    padding: 8% 0;
	    display: block;
	    min-width:96%;
	}
	
		.header .logo {
			display: inline-block;
			vertical-align: middle;
		}
	
		.header .logo .logo_img {
			float: left;
		}
	
		.header .logo .logo_caidan {
			float: right;
			width: 40px;
		}
	
		.header .mb_navbar {
			position: fixed;
			 width: 100%;
			 max-width: 640px;
			background: rgba(0, 0, 0, 0.6);
			height: 100%;
			z-index: 500;
			overflow: auto;
			top: 0;
	
			.mb_search {
				width: 320px;
				position: relative;
				z-index: 100;
				float: right;
				max-width: 60%;
				padding: 0 2%;
				height: auto;
				z-index: 1000;
				background: #005bac;
	
				.mbsearchformrul {
					margin-top: 75px;
				}
			}
	
	
		}
		@media screen and (min-width: 640px){
	.header  .mb_navbar{
	    width: 640px;
	    left: 50%;
	    margin-left: -320px;
	  
	}
	}
		.mb_navbar .mb_search .mbsearchformrul {
			/deep/ .el-input__suffix {
	
				right: 10px;
	
			}
		}
	
		.mb_navbar .mb_search .mbsearchformrul {
			/deep/ .el-input__suffix .el-input__suffix-inner {
				font-size: 28px;
				width: 28px;
				/* float: left; */
			}
		}
	
		.mb_navbar .mb_search .mbsearchformrul {
			/deep/ .el-input__inner {
				-webkit-appearance: none;
				background-color: #fff;
				background-image: none;
				border-radius: 50px;
				border: 1px solid #dcdfe6;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				color: #606266;
				display: inline-block;
				font-size: inherit;
				height: 40px;
				line-height: 40px;
				outline: 0;
				padding: 0 15px;
				-webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
				transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
				width: 100%;
			}
		}
	
		.mb_navbar .mbul {
			position: absolute;
			right: 0;
			top: 0;
			min-height: 100%;
			list-style: none;
			width: 320px;
			max-width: 60%;
			z-index: 100;
			background: #005BAC;
			padding: 160px 2% 15%;
	
		}
	
		.mb_navbar .mbul ol {
			position: absolute;
			right: 5%;
			top: 20px;
			width: 34px;
			height: 34px;
			z-index: 100;
	
			border: 2px solid #fff;
			border-radius: 50%;
		}
	
		.mb_navbar .mbul ol span {
			position: absolute;
			right: 50%;
			height: 20px;
			top: 50%;
			width: 20px;
			z-index: 2;
			transform: translate(50%, -50%);
		}
	
		.mb_navbar .mbul ol span:before {
			transform: rotate(45deg);
		}
	
		.mb_navbar .mbul ol span:after {
			transform: rotate(-45deg);
		}
	
		.mb_navbar .mbul ol span:before,
		.mb_navbar .mbul ol span:after {
			top: 8px;
			width: 100%;
			background-color: #fff;
			border-radius: 5px;
			position: absolute;
			height: 3px;
			left: 0px;
			content: '';
			transition: transform 0.3s;
		}
	
		.mb_navbar .mbul li {
			width: 100%;
			border-bottom: 1px solid #1c6db5;
		}
	
		@media screen and (max-width: 375px) {
			.mb_navbar .mbul li>a {
				font-size: 16px;
			
				padding: 2% 0 2% 25%;
				color: white;
				font-size: 14px;
				text-align: left;
	
				
			}
		}
	
		@media screen and (max-width: 480px) {
			.mb_navbar .mbul li>a {
				font-size: 18px;
				color: white;
				font-size: 14px;
				text-align: left;
	
				
			}
		}
	
		.mb_navbar .mbul li>a {
			display: block;
			padding: 7% 0 7% 25%;
			font-size: 24px;
			background: url('http://www.airmate-china.com/wap/images/top_iocn1.png') no-repeat 10% -3.3%;
			background-size: 10%;
			position: relative;
			color: white;
			font-size: 14px;
			text-align: left;
	
			
	
		}
		.mb_navbar .mbul li:nth-child(2)>a {
		    background-position: 10% 12%;
		}
		
	
		.mb_navbar .mbul li:nth-child(3)>a {
			background-position: 10% 27.5%;
		}
	
		.mb_navbar .mbul li:nth-child(4)>a {
			background-position: 10% 42.5%;
		}
	
		.mb_navbar .mbul li:nth-child(5)>a {
			background-position: 10% 57.5%;
		}
	
		.mb_navbar .mbul li:nth-child(6)>a {
			background-position: 10% 72.8%;
		}
	
		.mb_navbar .mbul li:nth-child(7)>a {
			background-position: 10% 88%;
		}
	
		.mb_navbar .mbul li:nth-child(8)>a {
			background-position: 10% 103.3%;
		}
	
		.mb_navbar .mbul li dl {
			text-align: left;
			padding-left: 11%;
			padding-bottom: 10%;
	
		}
	
		.mb_navbar .mbul li dd {
			padding-left: 32px;
			position: relative;
		}
	
		@media screen and (max-width: 480px) {
			.mb_navbar .mbul li dd a {
				font-size: 14px;
				text-align: left;
	
			}
		}
	
		.mb_navbar .mbul li dd a {
			font-size: 14px;
			padding: 5% 0;
			display: block;
			text-align: left;
		}
	
		.mb_navbar .mbul li dd:after {
			content: '';
			width: 17px;
			height: 2px;
			left: 0;
			top: 18px;
			background: #d1d1d1;
			position: absolute;
		}
		.mb_home ul {
			margin: 1% 0;
			overflow: hidden;
		
			li {
				float: left;
				list-style: none;
				width: 33%;
				border-top: 1px solid #d6d6d6;
				border-right: 1px solid #d6d6d6;
				text-align: center;
				padding: 5% 0 0;
				margin-top: -1px;
		
				figure {
					width: 80%;
					margin: 0 auto;
		
					img {
						max-width: 50%;
						max-height: 82px;
					}
				}
		
				p {
					color: #333333;
					margin: 12% auto;
				}
			}
		}
		
	
</style>