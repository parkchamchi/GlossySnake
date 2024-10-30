<script>
	import { GsApi } from "../GsApi.js"
	import { EventBus } from "../EventBus.js";

	export default {
		data() {
			return {
				api: new GsApi(),
				loggedin: false,
			}
		},
		computed: {
			userinfo() {
				if (!this.loggedin)
					return "Log in.";
				else
					return "Guest."
			},
		},
		methods: {
			meow() {
				console.log("meow");
			},
			async getTempUser() {
				const res = await this.api.submit("/user/get-temp-user", "GET", null, false);
				const data = await res.json();
				const success = data.success;
				if (success) {
					GsApi._key = data.key;
					return true;
				}
				else {
					console.error("get-temp-user unsuccessful");
					return false;
				}
			},
			async updateUser() {
				if (!GsApi._key) {
					const res = await this.getTempUser();
					if (!res) {
						console.error("could not get the temp user.");
						return;
					}
				}

				this.loggedin = true;
				EventBus.emit("updateCorpuses");
				EventBus.emit("updateTasks");
			},
			async logout() {
				this.api.submit("/user/logout")
					.then(() => {
						GsApi._key = null;
						this.loggedin = false;
						this.updateUser();
					});
			},
		},
		async created() {
			await this.updateUser();
		},	
	}
</script>

<template>
	<div id="frontend_auth_div">
		<p class="userinfo_p">{{ userinfo }}</p>
		<p @click="logout()"
			class="btn logout_button">
			Logout
		</p>
	</div>
</template>

<style scoped>
	.userinfo_p {
		font-size: 80%;
		font-style: italic;
		margin: 0;
	}
	.logout_button {
		font-size: 80%;
	}
</style>