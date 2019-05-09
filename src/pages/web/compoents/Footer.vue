<template>
<div>
	<el-row class='webfooter'>
		<div class="webfootercontent">
		<el-col :span="4">
			<div class="guanyu">
				<h2 style="color: #222222;font-size: 15px;">一 关于艾美特</h2>
				<br />

				<router-link to="" style="color: #666666;">公司简介</router-link>
				<router-link to="" style="color: #666666;">公司文化</router-link>
				<router-link to="" style="color: #666666;">企业荣誉</router-link>
				<router-link to="" style="color: #666666;">发展历史</router-link>
				<router-link to="" style="color: #666666;">社会责任</router-link>
				<router-link to="" style="color: #666666;">公司章程</router-link>
			</div>
		</el-col>
		<el-col :span="4">
			<div class="guanyu">
				<h2 style="color: #222222;font-size: 15px;">一 新闻资讯</h2>
				<br />
				<router-link to="" style="color: #666666;">企业活动</router-link>
				<router-link to="" style="color: #666666;">活动专题</router-link>
				<router-link to="" style="color: #666666;">媒体中心</router-link>
				<router-link to="" style="color: #666666;">行业资讯</router-link>

			</div>
		</el-col>
		<el-col :span="4">
			<div class="guanyu">
				<h2 style="color: #222222;font-size: 15px;">一 利益关系专区</h2>
				<br />
				<router-link to="" style="color: #666666;">财务咨询</router-link>
				<router-link to="" style="color: #666666;">公司年报</router-link>
				<router-link to="" style="color: #666666;">公司公告</router-link>
				<router-link to="" style="color: #666666;">公司治理</router-link>
				<router-link to="" style="color: #666666;">服务咨询</router-link>
				<router-link to="" style="color: #666666;">视频咨询</router-link>

			</div>
		</el-col>
		<el-col :span="4">
			<div class="guanyu">
				<h2 style="color: #222222;font-size: 15px;">一 网站信息</h2>
				<br />
				<router-link to="" style="color: #666666;">法律声明</router-link>
				<router-link to="" style="color: #666666;">员工专区</router-link>
				<router-link to="" style="color: #666666;">专卖网络</router-link>
				<router-link to="" style="color: #666666;">网站地图</router-link>
			</div>
		</el-col>
		<el-col :span="8">
			<div class="footerseach">
				<div class="left">
					<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
						<el-input placeholder="请输入内容" v-model="ruleForm.inputcontent" class="input-with-select">
							<el-button slot="append" icon="el-icon-search"  @click="footerseachbtn()"></el-button>
						</el-input>
						</el-form>
						<br />
						<span>客服热线</span>
						<p>400-8860-315</p>
				</div>
				<div class="right">
				
						<img src="http://www.airmate-china.com/uploadfiles/image/bottom_ewm.jpg">
						<p>扫描二维码<br>关注官方微信</p>
				
				</div>
			</div>
			
		</el-col>
		<div style="clear: both;"></div>
		</div>

	</el-row>

		<div class="footertwo">
			<div class="footertwo_content">
				<div class="lefts">
					<p>
        <router-link to="/index_12" >联系我们</router-link><em></em>
        <router-link to="" >供应商登录</router-link><em></em>
        <router-link to="" >经销商登录</router-link><em></em>
        <router-link to="" >人力资源</router-link><em></em>
        <router-link to="" >网站地图</router-link><em></em>
        <router-link to="" >法律声明</router-link><em></em>
        <router-link to="" >企业邮箱</router-link>
      </p>
		
					<p style="margin-top: 10px;">Copyright © 1973-2019 艾美特电器(深圳)有限公司 <router-Link to='http://www.miitbeian.gov.cn/' >粤ICP备09180595号-1</router-Link>  ©版权所有</p>
				</div>
				<div class="rights">
					<img src="http://v.trustutn.org/images/cert/brand_bottom_small.jpg"/>
				</div>

			</div>
		</div>

	</div>
</template>
<style lang="scss" scoped>

	.webfooter {
		background: #f9f9f9;
		height: 270px;
		width: 100%;
		overflow:hidden;

        .webfootercontent{
			width: 76% !important;
			margin: 0 auto !important;
			margin-top: 45px !important;
		
		.guanyu a {
			margin-left: 20px;
			line-height: 25px;
			font-size: 12px;
			display: block;
		}

		.footerseach .left {
			float: left;
			width: 60%;
	     
	    span{
				color: #444444;
				margin-top:10px;
			}
			p{
				color: #005BAC;
				font-size: 40px;
				margin-top:10px;

			}
			}
		}

		.footerseach .right {
			float: right;
			width: 20%;
			text-align: center;

			P {
				font-size: 12px;
			}

		}
		
	}
	.footertwo{width: 100%;

	height: 50px;
	background: #303640;
	padding: 35px 0;
	.footertwo_content{
		width: 76%;
		height: auto;
		margin: 0 auto;

		.lefts{
			float: left;
			width: 60%;;
			height: 70px;
       a{
				 color: #a0a2a5;
				 font-size: 12px;
			 }
		em{
    width: 1px;
    height: 10px;
    background: url('http://www.airmate-china.com/cn/images/bottom_line.png') center center no-repeat;
    display: inline-block;
    margin: 0 10px;
}
		}
		.rights{
			float: right;
			width: 10%;;
		}
	}
	 
	}
</style>
<script>
	export default {
		name: 'app-footer',

		data() {
			return {
        ruleForm: {
			inputcontent:''
				},
				  rules: {
          inputcontent: [
            { required: true, message: '请输入搜索内容', trigger: 'blur' }
          ]
					
			}
			}
		},
methods:{
	//买房咨询
	footerseachbtn(formName) {
		this.$refs[formName].validate((valid) => {
				if (valid) {
						this.axios.get('',
								{
										params:{
												
										},
								}
						).then(res => {
								if (res.data.success){
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
}



	
	}
</script>
