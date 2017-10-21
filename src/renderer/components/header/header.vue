<template>
	<header class="header" v-design-mode>
		<h1 class="header__title alpha">Brewb</h1>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		props: [''],
		data () {
			return {};
		},
		watch: {},
		methods: {},
		computed: {

		},
	};
</script>

<style lang="scss" type="text/scss">
	.header {
		flex: 0 0 auto;
		align-self: stretch;
		width: calc(100% - 150px);
		height: em(100);
		&__title {
			position: relative;
			top: 50%;
			transform: translateY(-50%);
			margin-left: em(10, 40);
		}
	}
</style>
