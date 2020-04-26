<template>
	<div>
		<div class="page-title">
			<h3>Категории</h3>
		</div>
		<section>
			<Loader v-if="loading" />
			<div class="row" v-else>
				<CategoryCreate @created="addNewCategory" />

				<CategoryEdit
					v-if="categories.length"
					:categories="categories"
					@updated="updateCategories"
					:key="categories.lendth + updateCount"
				/>

				<p v-else class="center">Категорій покищо немає</p>
			</div>
		</section>
	</div>
</template>

<script>
	import CategoryCreate from '@/components/CategoryCreate';
	import CategoryEdit from '@/components/CategoryEdit';

	export default {
		name: 'categories',

		components: {
			CategoryCreate,
			CategoryEdit,
		},

		data() {
			return {
				categories: [],
				loading: true,
				updateCount: 0,
			};
		},

		methods: {
			addNewCategory(category) {
				this.categories.push(category);
			},

			updateCategories(category) {
				const index = this.categories.findIndex(
					c => c.id === category.id
				);

				this.categories[index].title = category.title;
				this.categories[index].limit = category.limit;

				this.updateCount++;
			},
		},

		async mounted() {
			this.categories = await this.$store.dispatch('fetchCategories');
			this.loading = false;
		},
	};
</script>
