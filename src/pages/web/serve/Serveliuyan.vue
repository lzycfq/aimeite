<template>
	<el-col :span="24">
		<serveheaders></serveheaders>
		<div style="clear: both;"></div>
		<div class="servezhishi">
			<router-link to="serveshouhou" class='servezhishi_a'>售后服务</router-link>
			<router-link to="servewangdian" class='servezhishi_a'>服务网点</router-link>
			<router-link to="servewenti" class='servezhishi_a '>常见问题</router-link>
			<router-link to="servelianxi" class='servezhishi_a '>客服联系</router-link>
			<router-link to="servezhongxin" class='servezhishi_a '>下载中心</router-link>
			<router-link to="serveliuyan" class='servezhishi_a active'>在线留言</router-link>
		</div>
		
		<div class="Form">
			<el-form ref="liuyanform" :rules="liuyanrules" :model="liuyanform" label-width="80px" @submit.native.prevent>

				<el-form-item label="姓名：">
					<el-input v-model="liuyanform.name" rel='name'></el-input>
				</el-form-item>

				<el-form-item label="电话：">
					<el-input v-model="liuyanform.phone" rel='phone'></el-input>
				</el-form-item>

				<el-form-item label="Email：">
					<el-input v-model="liuyanform.Email" rel='Email'></el-input>
				</el-form-item>

				<el-form-item label="地址：">
					<el-input v-model="liuyanform.adress" rel='adress'></el-input>
				</el-form-item>
				<el-form-item label="留言内容">
					<el-input type="textarea" v-model="liuyanform.desc" rel="desc"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('liuyanform')">搜索</el-button>

				</el-form-item>
			</el-form>
		</div>
	</el-col>
</template>
<style lang="scss" scoped>
	.Form {
		max-width: 490px;
		margin: 0 auto;
		padding: 2% 0;
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
	// 	import 'swiper/dist/css/swiper.css';
	// 	import {
	// 		swiper,
	// 		swiperSlide
	// 	} from 'vue-awesome-swiper';
	export default {

		data() {
			return {
				liuyanform: {
					name: '',
					phone: '',
					Email: '',
					adress: '',
					desc: ''
				},
				liuyanrules: {
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: 'blur'
					}, ],
					name: [{
						required: true,
						message: '请输入电话',
						trigger: 'blur'
					}, ],
					name: [{
						required: true,
						message: '请输入email',
						trigger: 'blur'
					}, ],
					name: [{
						required: true,
						message: '请输入地址',
						trigger: 'blur'
					}, ],
					name: [{
						required: true,
						message: '请输入留言内容',
						trigger: 'blur'
					}, ],
				}
			}
		},
		// 		created() {
		// 			this.buildzhineng();
		// 		},
		methods: {
			// 			search(selectform) {
			// 				this.$refs[selectform].validate((valid) => {
			// 					if (valid) {
			// 						this.axios.get('/api/Servezhuanmai', this.selectform, {
			// 							params: {
			// 								'leibie': this.$rels.leibie.value,
			// 								'product': this.$rels.product.value,
			// 								'weizhi': this.$rels.weizhi.value,
			// 							}
			// 						}).then(res => {}).catch(function(error) {
			// 
			// 						});
			// 						// 表单提交
			// 					} else {
			// 						console.log('error submit!!');
			// 						return false;
			// 					}
			// 				});
			// 			}
			submitForm(liuyanform) {
				this.$refs[liuyanform].validate((valid) => {
					if (valid) {
						this.axios.get('/api/Servezhuanmai', this.liuyanform, {
							params: {
								'name': this.$rels.name.value,
								'phone': this.$rels.phone.value,
								'Email': this.$rels.Email.value,
								'adress': this.$rels.adress.value,
								'desc': this.$rels.desc.value,
							}
						}).then(res => {

						}).catch(function(error) {

						});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		},
		components: {
			serveheaders,
			// 			swiper,
			// 			swiperSlide,
		},
	}
</script>
