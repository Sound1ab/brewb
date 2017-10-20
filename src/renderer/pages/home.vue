<template>
	<div class="home" v-design-mode>
		<navigation></navigation>
		<heading></heading>
		<div class="home__content">
			<pool></pool>
		</div>
	</div>
</template>

<script>
	import Heading from '@/components/header/header';
	import Navigation from '@/components/navigation/navigation';
	import Pool from '@/components/pool/pool';
	export default {
		name: 'home',
		props: [''],
		components: {
			Heading,
			Navigation,
			Pool
		},
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
	.home {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		&__content {
			flex: 1 0 auto;
			/*width: 100%;*/
			/*height: calc(100% - 150px);*/
		}
	}
</style>
