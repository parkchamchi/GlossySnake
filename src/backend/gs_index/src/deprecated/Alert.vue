//For AlertsView.vue

<script>
	import { EventBus } from "../EventBus.js"

	export default {
		props: {
			message: {
				type: String,
				required: true,
			},
			alertClass: {
				type: String,
				default: "alert-warning",
				validator(value) {
					const allowedClasses = ["alert-success", "alert-warning", "alert-info", "alert-light"];
					return allowedClasses.includes(value);
				},
			},
			timeout: {
				type: Number,
				default: 50000,
			}
		},
		data() {
			return {
				showAlert: false,
				alertMessage: this.message,
			};
		},
		mounted() {
			this.showAlert = true;
			setTimeout(() => {
				this.showAlert = false;
			}, this.timeout);
		},
	}
</script>

<template>
	<div v-if="showAlert"
		:class="['alert', this.alertClass]" role="alert">
		{{ alertMessage }}
	</div>
</template>