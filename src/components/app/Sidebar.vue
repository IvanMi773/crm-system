<template>
	<ul class="sidenav app-sidenav" :class="{open: value}">
		<router-link
			tag="li"
			active-class="active"
			v-for="link in links"
			:to="link.url"
			:key="link.url"
			:exact="link.exect"
		>
			<a href="#" class="waves-effect waves-orange pointer">
                {{ link.title }}
            </a>
		</router-link>
	</ul>
</template>

<script>
	export default {
        props: {
            value: Boolean,
        },

		data() {
			return {
				links: [
					{
						title: 'Счет',
						url: '/',
						exact: true,
					},

					{
						title: 'История',
						url: '/history',
					},

					{
						title: 'Планирование',
						url: '/planning',
					},

					{
						title: 'Новая запись',
						url: '/record',
					},

					{
						title: 'Категории',
						url: '/categories',
					},
				],
			};
		},
	};
</script>
