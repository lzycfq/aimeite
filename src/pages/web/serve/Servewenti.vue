<template id='list-item'>
	<el-col :span="24">
		<serveheaders></serveheaders>
		<div style="clear: both;"></div>
		<div class="servezhishi">
			<router-link to="serveshouhou" class='servezhishi_a'>售后服务</router-link>
			<router-link to="servewangdian" class='servezhishi_a'>服务网点</router-link>
			<router-link to="servewenti" class='servezhishi_a active'>常见问题</router-link>
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
		<div class="Submen">
			<ul class="Submen_ul">
				<li v-for="(value,index) in Submencontent" :class="type_index===index?'active':''" @click="typeIndex(index)">{{value}}</li>
			</ul>
			<div class="clear"></div>
		</div>
		</div>
		<!-- 问题列表 -->
		<div class="Problem_list">

			<dl v-for="(menu,index) in Problemlist" >
				<dt>
					<i class="aIcon"></i>
					<h2>
						<i></i>{{menu.listwenti}}
						
				<span v-for="(n,index) in Problem_status" class="normalMe" :class="n.status==1?'selected':'default'" @click="clicktoggel(index)">
							<span v-if="n.status==1">+</span>
							<span v-else>-</span>
						</span> </h2>
				</dt>
				<dd   v-if="Problem_listcontent">

					<figure><i></i>{{menu.listda}}</figure>
				</dd>
			</dl>
		</div>
	</el-col>
</template>
<style lang="scss" scoped>
	.Problem_list {
		width: 85%;
		margin: 0 auto;
	}

	.Problem_list dt {
		padding-left: 50px;
		margin: 0 0 20px 0;
		position: relative;
	}

	.Problem_list .aIcon {
		width: 29px;
		height: 29px;
		background: url('http://www.airmate-china.com/cn/images/qa.png') top center no-repeat;
		position: absolute;
		left: 0;
		top: 8px;
		cursor: pointer;
	}

	.Problem_list dt h2 {
		padding: 17px 80px 17px 22px;
		background: #edf1f4;
		border-radius: 4px;
		position: relative;
		font-weight: normal;
		margin: 0;
		font-size: 14px;
		width: 1095px;
	}

	.Problem_list dt h2 i {
		width: 15px;
		height: 13px;
		background: url('http://www.airmate-china.com/cn/images/arrow.png') right 0 no-repeat;
		position: absolute;
		left: -14px;
		top: 15px;
	}

	.Problem_list dt h2 span {
		width: 30px;
		height: 30px;
		position: absolute;
		right: 20px;
		top: 6px;
		text-align: center;
		color: #979797;
		font: 40px/30px Arial;
		cursor: pointer;
	}

	.Problem_list dd figure {
		padding: 17px 22px;
		background: #fffaf2;
		margin: 0 0 0 51px;
		border-radius: 4px;
		position: relative;
		width: 1150px;
	}



	.Submen {
		text-align: center;
		padding: 20px 0 40px;

		li {
			display: inline-block;
			margin: 0 30px 10px;
			color: #666;
			font-size: 24px;

		}

	}

	.Submen .Submen_ul li.active {
		color: #005BAC;
		text-decoration: underline;

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

				Submencontent: ["电风扇", "电暖器", "小家电", "住宅电器"],
				type_index: 0,
		
			Problem_listcontent:false,
				Problem_status: [{
					status: '1'
				}],
				uldata: [],
				Problemlist: []

			}
		},
		created() {
			this.builduldata();
			this.buildProblemlist();
			
		},
		methods: {
			
			clicktoggel:function(index) { 
   
              
				this.Problem_listcontent = !this.Problem_listcontent //取反
				this.Problem_status[index].status = this.Problem_status[index].status == 2 ? 1 : 2
			},
			builduldata() {
				this.axios.get('/api/uldata').then(res => {

					this.uldata = res.data.data //请求出来的优选房源数据
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildProblemlist() {
				this.axios.get('/api/buildProblemlist',
                    {
                        params:this.search_params,
                    }).then(res => {
					this.Problemlist = res.data.data //请求出来的优选房源数据
				}).catch(function(error) {
					console.log(error);
				})
			},
			typeIndex(index) {
				this.type_index = index;
				if (index > 0) {
					this.search_params['type'] = this.type_search[index];
				} else {
					this.search_params['type'] = '';
				}

				this.buildProblemlist();
			},
		},
		components: {
			serveheaders,

		},
	}
</script>
