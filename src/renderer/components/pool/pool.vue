<template>
	<section class="pool">
		hey
	</section>
</template>

<script>
	export default {
		name: 'pool',
		props: [''],
		data () {
			return {};
		},
		watch: {},
		methods: {},
		computed: {
			storeData () {
				return this.$store.getters.retrieveData('')
			},
		},
	};
</script>

<style lang="scss" type="text/scss">
	.pool {

	}
</style>
