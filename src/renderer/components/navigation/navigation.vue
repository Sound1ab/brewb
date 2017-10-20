<template>
	<section class="navigation" v-design-mode>
		<router-link
			v-for="element in localData"
			:to="element.slug"
			class="navigation__button"
			:key="element.title"
		>
			<div class="navigation__border"></div>
			<div class="navigation__icon-outer">
				<img class="navigation__icon" :src="fetchImg(element.icon)"/>
			</div>
		</router-link>
	</section>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		name: 'navigation',
		props: [''],
		data () {
			return {};
		},
		watch: {},
		methods: {},
		computed: {
			...mapState({
				localData: state => state.loadLocalData.data.navigation
			})
		},
	};
</script>

<style lang="scss" type="text/scss">
	.navigation {
		flex: 0 0 auto;
		position: relative;
		height: 100%;
		width: em(150);
		padding-top: em(100);
		&__button {
			display: flex;
			align-items: flex-start;
			height: em(80);
		}
		&__border {
			position: relative;
			height: 100%;
			width: em(8);
			background-color: transparent;
			.router-link-exact-active & {
				background-color: $tertiaryColour;
			}
			.router-link-active & {
				background-color: $tertiaryColour;
			}
		}
		&__icon-outer {
			flex: 1 1 auto;
			height: 100%;
		}
		&__icon {
			position: relative;
			width: em(30);
			top: 50%;
			transform: translateY(-50%);
			margin-left: em(10);
		}
	}
</style>
