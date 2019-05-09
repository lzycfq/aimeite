<template>

	
	
	
	
	
</template>

<script>
	export default {
		name: 'app',

		data() {

			return {
				data: [],
				col: 5,
				loader:true
			}
		},
		created() {
			this.loadmore();
		},
		computed: {
			itemWidth() {
				return (138 * 0.5 * (document.documentElement.clientWidth / 375)) //# rem布局 计算宽度
			},
			gutterWidth() {
				return (9 * 0.5 * (document.documentElement.clientWidth / 375)) //# rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
			}
		},
		methods: {
			loadmore() {
				this.axios.get('/api/initImg').then(res => {
					console.log(res)
					//this.imgsArr = this.imgsArr.concat(res.data.data)
					this.data = this.data.concat(res.data.data)
				})
			},
			scroll(scrollData) {
				this.loadmore();
			
			},
			switchCol(col) {
				this.col = col
				console.log(this.col)
			},
		},
	}
</script>
<style>

</style>
