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
		<router-link to="servezhengce" class='servezhishi_b active'>服务政策</router-link>
		<router-link to="servegongao" class='servezhishi_b'>上门服务公告</router-link>
		<router-link to="servejieshao" class='servezhishi_b'>[金卡]服务介绍</router-link>
	</div>
	<div class="Content">
         <!--栏目内容-->
		 <p style="color:#005bac;">
	<strong>售后电话及办公时间：</strong>
</p>
我公司开设全国咨询电话（400-8860315）人工服务时间：周一至周六上午8：00-12：00，下午13：30-17：30；周一至周五晚18：15-21：15，其它时间则可进行电话留言。<br>
<br>
<br>
<p style="color:#005bac;">
	<strong>服务承诺：</strong>
</p>
<strong>1．我公司坚决拥护和执行国家《产品质量法》、《消费者权益保护法》、《部份商品修理、更换和退货的规定》。</strong><br>
<br>
<strong>2．我公司对包修期内的产品非人为损坏而产生故障实行全免费包修服务。</strong><br>
<br>
<strong>3．全免费包修期：</strong><br>
<br>
（1）电风扇、电暖器、换气扇、小家电整机免费包修一年（电磁炉、果汁机等如属营业使用的免费包修半年）；<br>
<br>
（2）电风扇电机凭有效购买凭证免费包修十年（吊扇按国家三包政策执行）；<br>
<br>
（3）艾美特电磁炉八大系列五年免费包修：线盘、散热片、主机座、滤波电容、高压电容、电感线圈、热敏电阻、变压器；<br>
<br>
<strong>4．全免费包修条件：</strong><br>
<br>
（1）必须在包修期内；<br>
<br>
（2）需提供购机发票或其他有效购机证明；<br>
<br>
<strong>5．下列情形不属免费包修服务范围，但可实行收费修理：</strong><br>
<br>
（1）不能提供购机发票或其他有效购机证明的产品；<br>
<br>
（2）超过包修期的产品；<br>
<br>
（3）虽在包修期内但非我公司特约服务点维修而损坏的产品（包括顾客自行安装或拆卸维修的）；<br>
<br>
（4）属包修期内因消费者使用、维护或保管不当而损坏的产品，可免费维修，但需收取零配件费用；<br>
<br>
（5）包修卡或购机发票是经过涂改的；<br>
<br>
（6）属包修期内但非一般家庭正常使用造成的损坏（如商用），可免费维修，但需收取配件费；<br>
<br>
（7）属包修期内由于电源电压不稳定或超出正常电压范围（198V~242V）或电源线路安装不符合国家电气安装要求而造成损坏的产品，可免费维修，但需收取配件费；<br>
<br>
（8）属包修期内因不可抗拒的自然灾害而造成损坏的产品，可免费维修，但需收取配件费。<br>
<br>
<strong>6．包修期外的收费标准：</strong><br>
<br>
（1）包修期外的产品维修，除需收取配件费外，还可视具体情况酌收维修费，但维修费最高不得超过50元；<br>
<br>
（2）本公司不承诺上门服务（高端产品及双灶电磁炉除外），如有消费者要求上门服务的，除收取配件费、维修费之外，还需根据路程的远近 酌收上门服务费；<br>
<div style="white-space:nowrap;">
	<br>
</div>
		 <!--栏目内容 结束-->
      </div>
	</el-col>
</template>
<style lang="scss" scoped>
	.Content{
		width: 85%;
		margin: 0 auto;
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

