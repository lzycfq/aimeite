<template>
	<div class="marquee" >   
		  <div class="marquee_title"> 
			   <span>最新动态：</span> 
			    </div>       
		<div class="marquee_box"  >
			           <ul class="marquee_list" :class="{marquee_top:animate}">     
				       <li v-for="(item,index) in marqueeList" :key='index'>{{item.marquee}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				marqueeList:[],
			}
		},
		
		created: function() {
			setInterval(this.showMarquee, 2000)
			this.datamarqueeList();
		},
		
		
		methods: {
	//楼盘标题+标签+table
		datamarqueeList(){
			var that = this;
			axios.get('/api/json/D2.json').then(res => {
				console.log(res);
				that.marqueeList = res.data //请求出来的推荐楼盘数据
			}).catch(function(error) {
				console.log(error);
			})
		},
			showMarquee: function() {
				this.animate = true;
				setTimeout(() => {
					this.marqueeList.push(this.marqueeList[0]);
					this.marqueeList.shift();
					this.animate = false;
				}, 400)
			}
		
		},

	}
</script>

<style scoped>
	.Detail_xiangqing .marquee {
		width: 100%;
		height: 60px;
		margin-top: 0.2rem;
		color: #3A3A3A;
		background-color: white;
		display: flex;
		box-sizing: border-box;
		overflow: hidden;
	}

	.Detail_xiangqing .marquee_title {
		height: 21px;

	}

	.Detail_xiangqing .marquee_title span {
		font-size: 0.9rem;
		color: #555555;
		font-weight: bold;
	}

	.Detail_xiangqing .marquee_box {
		display: block;
		position: relative;
		width: 80%;
		height: 60px;
		overflow: hidden;
	}

	.Detail_xiangqing .marquee_list {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
	}

	.Detail_xiangqing .marquee_top {
		transition: all 0.5s;
		margin-top: -30px
	}

	.Detail_xiangqing .marquee_list li {
		height: 60px;
		text-align: left;
		font-size: 0.8rem;
		color: #888888;
		line-height: 1.4rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	.Detail_xiangqing .marquee_list li span {
		padding: 0 2px;
	}
</style>
