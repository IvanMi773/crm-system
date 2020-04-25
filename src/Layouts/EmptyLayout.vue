<template>
	<div class="grey darken-1 empty-layout">
		<router-view />
	</div>
</template>

<script>
    import messages from '@/utils/Messages';

	export default {
		computed: {
			error() {
				return this.$store.getters.error;
			},
		},

		watch: {
			error(fbError) {
                this.$error(messages[fbError.code] || 'Щось пішло не так')
			},
		},
	};
</script>
