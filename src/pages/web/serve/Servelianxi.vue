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
				<li id="SubmenID12" class="on">
					<router-link to="/Servelianxi">联系我们</router-link>
				</li>
				<li id="SubmenID13">
					<router-link to="/Serve_shangwuserve">商用服务</router-link>
				</li>

			</ul>
			<div class="clear"></div>
		</div>
		<div class="Content">
			<!--栏目内容-->
			<table style="width:85%;margin: 0 auto;" cellpadding="2" cellspacing="0" border="0" class="ke-zeroborder" bordercolor="#000000">
				<tbody>
					<tr>
						<td style="vertical-align:top;">
							<span style="color:#005bac;"><strong>▎ 全国客服热线</strong></span><br>
						</td>
						<td style="vertical-align:top;">
							您可拨打我司服务热线：<span style="color:#005bac;">400-8860-315</span>进行咨询、投诉； <br>
							<br>
						</td>
					</tr>
					<tr>
						<td style="vertical-align:top;">
							<span style="color:#005bac;"><strong>▎ 全国专卖网络</strong></span>
						</td>
						<td style="vertical-align:top;">
							您可以就近联系您所在城市的<span style="color:#005bac;">【专卖网络】</span>，我们将热忱地为您服务； <br>
							<br>
						</td>
					</tr>
					<tr>
						<td style="vertical-align:top;">
							<span style="color:#005bac;"><strong>▎ 在线客服 </strong></span><br>
						</td>
						<td style="vertical-align:top;">
							service@airmate-china.net；<br>
							或是直接咨询【售后微博】<span style="color:#005bac;">@艾美特电器服务中心</span> <span style="color:#005bac;"><br>
							</span>
							<br>
						</td>
					</tr>
					<tr>
						<td style="vertical-align:top;">
							<strong><span style="color:#005bac;">▎【商用联系】</span></strong> <br>
						</td>
						<td style="vertical-align:top;">
							区域商务洽询：service@airmate-china.net<br>
							电子商务洽询：19694@airmate-china.com<br>
							礼品商务洽询：0173@airmate-china.com<br>
							住宅电器商务洽询：21491@airmate-china,com<br>
							<br>
						</td>
					</tr>
				</tbody>
			</table>
			<br>
			<br>
			<!--栏目内容 结束-->
		</div>
	</el-col>
</template>
<style lang="scss" scoped>
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
