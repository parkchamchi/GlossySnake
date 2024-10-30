<script>
import { EventBus } from "../EventBus.js";
import Alert from "./Alert.vue";

export default {
	components: {
		Alert,
	},
	data() {
		return {
			alerts: [], // Array to hold alert messages
			maxAlerts: 3, // Maximum number of alerts to display
		};
	},
	methods: {
		addAlert({ message, alertClass="alert-light" }) {
			if (this.alerts.length >= this.maxAlerts) {
				this.alerts.shift(); // Remove the oldest alert if the limit is reached
			}
			this.alerts.push({ message, alertClass });
		},
	},
	created() {
		EventBus.on("addAlert", this.addAlert); // Listen for the error event
	},
	beforeDestroy() {
		EventBus.off("addAlert", this.addAlert); // Clean up the event listener
	},
};
</script>

<template>
	<div>
		<Alert v-for="(alert, index) in alerts"
			:key="index"
			:message="alert.message"
			:timeout="alert.timeout"
			:alertClass="alert.alertClass" />
	</div>
</template>