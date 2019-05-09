<template>
	<div v-for="item in items">
		<toggle-list-item :item="item"></toggle-list-item>
	</div>
</template>

<script>
	export default {
		data() {
			Vue.component('toggle-list-item', {
					template: '#list-item',
					props: ['item'],
					methods: {
						toggle() {
							this.isActive = !this.isActive;
						}
					},
					return {

					};
				}
			}
</script>

<style>

</style>
