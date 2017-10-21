<template>
	<div class="home" v-design-mode>
		<navigation></navigation>
		<heading></heading>
		<div class="home__content">
			<pool></pool>
			<people></people>
		</div>
	</div>
</template>

<script>
	import Heading from '@/components/header/header';
	import Navigation from '@/components/navigation/navigation';
	import Pool from '@/components/pool/pool';
	import People from '@/components/people/people';
	export default {
		name: 'home',
		props: [''],
		components: {
			Heading,
			Navigation,
			Pool,
			People
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
			flex: 1 0;
			padding: em(10);
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		}
	}
</style>
