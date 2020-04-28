<template>
	<div>
		<div class="page-title">
			<h3>Планирование</h3>
			<h4>{{ info.bill | currency('UAH') }}</h4>
		</div>

		<Loader v-if="loading" />

		<p class="center" v-else-if="!categories.length">
			Категорій покищо немає.
			<router-link to="/categories">Створити</router-link>
		</p>

		<section v-else>
			<div v-for="cat in categories" :key="cat.id">
				<p>
					<strong>{{ cat.title }}</strong>
					{{ cat.spend | currency('UAH') }} из
					{{ cat.limit | currency('UAH') }}
				</p>
				<div class="progress" v-tooltip="cat.tooltip">
					<div
						class="determinate"
						:class="[cat.progressColor]"
						:style="{ width: cat.progressPersent + '%' }"
					></div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import currencyFilter from '@/filters/CurrencyFilter'

	export default {
		name: 'planning',

		data() {
			return {
				loading: true,
				categories: [],
			};
		},

		computed: {
			...mapGetters(['info']),
		},

		async mounted() {
			const records = await this.$store.dispatch('fetchRecords');
			const categories = await this.$store.dispatch('fetchCategories');

			this.categories = categories.map(cat => {
				const spend = records
					.filter(r => r.categoryId === cat.id)
					.filter(r => r.type === 'outcome')
					.reduce((total, record) => {
						return (total += +record.amount);
					}, 0);

				const persent = (100 * spend) / cat.limit;
				const progressPersent = persent > 100 ? 100 : persent;

				const progressColor =
					persent < 60 ? 'green' : persent < 100 ? 'yellow' : 'red';

				const tooltipValue = cat.limit - spend;
				const tooltip = `${
					tooltipValue < 0 ? 'Перевищення на: ' : 'Залишилось'
				} ${currencyFilter(Math.abs(tooltipValue))}`;

				return {
					...cat,
					progressPersent,
					progressColor,
					spend,
					tooltip,
				};
			});

			this.loading = false;
		},
	};
</script>
