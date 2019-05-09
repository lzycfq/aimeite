<template>
	<el-col :span="24">
		<serveheaders></serveheaders>
		<div style="clear: both;"></div>
		<div class="servezhishi">
			<router-link to="serveshouhou" class='servezhishi_a'>售后服务</router-link>
			<router-link to="servewangdian" class='servezhishi_a'>服务网点</router-link>
			<router-link to="servewenti" class='servezhishi_a '>常见问题</router-link>
			<router-link to="servelianxi" class='servezhishi_a '>客服联系</router-link>
			<router-link to="servezhongxin" class='servezhishi_a active'>下载中心</router-link>
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
				<li id="SubmenID15" class="on"><router-link to='serveruanjian' >软件下载</router-link></li>
				<li id="SubmenID16"><router-link to='servezhineng'>智能产品专区</router-link></li>
				<li id="SubmenID17"><router-link to='serverzhuanmai'>专卖网络</router-link></li>
				<li id="SubmenID174"><router-link to='servehaibao'>海报下载</router-link></li>
			</ul>
			<div class="clear"></div>
		</div>
		<div class="Software_list">
       <ul class="ul">
       
         <li>

             <figure><img src="http://www.airmate-china.com/uploadfiles/image/software_img1.jpg"></figure>
             <div class="txt">
             <h2>AFan_v4.451</h2>
             <time><span>下载查看</span>2017-11-10</time>
             </div>
         
         </li>
       
         <li>
         
             <figure><img src="http://www.airmate-china.com/uploadfiles/image/software_img1.jpg"></figure>
             <div class="txt">
             <h2>智能遥控器</h2>
             <time><span>下载查看</span>2017-11-10</time>
             </div>
        
         </li>
       
         <li>
        
             <figure><img src="http://www.airmate-china.com/uploadfiles/image/software_img2.jpg"></figure>
             <div class="txt">
             <h2>艾-home（IOS）</h2>
             <time><span>下载查看</span>2017-11-10</time>
             </div>
      
         </li>
       
         <li class="mr_end">
         
             <figure><img src="http://www.airmate-china.com/uploadfiles/image/software_img2.jpg"></figure>
             <div class="txt">
             <h2>艾-home（安卓）</h2>
             <time><span>下载查看</span>2017-11-10</time>
             </div>
         
         </li>
       
         <li>
       
             <figure><img src="http://www.airmate-china.com/uploadfiles/image/software_img3.jpg"></figure>
             <div class="txt">
             <h2>APP苹果系统</h2>
             <time><span>下载查看</span>2017-11-10</time>
             </div>
          
         </li>
       
         <li>
         
             <figure><img src="http://www.airmate-china.com/uploadfiles/image/software_img2.jpg"></figure>
             <div class="txt">
             <h2>艾-home（安卓）</h2>
             <time><span>下载查看</span>2017-11-10</time>
             </div>
        
         </li>
       
         <li>
       
             <figure><img src="http://www.airmate-china.com/uploadfiles/image/software_img3.jpg"></figure>
             <div class="txt">
             <h2>APP安卓系统</h2>
             <time><span>下载查看</span>2017-11-10</time>
             </div>
         
         </li>
       
         <li class="mr_end">
         
             <figure><img src="http://www.airmate-china.com/uploadfiles/image/software_img1.jpg"></figure>
             <div class="txt">
             <h2>艾-home（安卓）</h2>
             <time><span>下载查看</span>2017-11-10</time>
             </div>
         
         </li>
       
       </ul>
       <div class="clear"></div>
     </div>
	</el-col>
</template>
<style lang="scss" scoped>
	
	.Software_list {
		margin: 0 auto;
		width: 85%;
    padding-bottom: 50px;
	
}
.Software_list li {
    width: 302px;
    float: left;
    margin-right: 28px;
    border: 1px solid #e5e5e5;
    margin-bottom: 25px;
}
.Software_list li img {
    width: 302px;
    height: 200px;
    display: block;
}
.Software_list li .txt {
    padding: 10px 20px;
    background: #fff;
}
.Software_list li .txt h2 {
    height: 50px;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
    margin: 0;
}
.Software_list li .txt time {
    font-size: 12px;
    color: #b6b6b6;
}
.Software_list li .txt span {
    float: right;
    background: url('http://www.airmate-china.com/cn/images/periodical_icon1.png') no-repeat -130px center;
    padding-left: 25px;
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
