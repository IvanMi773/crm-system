<template>
	<div class="col s12 m6">
		<div>
			<div class="page-subtitle">
				<h4>Создать</h4>
			</div>

			<form @submit.prevent="submitHandler">
				<div class="input-field">
					<input
						id="name"
						v-model="title"
						:class="{
							invalid: $v.title.$dirty && !$v.title.required,
						}"
						type="text"
					/>
					<label for="name">Название</label>
					<small
						class="helper-text invalid"
						v-if="$v.title.$dirty && !$v.title.required"
					>
						Введите название
					</small>
				</div>

				<div class="input-field">
					<input
						id="limit"
						v-model="limit"
						type="number"
						:class="{
							invalid: $v.limit.$dirty && !$v.limit.minValue,
						}"
					/>
					<label for="limit">Лимит</label>
					<small
						class="helper-text invalid"
						v-if="$v.limit.$dirty && !$v.limit.minValue"
					>
						Минимальная величина {{ $v.limit.$params.minValue.min }}
					</small>
				</div>

				<button class="btn waves-effect waves-light" type="submit">
					Создать
					<i class="material-icons right">send</i>
				</button>
			</form>
		</div>
	</div>
</template>

<script>
	import { required, minValue } from 'vuelidate/lib/validators';

	export default {
		data() {
			return {
				title: '',
				limit: 100,
			};
		},

		validations: {
			title: { required },
			limit: { minValue: minValue(100) },
		},

		methods: {
			async submitHandler() {
				if (this.$v.$invalid) {
					this.$v.$touch();

					return;
				}

				try {
					const category = await this.$store.dispatch(
						'createCategory',
						{
							title: this.title,
							limit: this.limit,
						}
					);

					this.title = '';
					this.limit = 100;

					this.$v.$reset();

                    this.$message('Категорія була створена');
                    
                    this.$emit('created', category)
				} catch (error) {
					console.log(error);
				}
			},
		},

		mounted() {
			window.M.updateTextFields();
		},
	};
</script>
