<template>
    <el-col :span="24">
		
        <div style="overflow:hidden;">
            <div class="pctantou">
                <div class="pctantoucontent">
                    <el-col :span="17">
                        <div class="ShopNavsecond">
                            <div><img src="../../../assets/images/dianhua.png" @click="house_consultation = true"><span @click="house_consultation = true">买房咨询</span></div>
                            <div><img src="../../../assets/images/jiesong.png" @click="house_shuttle = true"><span @click="house_shuttle = true">看房接送</span></div>
                            <div><img src="../../../assets/images/youhui.png" @click="house_member = true"><span @click="house_member = true">会员优惠</span></div>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="erweima">
                            <div class="erleft">
                                <img src="../../../assets/images/mobilecode.png">
                            </div>
                            <div class="erlright">
                                <p><label>扫码</label>关注新版</p>
                                <p>移动找房更方便</p>
                            </div>
                        </div>
                    </el-col>
                </div>
            </div>

            <el-dialog title="买房咨询" :visible.sync="house_consultation" class="webdia">
                <div class="zixun">
				<!-- 	<p align="center" class="zixun_p">请填写您的信息，以便经纪人联系您看房</p> -->
                    <el-form :label-position="labelPosition" :model="ruleForm" :rules="rules" ref="houseConsultation" label-width="80px" class="demo-ruleForm" @submit.native.prevent>
                        <el-form-item prop="phone" class="zixunphone">
                            <el-input v-model="ruleForm.phone"  class="diabuttons" ref="phone" placeholder="请输入电话号码" @keyup.native.enter="houseConsultation('houseConsultation')"></el-input>
                        </el-form-item>
                        <el-form-item prop="desc">
                            <el-input type="textarea" v-model="ruleForm.desc" ref="content" placeholder="请输入咨询内容" @keyup.native.enter="houseConsultation('houseConsultation')"></el-input>
                        </el-form-item>
                        <p class="wenxintip">温馨提示：请正确填写您的姓名和手机号码，点击确定后，非晚间时间23：00-次日7：00，我们一小时内有专人跟您联系</p>
                        <el-form-item>
                            <el-button class="diabutton" @click="houseConsultation('houseConsultation')">立即咨询</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-dialog>
            <el-dialog title="看房接送" :visible.sync="house_shuttle"  class="webdia">
                <div class="zixun">
                <!-- 	<p align="center" class="zixun_p">请填写您的信息，以便经纪人联系您看房</p> -->
                    <el-form :label-position="labelPosition" :model="ruleForm" :rules="rules" ref="houseConsultation" label-width="80px" class="demo-ruleForm" @submit.native.prevent>
                        <el-form-item prop="phone" class="zixunphone">
                            <el-input v-model="ruleForm.phone"  class="diabuttons" ref="phone" placeholder="请输入电话号码" @keyup.native.enter="houseConsultation('houseConsultation')"></el-input>
                        </el-form-item>
                        <el-form-item prop="desc">
                            <el-input type="textarea" v-model="ruleForm.desc" ref="content" placeholder="请输入咨询内容" @keyup.native.enter="houseConsultation('houseConsultation')"></el-input>
                        </el-form-item>
                        <p class="wenxintip">温馨提示：请正确填写您的姓名和手机号码，点击确定后，非晚间时间23：00-次日7：00，我们一小时内有专人跟您联系</p>
                        <el-form-item>
                            <el-button class="diabutton" @click="houseConsultation('houseConsultation')">立即咨询</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-dialog>
            <div class="huiyuans">
                <el-dialog  :visible.sync="house_member" class="ht">
                    <div class="huiyuan">
                        <p align="center"><img  src="../../../assets/images/diaguan.png"/></p>
                        <p align="center" ><label class="header">VIP 专享</label></p>
                        <p align="center" ><label class="header_1">{{coupon.name}}</label></p>
                        <p align="center" class="pheader"><label class="header_2">{{coupon.content}}</label></p>
                        <p align="center" class="pheader_1"><label class="header_4">还剩下<span>{{coupon.number}}</span>名 {{coupon.expire}}止</label></p>
                        <el-form :label-position="labelPosition" :model="ruleFormss" :rules="huiyuanrules" ref="houseMember"  class="huiyuanform" @submit.native.prevent>
                            <el-form-item  prop="phonename">
                                <el-input v-model="ruleFormss.phonename" ref="phone" placeholder="请输入电话号码" @keyup.native.enter="houseMember('houseMember')"></el-input>
                            </el-form-item>
                            <div class="huiyuanbuttons"><el-button class="huiyuanbutton" type="danger" @click="houseMember('houseMember')">确定</el-button></div>
                        </el-form>
                    </div>
                </el-dialog>
            </div>
        </div>
    </el-col>
</template>


<style scoped>
	
    .ht>>>.el-dialog {
        border-radius:50%;
        padding: 0px !important;
        background: none !important;
        width: 20%;

    }
    /* 会员专享 */
    .ht>>> .el-dialog__body {
        padding: 0px 0px;
        color: #606266;
        font-size: 14px;
    }
    .ht>>> .el-dialog__header{
        display: block;
		padding:0px !important;
    }
	.ht>>> .el-dialog__header .el-dialog__headerbtn .el-dialog__close{
		color: white;
		font-size: 25px;
		position: relative;
		left: 50px;
		top: -10px;
	}
    .el-dialog__body .huiyuan {
        width: 100%;
        background:url(../../../assets/images/dialogbg.png);
        background-size: 100% 100%;
        height: 360px;
    }

    .huiyuans .huiyuan p .header{
        font-size:2rem;

        color: #f6ff00;
    }
    .huiyuans .huiyuan p .header_1{
        font-size:1.4rem;

        color: #feffca;
    }
    .huiyuans .huiyuan p .header_2{
        font-size:25px;

        color: #e41833;
    }
    .huiyuans .huiyuan p .header_3{
        font-size:1.4rem;
        font-weight: bold;

        color: black;
    }
    .huiyuans .huiyuan .pheader{
        top: 20px;
		position: relative;
    }
    .huiyuans .huiyuan p img{
        margin-top: 10px;
    }
    .huiyuans .huiyuan p .header_4{
        font-size:17px;

        color: white;
    }
    .huiyuans .huiyuan .pheader_1{
        margin-top: 50px;
		         letter-spacing: 2px;
        margin-bottom: 10px;
    }
    .huiyuans .huiyuan .pheader_1 span{
        color: #f6ff00;
        font-size:1.5rem;

    }

    .huiyuans .huiyuan .huiyuanform{
        width: 80%;
        margin: 0 auto;
    }
    .huiyuans .huiyuan .huiyuanform 	.el-form-item__content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
    }
    .huiyuans .huiyuan .huiyuanform .huiyuanbuttons{
        width: 70%;
        margin: 0 auto;
        height: 50px;
    }
    .huiyuans .huiyuan .huiyuanform .huiyuanbutton{

        background: url(../../../assets/images/dialogbtnbg.png);
        width: 100%;
        text-align: center;
        border: none;
        margin: 0 auto;
        margin-top: 10px;
        color: #e43036;
        height: 50px;
        background-size: 100% 100%;
    }
      .webdia >>>.el-dialog {
        position: relative;
        margin: 0 auto 50px;
        border-radius: 2px;
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
        box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background:white;
         width: 450px;  
	}
	
   .webdia >>> .el-dialog__header {
        border-bottom: #ebebeb 1px solid;
    }
    .webdia >>> .el-dialog__body {
        padding: 10px 40px;
        color: #606266;
        font-size: 14px;
    }
.webdia>>>.el-dialog__body .zixun .zixun_p{
	height: 55px;
	color: #888888;
	line-height: 55px;
	font-size: 16px;
}

    .el-dialog__body .zixun .el-input__inner {
        height: 40px;
        font-size: 20px;
        width: 90%;
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

    .el-textarea {
        display: inline-block;
        width: 100%;
        vertical-align: bottom;
        font-size: 14px;
    }

    .el-dialog__body .zixun .wenxintip {
      
        margin: 0 auto;
        margin-bottom: 10px;
    }

    .el-form-item {
        margin-bottom:25px;
    }

    .el-form-item:nth-of-type(4) {
        margin-bottom: 0px;
        height: 80px;
    }

    .el-form-item:nth-of-type(5) {
        margin-bottom: 0px;
    }
 .diabuttons {
        width: 100%;
       float: left;
        color: white;
      
      
        text-align: center;
    }
	.webdia>>>.el-dialog__body .zixun .el-form-item__content{
		margin-left: 0% !important;
	}
	.webdia>>>.el-dialog__body .zixun .el-form-item__content .radio{
		float: right;
		
	}
		.webdia>>>.el-dialog__body .zixun .el-form-item__content .radio .el-radio-button__inner {
    
    padding: 12px 15px;
  
}

.webdia>>>.el-dialog__body .zixun .el-form-item__content .radio  .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: #fff;
    background-color: #ea353b;
    border-color: #ea353b;
    -webkit-box-shadow: -1px 0 0 0 #ea353b;
    box-shadow: -1px 0 0 0 #ea353b;
}
.webdia>>>.el-dialog__body .zixun .el-form-item__content .el-form-item__error {
    color: #f56c6c;
    font-size: 12px; 
    padding-top: 8px;
    position: absolute;
    top: 100%;
    left: 0;
}

    .diabutton {
        width: 100%;
        background: #ea353b;
        color: white;
      height: 50px;

        text-align: center;
    }
	.diabutton >>>span{
			      font-size: 18px;
			}
		

    .el-dialog__body .zixun .jiesongimg{
        width: 100%;
        margin-bottom: 10px;
    }
    .el-dialog__body .zixun  .jiesonglabel{
        font-size: 16px;
        margin-bottom: 15px;
    }
    .el-header {
        min-width: 0;
        height: 0 !important;
        margin-bottom: 0;
    }

    /*探头*/

    .pctantou {
		
		
        height: 170px;
        background: black;
    }

    .pctantou .pctantoucontent {
        width: 1280px;
        height: 170px;
        margin: 0 auto;
    }

    .pctantou .pctantoucontent .ShopNavsecond {
        width: 65%;
        margin: 0 auto;
    }

    .ShopNavsecond img {
        height: 76px;
        width: 76px;
        margin-top: 0;
    }

    .ShopNavsecond div {
        width: 33%;
        text-decoration: none;
        height: 70px;
        text-align: center;
        float: left;
        margin-top: 30px;
    }

    .ShopNavsecond div span {
        width: 100%;
        float: left;
        position: relative;
        line-height: 30px;
        font-size: 18px;
        color: white;
    }

    .pctantou .pctantoucontent .erweima {
        width: 100%;
        float: right;
        margin-top: 30px;
    }

    .pctantou .pctantoucontent .erweima .erleft {
        width: 28%;
        height: 100px;
        float: left;
        overflow: hidden;
    }

    .pctantou .pctantoucontent .erweima .erlright {
        width: 65%;
        height: 70px;
        float: right;
        margin-top: 20px;
        line-height: 30px;
        color: white;
        overflow: hidden;
    }

    .pctantou .pctantoucontent .erweima .erlright p {
        font-size: 1.25rem;
    }

    .pctantou .pctantoucontent .erweima .erlright p label {
        color: yellow;
        font-size: 1.25rem;
    }

    .pctantou .pctantoucontent .erweima .erleft img {
        width: 100%;
        height: 100%;
        margin-top: 0;
        border-radius: 0;
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
                labelPosition: 'right',
                ruleForm: {
                    phone: '',
                    desc: '',
                },
                coupon:[],
				zixunradio:"男",
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
                ruleForms:{
                    phonename:'',
                    jiesongname:''
                },
                ruleFormss:{
                    phonename:'',
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
                    jiesongname:[{
                        required: true,
                        message: '请填写您的姓名',
                        trigger: 'blur'
                    }
                    ]
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
                        this.axios.get('/admin/customer',
                            {
                                params:{
                                    'ip':returnCitySN["cip"],
                                    'building_id':this.id,
                                    'phone':this.$refs.phone.value,
                                    'content':this.$refs.content.value,
                                    'initiative':0,
                                    'info_type':4,
                                    'title':typeof this.info === 'undefined'?'官网买房咨询':this.info.name + ',买房资讯',
                                    'element':'买房咨询',
                                },
                            }
                        ).then(res => {
                            if (res.data.success){
                                this.house_consultation = false;
                            }
                            alert(res.data.message);
                            this.buildingCoupon();
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
                        this.axios.get('/admin/customer',
                            {
                                params:{
                                    'ip':returnCitySN["cip"],
                                    'building_id':this.id,
                                    'phone':this.$refs.phone.value,
                                    'name':this.$refs.name.value,
                                    'initiative':0,
                                    'info_type':3,
                                    'title':typeof this.info === 'undefined'?'官网专车接送':this.info.name + ',专车接送',
                                    'element':'专车接送',
                                },
                            }
                        ).then(res => {
                            if (res.data.success){
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
                        this.axios.get('/admin/customer',
                            {
                                params:{
                                    'ip':returnCitySN["cip"],
                                    'building_id':this.id,
                                    'phone':this.$refs.phone.value,
                                    'initiative':0,
                                    'info_type':2,
                                    'title':typeof this.info === 'undefined'?'官网会员优惠':this.info.name + ',会员优惠',
                                    'element':'会员优惠',
                                    'coupon':this.coupon.id,
                                },
                            }
                        ).then(res => {
                            if (res.data.success){
                                this.house_member = false;
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


