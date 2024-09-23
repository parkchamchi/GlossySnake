<script>
	import { GsApi } from "../GsApi.js"
	import { EventBus } from "../EventBus.js";

	export default {
		data() {
			return {
				api: new GsApi(),
				email: null,
			}
		},
		computed: {
			userinfo() {
				if (!this.email)
					return "Log in.";
				else if (this.email.includes("@example.com"))
					return this.email.replace("@example.com", "");
				else
					return this.email;
			},
		},
		methods: {
			meow() {
				console.log("meow");
			},
			async getTempUser() {
				const res = await this.api.submit("/user/get-temp-user");
				const data = await res.json();
				const success = data.success;
				if (success) {
					this.key = data.key;
					return true;
				}
				else {
					console.error("get-temp-user unsuccessful");
					return false;
				}
			},
			async updateUser() {
				const orig_email = this.email;
				const res = await this.api.submit("/user/check");
				let user = await res.json();
				
				const is_auth = user.is_auth;
				if (!is_auth) {
					await this.getTempUser();
					const success = await this.api.submit("/user/check");
					if (!success) {
						console.error("could not get the temp user.");
						return;
					}

					//Recheck
					const res = await this.api.submit("/user/check");
					user = await res.json();
				}

				if (orig_email != user.email) {
					this.email = user.email;
				}
				EventBus.emit("updateCorpuses");
				EventBus.emit("updateTasks");
			},
			async logout() {
				this.api.submit("/user/logout")
					.then(() => {
						this.email = null;
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