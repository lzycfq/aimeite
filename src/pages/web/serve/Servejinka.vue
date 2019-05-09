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
		<router-link to="servelinian" class='servezhishi_b '>服务理念</router-link>
		<router-link to="servezhengce" class='servezhishi_b '>服务政策</router-link>
		<router-link to="servegongao" class='servezhishi_b '>上门服务公告</router-link>
		<router-link to="servejieshao" class='servezhishi_b active'>[金卡]服务介绍</router-link>
	</div>
<div class="info_jinka">
	<dl>
		<dd>
			<i>1</i> 
			<p>
				持卡人请先致电艾美特全国统一服务热线：<b>400-8860-315</b> 进行开卡作业，方可享有本服务金卡所提供的服务。
			</p>
		</dd>
		<dd>
			<i>2</i> 
			<h2>
				持卡人开卡成功后，其购买的艾美特产品凭有效票据可享有以下服务：
			</h2>
			<p>
				自购买日起一年内，直辖市、省会城市等市区内以电话报修方式可享有免费上门服务（具体服务地区、内容及条款详见艾美特网站www.airmate-china.com）<br>
自购买日起三年内免收维修技术费服务<br>
风扇、空气净化器、除湿机主电机十年包用<br>
首膳养生机主电机及刀片五年包用服务<br>
报修电话优先接入、专人接听的贵宾服务
			</p>
		</dd>
		<dd>
			<i>3</i> 
			<p>
				所有属营业场所使用产品不包含在本服务范围内。
			</p>
		</dd>
		<dd>
			<i>4</i> 
			<p>
				本卡请妥善保管，以作为提供相关服务的依据。
			</p>
		</dd>
		<dd>
			<i>5</i> 
			<p>
				艾美特电器（深圳）有限公司拥有本贵宾服务金卡使用的最终解释权。
			</p>
		</dd>
	</dl>
</div>
         
	


	</el-col>
</template>
<style lang="scss" scoped>
	.info_jinka{
		width: 85%;
		margin: 0 auto;
		margin-bottom: 45px;
	}
	.info_jinka dd {
    position: relative;
    padding-left: 40px;
    min-height: 30px;
    margin-bottom: 30px;
    line-height: 30px;
}
.info_jinka dd i {
    position: absolute;
    left: 0;
    top: 0;
    width: 29px;
    height: 29px;
    font-style: normal;
    background: url('http://www.airmate-china.com/cn/images/num_bg.png') no-repeat center;
    text-align: center;
    line-height: 29px;
    color: #fff;
}
.info_jinka dd b {
    color: #005bac;
}
.info_jinka dd h2 {
    color: #005bac;
    font-size: 14px;
    margin: 0;
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
			font-weight: bold;

			text-align: left;
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

