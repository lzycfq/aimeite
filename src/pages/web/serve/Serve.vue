<template>
	<el-col :span="24">
<serveheaders></serveheaders>
<div style="clear: both;"></div>
	<div class="servezhishi">
		<router-link to="serveshouhou" class='servezhishi_a active'>售后服务</router-link>
		<router-link to="servewangdian" class='servezhishi_a'>服务网点</router-link>
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
	<dl class="info">
	<dd class="info_left">
		<img src="http://www.airmate-china.com/amtdqj201708217221/uploadfiles/image/service_iocn1.png">爱心服务，兑现承诺
	</dd>
	<dd class="info_right">
		<img src="http://www.airmate-china.com/amtdqj201708217221/uploadfiles/image/service_iocn2.png">迅速反应，立即行动
	</dd>
</dl>
	</el-col>
</template>
<style lang="scss" scoped>
	.info{
		overflow: hidden;
    clear: both;
		width: 85%;
		margin: 0 auto;
		height: 200px;
		.info_left{
			width: 50%;
			float: left;
			margin-top: 50px;
			text-align: center;
		}
		.info_right{
			width: 50%;
			float: right;
			margin-top: 50px;
			text-align: center;

		}
	}
	
	
	.servelinian{
		width: 50%;
		height: 117px;
		line-height: 117px;
	
	
		margin: 0 auto;
		.servezhishi_b{
			float: left;
			width: 180px;
			color: #666666;
			font-size: 25px;
			text-align: left;
		}
		.servezhishi_b.active{
			color: #005BAC;
		}
.servezhishi_b:hover{
	color: #005BAC;
}
	}
	.servezhishi{
		width: 85%;
		height: 70px;
		line-height: 70px;
		margin: 0 auto;
		border-bottom: 1px #E1E1E1 solid;
		a{
			display: inline-block;
			width: 90px;
			color: #666666;
			font-size: 16px;
			text-align: left;
			font-weight: bold;

		}
		a.active{
			font-weight: bold;
    color: #005bac;
		}
	}
</style>

<script>
	const serveheaders = () => import('../../web/compoents/serveheader');

	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components: {
					serveheaders
		
				},
	}
</script>

