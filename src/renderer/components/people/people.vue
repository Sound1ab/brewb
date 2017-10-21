<template>
	<section class="people">
		<div class="people__header">
			<h3 class="people__title delta">PEOPLE</h3>
		</div>
		<draggable :options="options" v-model='people'>
			<div v-for="element in people" :key="element.id" class="people__row">
				<div class="people__name">
					{{element.id}} {{element.name}}
				</div>
				<div class="people__preference">
					{{element.preference}}
				</div>
				<div class="people__favourite">
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
		name: 'People',
		props: [''],
		components: {
			draggable,
		},
		data () {
			return {
				options: {
					group: 'people',
					clone: true
				}
			};
		},
		watch: {},
		methods: {},
		computed: {
			people: {
				get() {
					return this.$store.state.loadLocalData.data.people;
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
	.people {
		flex: 1 0 50%;
		/*max-width: 45%;*/
		&__header {
			padding: em(10) em(10);
		}
		&__title {
			margin-bottom: 0;
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
	}
</style>
