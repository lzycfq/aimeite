<template>
	<el-col :span='24'>
		<div style="overflow:hidden;">
			<div class="mShopNavsecond">
				<div @click="house_consultation=true"><img src="../../../assets/images/dianhua.png"><span>买房咨询</span></div>
				<div @click="house_shuttle=true"><img src="../../../assets/images/jiesong.png"><span>看房接送</span></div>
				<div @click="house_member=true"><img src="../../../assets/images/youhui.png"><span>会员专享</span></div>
			</div>
			<el-dialog title="买房咨询" :visible.sync="house_consultation" class="mht">
				<div class="mzixun">
				
					<el-form :label-position="labelPosition" :model="ruleForm" :rules="rules" ref="houseConsultation" label-width="80px"
					 class="demo-ruleForm" @submit.native.prevent>
						<el-form-item prop="phone" class="zixunphone">
							<el-input v-model="ruleForm.phone" class="mdiabuttons" ref="phone" placeholder="请输入电话号码" @keyup.native.enter="houseConsultation('houseConsultation')"></el-input>
						</el-form-item>
						<el-form-item prop="desc">
							<el-input type="textarea" v-model="ruleForm.desc" ref="content" placeholder="请输入咨询内容"></el-input>
						</el-form-item>
						<p class="wenxintip">温馨提示：请正确填写您的姓名和手机号码，点击确定后，非晚间时间23：00-次日7：00,我们一小时内有专人跟您联系</p>
						<el-form-item>
							<el-button class="diabutton" @click="houseConsultation('houseConsultation')">立即咨询</el-button>
						</el-form-item>
					</el-form>
				</div>
			</el-dialog><!-- 买房咨询结束 -->
			<el-dialog title="看房接送" :visible.sync="house_shuttle" class="mht">
				<div class="mzixun">
				<!-- 	<p align="center" class="zixun_p">请填写您的信息，以便经纪人联系您看房</p> -->
					<el-form :label-position="labelPosition" :model="ruleForm" :rules="rules" ref="houseShuttle" label-width="80px"
					 class="demo-ruleForm" @submit.native.prevent>
						<el-form-item prop="phone" class="zixunphone">
							<el-input v-model="ruleForm.phone" class="mdiabuttons" ref="phone" placeholder="请输入电话号码" @keyup.native.enter="houseShuttle('houseShuttle')"></el-input>
						</el-form-item>
						<el-form-item prop="desc">
							<el-input type="textarea" v-model="ruleForm.desc" ref="content" placeholder="请输入咨询内容"></el-input>
						</el-form-item>
						<p class="wenxintip">温馨提示：请正确填写您的姓名和手机号码，点击确定后，非晚间时间23：00-次日7：00,我们一小时内有专人跟您联系</p>
						<el-form-item>
							<el-button class="diabutton" @click="houseShuttle('houseShuttle')">立即咨询</el-button>
						</el-form-item>
					</el-form>
				</div>
			</el-dialog><!-- 买房接送结束 -->
			<div class="mhuiyuans">
				<el-dialog title="会员专享" :visible.sync="house_member" class="mhts" v-if="coupon">
					<div class="mhuiyuan">
					<p align="center"><img src="../../../assets/images/diaguan.png" /></p>
						<p align="center"><label class="mheader">VIP 专享</label></p>
						<p align="center"><label class="mheader_1">{{coupon.name}}</label></p>
						<p align="center" class="mpheader"><label class="mheader_2">{{coupon.content}}</label></p>
						<p align="center" class="mpheader_1"><label class="mheader_4">还剩下<span>{{coupon.number}}</span>名 {{coupon.expire}}止</label></p>
						<el-form :label-position="labelPosition" :model="ruleFormss" :rules="huiyuanrules" ref="houseMember" class="mhuiyuanform" @submit.native.prevent>
							<el-form-item prop="phonename">
								<el-input v-model="ruleFormss.phonename" ref="phone" placeholder="请输入电话号码" @keyup.native.enter="houseMember('houseMember')"></el-input>
							</el-form-item>
							<div class="mhuiyuanbuttons">
								<el-button class="huiyuanrules" type="danger" @click="houseMember('houseMember')">确定</el-button>
							</div>
						</el-form>
					</div> 
						
				</el-dialog><!-- 会员专享 -->
			</div>
		</div>
	</el-col>
</template>
<style scoped>
	/* .mhts>>>.el-dialog {
		border-radius: 50%;
		box-sizing: border-box;
		background: none !important;
		width: 69%;

	} */
	@media screen and (min-width:320px){
		.mhts>>>.el-dialog {
			border-radius: 50%;
			box-sizing: border-box;
			background: none !important;
			width:68%;
		
		} 
		/* 会员专享 */
			.mhts>>>.el-dialog__body {
				padding: 0px 0px;
				color: #606266;
				font-size: 14px;
			}
		
			.mhts>>>.el-dialog__header {
				display: none;
			}
		
			.el-dialog__body .mhuiyuan {
				width: 100%;
				background: url('http://test.anjiazhixun.com/img/dialogbg.png');
				background-size: 100% 100%;
				
			}
		
			.mhuiyuans .mhuiyuan p .mheader {
				font-size: 1.5rem;
		
				color: #f6ff00;
			}
		
			.mhuiyuans .mhuiyuan p .mheader_1 {
				font-size: 1.3rem;
		
				color: #feffca;
			}
		
			.mhuiyuans .mhuiyuan p .mheader_2 {
				font-size: 20px;
		
				color: #e41833;
			}
		
			.mhuiyuans .mhuiyuan p .mheader_3 {
				font-size: 1.2rem;
				font-weight: bold;
		
				color: black;
			}
		
			.mhuiyuans .mhuiyuan .mpheader {
			    position: relative;
		  top: 1rem;
		  color: #e41833;
		  letter-spacing: 1px;
			}
		
			.mhuiyuans .mhuiyuan p img {
			
				    width: 1rem;
		  height: 0.8rem;
		  margin-top: 1rem;
			}
		
			.mhuiyuans .mhuiyuan p .mheader_4 {
			    color: white;
		  font-weight: 500;
		
		  margin-bottom: 0.8rem;
		  font-size: 1rem;
			}
		
			.mhuiyuans .mhuiyuan .mpheader_1 {
				margin-top: 5.5ex;
		
				margin-bottom: 1.5ex;
			}
		
			.mhuiyuans .mhuiyuan .mpheader_1 span {
				color: #f6ff00;
				font-size: 1rem;
		
			}
		
			.mhuiyuans .mhuiyuan .mhuiyuanform {
				width: 80%;
				margin: 0 auto;
			}
		
			.mhuiyuans .mhuiyuan .mhuiyuanform .el-form-item__content {
				line-height: 40px;
				position: relative;
				font-size: 14px;
			}
		
			.mhts>>>.mhuiyuan .mhuiyuanform .mhuiyuanbuttons {
				width: 70%;
				margin: 0 auto;
				
			}
		
			.mhts>>>.mhuiyuan .mhuiyuanform .huiyuanrules {
		
				background: url('http://test.anjiazhixun.com/img/dialogbtnbg.png');
				    width: 9rem;
		  height: 6ex;
		  border: none;
		position: relative;
		top: 0.5rem;
		  color: #e43036;
		  margin-bottom: 1.5rem;
		  background-size: 100% 100%;
			}
		
	}
	@media screen and (min-width:415px){
		 .mhts>>>.el-dialog {
		 	border-radius: 50%;
		 	box-sizing: border-box;
		 	background: none !important;
		 	width: 240px;
		 
		 } 
		 /* 会员专享 */
		 	.mhts>>>.el-dialog__body {
		 		padding: 0px 0px;
		 		color: #606266;
		 		font-size: 14px;
		 	}
		 
		 	.mhts>>>.el-dialog__header {
		 		display: none;
		 	}
		 
		 	.el-dialog__body .mhuiyuan {
		 		width: 100%;
		 		background: url('http://test.anjiazhixun.com/img/dialogbg.png');
		 		background-size: 100% 100%;
		 		
		 	}
		 
		 	.mhuiyuans .mhuiyuan p .mheader {
		 		font-size: 1.5rem;
		 
		 		color: #f6ff00;
		 	}
		 
		 	.mhuiyuans .mhuiyuan p .mheader_1 {
		 		font-size: 1.3rem;
		 
		 		color: #feffca;
		 	}
		 
		 	.mhuiyuans .mhuiyuan p .mheader_2 {
		 		font-size: 20px;
		 
		 		color: #e41833;
		 	}
		 
		 	.mhuiyuans .mhuiyuan p .mheader_3 {
		 		font-size: 1.2rem;
		 		font-weight: bold;
		 
		 		color: black;
		 	}
		 
		 	.mhuiyuans .mhuiyuan .mpheader {
		 	    position: relative;
		   top: 1rem;
		   color: #e41833;
		   letter-spacing: 1px;
		 	}
		 
		 	.mhuiyuans .mhuiyuan p img {
		 	
		 		    width: 1rem;
		   height: 0.8rem;
		   margin-top: 1rem;
		 	}
		 
		 	.mhuiyuans .mhuiyuan p .mheader_4 {
		 	    color: white;
		   font-weight: 500;
		 
		   margin-bottom: 0.8rem;
		   font-size: 1rem;
		 	}
		 
		 	.mhuiyuans .mhuiyuan .mpheader_1 {
		 		margin-top: 5.5ex;
		 
		 		margin-bottom: 1.5ex;
		 	}
		 
		 	.mhuiyuans .mhuiyuan .mpheader_1 span {
		 		color: #f6ff00;
		 		font-size: 1rem;
		 
		 	}
		 
		 	.mhuiyuans .mhuiyuan .mhuiyuanform {
		 		width: 80%;
		 		margin: 0 auto;
		 	}
		 
		 	.mhuiyuans .mhuiyuan .mhuiyuanform .el-form-item__content {
		 		line-height: 40px;
		 		position: relative;
		 		font-size: 14px;
		 	}
		 
		 	.mhts>>>.mhuiyuan .mhuiyuanform .mhuiyuanbuttons {
		 		width: 70%;
		 		margin: 0 auto;
		 		
		 	}
		 
		 	.mhts>>>.mhuiyuan .mhuiyuanform .huiyuanrules {
		 
		 		background: url('http://test.anjiazhixun.com/img/dialogbtnbg.png');
		 		    width: 9rem;
		   height: 6ex;
		   border: none;
		 position: relative;
		 top: 0.5rem;
		   color: #e43036;
		   margin-bottom: 1.5rem;
		   background-size: 100% 100%;
		 	}
		 
	}

@media screen and (min-width:768px){
		 .mhts>>>.el-dialog {
		 	border-radius: 50%;
		 	box-sizing: border-box;
		 	background: none !important;
		 	width: 250px;
		 
		 } 
		 /* 会员专享 */
		 	.mhts>>>.el-dialog__body {
		 		padding: 0px 0px;
		 		color: #606266;
		 		font-size: 14px;
		 	}
		 
		 	.mhts>>>.el-dialog__header {
		 		display: none;
		 	}
		 
		 	.el-dialog__body .mhuiyuan {
		 		width: 100%;
		 		background: url('http://test.anjiazhixun.com/img/dialogbg.png');
		 		background-size: 100% 100%;
		 		
		 	}
		 
		 	.mhuiyuans .mhuiyuan p .mheader {
		 		font-size: 1.5rem;
		 
		 		color: #f6ff00;
		 	}
		 
		 	.mhuiyuans .mhuiyuan p .mheader_1 {
		 		font-size: 1.3rem;
		 
		 		color: #feffca;
		 	}
		 
		 	.mhuiyuans .mhuiyuan p .mheader_2 {
		 		font-size: 20px;
		 
		 		color: #e41833;
		 	}
		 
		 	.mhuiyuans .mhuiyuan p .mheader_3 {
		 		font-size: 1.2rem;
		 		font-weight: bold;
		 
		 		color: black;
		 	}
		 
		 	.mhuiyuans .mhuiyuan .mpheader {
		 	    position: relative;
		   top: 15px;
		   color: #e41833;
		   letter-spacing: 1px;
		 	}
		 
		 	.mhuiyuans .mhuiyuan p img {
		 	
		 		    width: 1rem;
		   height: 0.8rem;
		   margin-top: 1rem;
		 	}
		 
		 	.mhuiyuans .mhuiyuan p .mheader_4 {
		 	    color: white;
		   font-weight: 500;
		 
		   margin-bottom: 0.8rem;
		   font-size: 1rem;
		 	}
		 
		 	.mhuiyuans .mhuiyuan .mpheader_1 {
		 		margin-top: 5.5ex;
		 
		 		margin-bottom: 1.5ex;
		 	}
		 
		 	.mhuiyuans .mhuiyuan .mpheader_1 span {
		 		color: #f6ff00;
		 		font-size: 1rem;
		 
		 	}
		 
		 	.mhuiyuans .mhuiyuan .mhuiyuanform {
		 		width: 80%;
		 		margin: 0 auto;
		 	}
		 
		 	.mhuiyuans .mhuiyuan .mhuiyuanform .el-form-item__content {
		 		line-height: 40px;
		 		position: relative;
		 		font-size: 14px;
		 	}
		 
		 	.mhts>>>.mhuiyuan .mhuiyuanform .mhuiyuanbuttons {
		 		width: 70%;
		 		margin: 0 auto;
		 		
		 	}
		 
		 	.mhts>>>.mhuiyuan .mhuiyuanform .huiyuanrules {
		 
		 		background: url('http://test.anjiazhixun.com/img/dialogbtnbg.png');
		 		    width: 11rem;
		   height: 6ex;
		   border: none;
		 position: relative;
		 top: 0.5rem;
		   color: #e43036;
		   margin-bottom: 1.5rem;
		   background-size: 100% 100%;
		 	}
		 
	}
	@media screen and (min-width:1024px){
			 .mhts>>>.el-dialog {
			 	border-radius: 50%;
			 	box-sizing: border-box;
			 	background: none !important;
			 	width: 270px;
			 
			 } 
			 
			  /* 会员专享 */
			 	.mhts>>>.el-dialog__body {
			 		padding: 0px 0px;
			 		color: #606266;
			 		font-size: 14px;
			 	}
			 
			 	.mhts>>>.el-dialog__header {
			 		display: none;
			 	}
			 
			 	.el-dialog__body .mhuiyuan {
			 		width: 100%;
			 		background: url('http://test.anjiazhixun.com/img/dialogbg.png');
			 		background-size: 100% 100%;
			 		
			 	}
			 
			 	.mhuiyuans .mhuiyuan p .mheader {
			 		font-size: 1.5rem;
			 
			 		color: #f6ff00;
			 	}
			 
			 	.mhuiyuans .mhuiyuan p .mheader_1 {
			 		font-size: 1.3rem;
			 
			 		color: #feffca;
			 	}
			 
			 	.mhuiyuans .mhuiyuan p .mheader_2 {
			 		font-size: 20px;
			 
			 		color: #e41833;
			 	}
			 
			 	.mhuiyuans .mhuiyuan p .mheader_3 {
			 		font-size: 1.2rem;
			 		font-weight: bold;
			 
			 		color: black;
			 	}
			 
			 	.mhuiyuans .mhuiyuan .mpheader {
			 	    position: relative;
			   top: 15px;
			   color: #e41833;
			   letter-spacing: 1px;
			 	}
			 
			 	.mhuiyuans .mhuiyuan p img {
			 	
			 		    width: 1rem;
			   height: 0.8rem;
			   margin-top: 1rem;
			 	}
			 
			 	.mhuiyuans .mhuiyuan p .mheader_4 {
			 	    color: white;
			   font-weight: 500;
			 
			   margin-bottom: 0.8rem;
			   font-size: 1rem;
			 	}
			 
			 	.mhuiyuans .mhuiyuan .mpheader_1 {
			 		margin-top: 5.5ex;
			 
			 		margin-bottom: 1.5ex;
			 	}
			 
			 	.mhuiyuans .mhuiyuan .mpheader_1 span {
			 		color: #f6ff00;
			 		font-size: 1rem;
			 
			 	}
			 
			 	.mhuiyuans .mhuiyuan .mhuiyuanform {
			 		width: 80%;
			 		margin: 0 auto;
			 	}
			 
			 	.mhuiyuans .mhuiyuan .mhuiyuanform .el-form-item__content {
			 		line-height: 40px;
			 		position: relative;
			 		font-size: 14px;
			 	}
			 
			 	.mhts>>>.mhuiyuan .mhuiyuanform .mhuiyuanbuttons {
			 		width: 70%;
			 		margin: 0 auto;
			 		
			 	}
			 
			 	.mhts>>>.mhuiyuan .mhuiyuanform .huiyuanrules {
			 
			 		background: url('http://test.anjiazhixun.com/img/dialogbtnbg.png');
			 		    width: 11rem;
			   height: 6ex;
			   border: none;
			 position: relative;
			 top: 0.5rem;
			   color: #e43036;
			   margin-bottom: 1.5rem;
			   background-size: 100% 100%;
			 	}
		}
	
	/* .mht>>>.el-dialog {
		position: relative;
		margin: 0 auto 50px;
		border-radius: 2px;
		-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
		box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		background: white;
		width: 95%;
	}
 */
@media screen and (min-width:320px) and (max-width:414px){
	 .mht>>>.el-dialog {
		position: relative;
		margin: 0 auto 50px;
		border-radius: 2px;
		-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
		box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		background: white;
		width: 95%;
	}
}
@media screen and (min-width:415px) and (max-width:768px){
	 .mht>>>.el-dialog {
		position: relative;
		margin: 0 auto 50px;
		border-radius: 2px;
		-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
		box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		background: white;
		width: 70%;
	}
}
@media screen and (min-width:769px) and (max-width:1024px){
	 .mht>>>.el-dialog {
		position: relative;
		margin: 0 auto 50px;
		border-radius: 2px;
		-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
		box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		background: white;
		width: 70%;
	}
}
	.mht>>>.el-dialog__header {
		border-bottom: #ebebeb 1px solid;
	}

	.mht>>>.el-dialog__body {
		padding: 10px 10px;
		color: #606266;
		font-size: 14px;
	}

	.el-dialog__body .mzixun .el-input__inner {
		height: 40px;
		font-size: 20px;
		width: 90%;
	}
 .mdiabuttons {
      
       float: left;
        color: white;
      
      
        text-align: center;
    }
	.mht>>>.el-dialog__body .mzixun .el-form-item__content{
		margin-left: 0% !important;
		margin-bottom: 15px;
	}
	.mht>>>.el-dialog__body .mzixun .el-form-item__content .radio{
		float: right;
	}
	
	.mht>>>.el-dialog__body .mzixun .el-form-item__content .radio  .el-radio-button__orig-radio:checked+.el-radio-button__inner {
	    color: #fff;
	    background-color: #E03236;
	    border-color: #E03236;
	    -webkit-box-shadow: -1px 0 0 0 #E03236;
	    box-shadow: -1px 0 0 0 #E03236;
	}
	.mht>>>.el-dialog__body .mzixun .zixun_p{
		height: 55px;
		color: #888888;
		line-height: 55px;
		font-size: 16px;
	}
	
	.el-input__inner {
		-webkit-appearance: none;
		background-color: #fff;
		background-image: none;
		border-radius: 4px;
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
		text-indent: 10px;
		-webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
		transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
		width: 100%;
	}

	.el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before {
		content: '';
		color: #f56c6c;
		margin-right: 4px;
	}


	.el-dialog__body .mzixun .wenxintip {
		width: 100%;
		margin: 0 auto;
		margin-bottom: 10px;
		text-align: left;
	}

	.el-form-item {
		margin-bottom: 10px;
	}

	.el-form-item:nth-of-type(4) {
		margin-bottom: 0px;
		height: 80px;
	}

	.el-form-item:nth-of-type(5) {
		margin-bottom: 0px;
	}

	.diabutton {
		width: 100%;
		background: #ea353b;
		color: white;
		height: 45px;

		text-align: center;
	}

	.el-dialog__body .mzixun .mjiesongimg {
		width: 100%;
		margin-bottom: 10px;
	}

	.el-dialog__body .mzixun .mjiesonglabel {
		font-size: 16px;
		margin-bottom: 15px;
	}

	.el-header {
		min-width: 0;
		height: 0 !important;
		margin-bottom: 0;
	}

	/*探头*/


	/*底部栏目*/
	.mShopNavsecond {
		width: 100%;
		background: #293250;
		height: 5rem;
	}
	
	.mShopNavsecond img {
		height: 2.3rem;
		width: 2.3rem;
		margin-top: 0;
	}
@media screen and (min-width:768px){
		.mShopNavsecond {
			width: 100%;
			background: #293250;
			height: 7rem;
		}
		.mShopNavsecond img {
			height: 3.3rem;
			width: 3.3rem;
			margin-top: 0;
		}
	}
	.mShopNavsecond div {
		width: 33%;
		text-decoration: none;
		height: 60px;
		text-align: center;
		float: left;
		margin-top: 10px;
	}

	.mShopNavsecond div span {
		width: 100%;
		float: left;
		position: relative;
		line-height: 20px;
		font-size: 0.95rem;
		color: white;
	}
</style>
<script>
	export default {
		props: ['info'],
		data() {
			return {
				house_consultation: false,
				house_shuttle: false,
				house_member: false,
				coupon:[],
				labelPosition: 'right',
				ruleForm: {
					phone: '',
					desc: '',
				},
				rules: {
					phone: [{
							required: true,
							message: '请输入电话号码',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 25,
							message: '请输入正确电话号码',
							trigger: 'blur'
						}
					],
					desc: [{
						required: true,
						message: '请输入咨询内容',
						trigger: 'blur'
					}]
				},
				ruleForms: {
					phonename: '',
					jiesongname: ''
				},
				ruleFormss: {
					phonename: '',
				},
				jiesongrules: {
					phonename: [{
							required: true,
							message: '请输入电话号码',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 25,
							message: '请输入正确电话号码',
							trigger: 'blur'
						}
					],
					jiesongname: [{
						required: true,
						message: '请填写您的姓名',
						trigger: 'blur'
					}]
				},
				huiyuanrules: {
					phonename: [{
							required: true,
							message: '请输入电话号码',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 25,
							message: '请输入正确电话号码',
							trigger: 'blur'
						}
					],
				},
			}

		},
		created(){
		  	this.buildingCoupon();
		},
		methods: {
			//买房咨询
			houseConsultation(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('/admin/customer', {
							params: {
                                'ip':returnCitySN["cip"],
								'building_id': this.id,
								'phone': this.$refs.phone.value,
								'content': this.$refs.content.value,
								'initiative': 0,
								'info_type': 4,
								'title': typeof this.info === 'undefined' ? '官网买房咨询' : this.info.name + ',买房资讯',
								'element': '买房咨询',
							},
						}).then(res => {
							if (res.data.success) {
								this.house_consultation = false;
							}
							alert(res.data.message);
							//console.log(res);
						}).catch(function(error) {
							console.log(error);
						});
						// 表单提交
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			// 专车接送
			houseShuttle(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						// 表单提交
						this.axios.get('/admin/customer', {
							params: {
                                'ip':returnCitySN["cip"],
								'building_id': this.id,
								'phone': this.$refs.phone.value,
								'name': this.$refs.content.value,
								'initiative': 0,
								'info_type': 3,
								'title': typeof this.info === 'undefined' ? '官网专车接送' : this.info.name + ',专车接送',
								'element': '专车接送',
							},
						}).then(res => {
							if (res.data.success) {
								this.house_shuttle = false;
							}
							alert(res.data.message);
							//console.log(res);
						}).catch(function(error) {
							console.log(error);
						});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			// 会员专享
			houseMember(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						// 表单提交
						this.axios.get('/admin/customer', {
							params: {
                                'ip':returnCitySN["cip"],
								'building_id': this.id,
								'phone': this.$refs.phone.value,
								'initiative': 0,
								'info_type': 2,
								'title': typeof this.info === 'undefined' ? '官网会员优惠' : this.info.name + ',会员优惠',
								'element': '会员优惠',
								'coupon':this.coupon.id,
							},
						}).then(res => {
							if (res.data.success) {
								this.house_member = false;
								this.buildingCoupon();
							}
							alert(res.data.message);
							//console.log(res);
						}).catch(function(error) {
							console.log(error);
						});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
            buildingCoupon() {
                this.axios.get('/admin/coupon').then(res => {
                    this.coupon = res.data //请求
                }).catch(function(error) {
                    console.log(error);
                })
            },
		},

		//		控制头尾部分是否显示
		beforeCreate: function() {
			this.$emit('public_header', false);
			this.$emit('public_footer', false);
		},

	}
</script>
