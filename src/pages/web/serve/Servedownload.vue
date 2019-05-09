<template>
	<el-col :span="24">
		<serveheaders></serveheaders>
		<div style="clear: both;"></div>
		<div class="servezhishi">
			<router-link to="serveshouhou" class='servezhishi_a'>售后服务</router-link>
			<router-link to="servewangdian" class='servezhishi_a'>服务网点</router-link>
			<router-link to="servewenti" class='servezhishi_a '>常见问题</router-link>
			<router-link to="servelianxi" class='servezhishi_a active'>客服联系</router-link>
			<router-link to="servezhongxin" class='servezhishi_a'>下载中心</router-link>
			<router-link to="serveliuyan" class='servezhishi_a'>在线留言</router-link>
		</div>
		<div class="servelinian">
			<router-link to="servelinian" class='servezhishi_b active'>服务理念</router-link>
			<router-link to="servezhengce" class='servezhishi_b'>服务政策</router-link>
			<router-link to="servegongao" class='servezhishi_b'>上门服务公告</router-link>
			<router-link to="servejieshao" class='servezhishi_b'>[金卡]服务介绍</router-link>
		</div>
		<div class="Submen">
			<ul class="ul">
				<li id="SubmenID12">
					<router-link to="/Servelianxi">联系我们</router-link>
				</li>
				<li id="SubmenID13" class="on">
					<router-link to="/Serve_shangwuserve">商用服务</router-link>
				</li>

			</ul>
			<div class="clear"></div>
		</div>
		<div class="contact_list">
			<ul class="ul">

				<li>
					<a href="mailto:service@airmate-china.net">
						<img src="http://www.airmate-china.com/uploadfiles/image/contact_icon1.png">
						区域商务洽谈
						<span>立即洽谈</span>
					</a>
				</li>

				<li class="mr_end">
					<a href="mailto:service@airmate-china.net">
						<img src="http://www.airmate-china.com/uploadfiles/image/contact_icon2.png">
						电子商务洽谈
						<span>立即洽谈</span>
					</a>
				</li>

				<li>
					<a href="mailto:service@airmate-china.net">
						<img src="http://www.airmate-china.com/uploadfiles/image/contact_icon3.png">
						礼品商务洽谈
						<span>立即洽谈</span>
					</a>
				</li>

				<li class="mr_end">
					<a href="mailto:service@airmate-china.net">
						<img src="http://www.airmate-china.com/uploadfiles/image/contact_icon4.png">
						住宅电器商务洽谈
						<span>立即洽谈</span>
					</a>
				</li>

			</ul>
			<div class="clear"></div>
		</div>
	</el-col>
</template>
<style lang="scss" scoped>
	.contact_list {
		width: 85%;
		margin: 0 auto;
	}

	.contact_list li {
		padding: 30px 20px;
		line-height: 56px;
		background: #f9f9f9;
		margin-right: 30px;
		font-weight: bold;
		color: #444;
		font-size: 15px;
		list-style: none;
		width: 595px;
		float: left;
		margin-bottom: 30px;

		a {
			display: block;
			color: #333;

		}
	}

	.contact_list img {
		width: 69px;
		height: 65px;
		vertical-align: middle;
		display: inline-block;
		margin-left: 10px;
	}

	.contact_list li span {
		float: right;
		width: 97px;
		height: 30px;
		line-height: 30px;
		background: #e0e9f1;
		color: #666666;
		font-size: 14px;
		font-weight: normal;
		text-align: center;
		margin-top: 20px;
	}

	.contact_list li a {
		display: block;
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

	export default {

		data() {

			return {


			}
		},

		components: {
			serveheaders,
		},
	}
</script>
