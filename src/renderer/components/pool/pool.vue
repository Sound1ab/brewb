<template>
	<section class="pool">
		<div class="pool__header">
			<h3 class="pool__title-one delta">POOL</h3>
		</div>
		<draggable :options="options" v-model='pool' @update="onUpdate">
			<div v-for="element in pool" :key="element.id" class="pool__row">
				<div class="pool__name">
					{{element.id}} {{element.name}}
				</div>
				<div class="pool__preference">
					{{element.preference}}
				</div>
				<div class="pool__favourite">
					hey
				</div>
			</div>
		</draggable>
	</section>
</template>

<script>
	import {mapState} from 'vuex';
	import draggable from 'vuedraggable'
	export default {
		name: 'pool',
		props: [''],
		components: {
			draggable,
		},
		data () {
			return {
				options: {
					group: 'people'
				}
			};
		},
		watch: {},
		methods: {
			onUpdate (prop) {
				console.log(prop)
			}
		},
		computed: {
			pool: {
				get() {
					return this.$store.state.loadLocalData.data.pool;
				},
				set(value) {
					console.log(value);
					this.$store.commit('updateList', value)
				}
			}
		},
	};
</script>

<style lang="scss" type="text/scss">
	.pool {
		flex: 1 1 50%;
		margin-right: em(10);
		&__header {
			padding: em(10) em(10);
		}
		&__row {
			display: flex;
			padding: 0 em(10);
			border-bottom: solid 2px white;
		}
		&__name {
			overflow: hidden;
			flex: 0 1 100px;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		&__favourite {
			margin-left: auto;
		}
		&__title-one {
			margin-bottom: 0!important;
		}
	}
</style>
