<template>
	<el-col :span="24">
		<serveheaders></serveheaders>
		<div style="clear: both;"></div>
		<div class="servezhishi">
			<router-link to="serveshouhou" class='servezhishi_a'>售后服务</router-link>
			<router-link to="servewangdian" class='servezhishi_a active'>服务网点</router-link>
			<router-link to="servewenti" class='servezhishi_a'>常见问题</router-link>
			<router-link to="servelianxi" class='servezhishi_a'>客服联系</router-link>
			<router-link to="servezhongxin" class='servezhishi_a'>下载中心</router-link>
			<router-link to="serveliuyan" class='servezhishi_a'>在线留言</router-link>
		</div>
		<div class="servelinian">
			<router-link to="servelinian" class='servezhishi_b active'>服务理念</router-link>
			<router-link to="servezhengce" class='servezhishi_b'>服务政策</router-link>
			<router-link to="servegongao" class='servezhishi_b'>上门服务公告</router-link>
			<router-link to="servejieshao" class='servezhishi_b'>[金卡]服务介绍</router-link>
		</div>
		<div class="servewangdian">
			<h1 align="left" class="servewangdian_title">服务网点</h1>
			<br />
			<span>请选择服务网点：</span>
			<v-distpicker :placeholders="placeholders" :province="select.province" :city="select.city" :area="select.area"
			 @selected="onSelected"></v-distpicker>
			<div style="clear: both;"></div>
			<br />
			<br />

			<ul class="wl">
				<li class="wl_1_center">维修网点名称</li>
				<li class=" wl_2_center">详细地址</li>
				<li class=" wl_3_center">联系电话</li>
			</ul>
			<div v-for="(item,index) in uldata" >
				<ul class="wl_1_white" v-if="item.type==1">
					<li class="wl_1 ">{{item.wname}}</li>
					<li class="wl_2 ">{{item.wadress}}</li>
					<li class="wl_3 ">{{item.wphone}}</li>
				</ul>
				<ul class="wl_1_blue" v-else="item.type==2">
					<li class="wl_1 ">{{item.wname}}</li>
					<li class="wl_2 ">{{item.wadress}}</li>
					<li class="wl_3 ">{{item.wphone}}</li>
				</ul>
			</div>
		</div>
	</el-col>
</template>
<style lang="scss" scoped>
	.servewangdian {
		width: 85%;
		height: auto;
		margin: 0 auto;

		.servewangdian_title {
			color: #111111 !important;
			font-size: 17px;
		}

		.distpicker-address-wrapper {
			float: left;

		}

		span {
			position: relative;
			top: 10px;
			float: left;
		}

		.wl {
			width: 100%;
			height: 35px;
			line-height: 35px;

			.wl_1_center {
				float: left;
				width: 350px;
				padding: 13px 30px;
				list-style: none;
				color: #005BAC;
				font-size: 14px;
				font-weight: bold;
				text-align: center;
			}

			.wl_2_center {
				float: left;
				width: 500px;
				padding: 13px 30px;
				border-left: 2px solid #e8e9e9;
				border-right: 2px solid #e8e9e9;
				list-style: none;
				color: #005BAC;
				font-size: 14px;
				font-weight: bold;
				text-align: center;

			}

			.wl_3_center {
				float: left;
				width: 190px;
				padding: 13px 30px;
				list-style: none;
				color: #005BAC;
				font-size: 14px;
				font-weight: bold;
				text-align: center;

			}
		}

		.wl_1_white {
					width: 100%;
			color: #444;
			overflow: hidden;
			background: #f1f6fa;
			.wl_1 {
				float: left;
				width: 350px;
				padding: 13px 30px;
				list-style: none;
				color: #222222;
				font-size: 14px;

				text-align: left;
			}

			.wl_2 {
				float: left;
				width: 500px;
				padding: 13px 30px;
				border-left: 2px solid #e8e9e9;
				border-right: 2px solid #e8e9e9;
				list-style: none;
				color: #222222;
				font-size: 14px;

				text-align: left;

			}

			.wl_3 {
				float: left;
				width: 190px;
				padding: 13px 30px;
				list-style: none;
				color: #222222;
				font-size: 14px;
				font-weight: bold;
				text-align: center;

			}
		}

		.wl_1_blue {
		width: 100%;
			

			.wl_1 {
				
				float: left;
				width: 350px;
				padding: 13px 30px;
				list-style: none;
				color: #222222;
				font-size: 14px;

				text-align: left;
			}

			.wl_2 {
				float: left;
				width: 500px;
				padding: 13px 30px;
				border-left: 2px solid #e8e9e9;
				border-right: 2px solid #e8e9e9;
				list-style: none;
				color: #222222;
				font-size: 14px;

				text-align: left;

			}

			.wl_3 {
				float: left;
				width: 190px;
				padding: 13px 30px;
				list-style: none;
				color: #222222;
				font-size: 14px;
				font-weight: bold;
				text-align: center;

			}
		}
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
			font-weight: bold;

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
	import VDistpicker from 'v-distpicker'
	export default {
		data() {
			return {
				select: {
					province: '广东省',
					city: '广州市',
					area: '海珠区'
				},
				address__province: '',
				address__city: '',
				address__dist: '',
				uldata: []

			}
		},
		created() {
			this.builduldata();
		},
		methods: {
			onSelected(data) {
				this.select.address__province = data.province.value
				this.select.address__city = data.city.value
				this.select.address__dist = data.area.value
				this.axios.get('', {
					params: {
						province: data.province.value,
						city: data.city.value,
						area: data.area.value,
					},
				}).then(res => {
					this.preferential_list = res.data //请求出来的优选房源数据
				}).catch(function(error) {
					console.log(error);
				})
			},
			builduldata() {
				this.axios.get('/api/uldata').then(res => {
				
					this.uldata = res.data.data //请求出来的优选房源数据
				}).catch(function(error) {
					console.log(error);
				})
			}
		},
		components: {
			serveheaders,
			VDistpicker
		},
	}
</script>
