<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import store from '@/store/index';
	import { mapState } from 'vuex';
	export default {
		name: 'coffeetime',
		store,
		created () {
			this.$store.dispatch('loadLocalData');
		},
	}
</script>

<style lang="scss" type="text/scss">
	#app {
		position: static;
		height: 100%;
		width: 100%;
	}
</style>
