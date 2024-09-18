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
				const user = await res.json();
				
				const is_auth = user.is_auth;
				if (!is_auth) {
					await this.getTempUser();

					if (!is_auth) {
						console.error("could not get the temp user.");
						return;
					}
				}

				if (orig_email != user.email) {
					this.email = user.email;
				}
				EventBus.emit("updateCorpuses");
				EventBus.emit("updateTasks");
			},
			async logout() {
				await this.api.submit("/user/logout/");
			},
		},
		async created() {
			await this.updateUser();
		},	
	}
</script>

<template>
	<div id="frontend_auth_div">
		<p>{{ email }}</p>
		<button @click="logout()"
			class="btn">
			Logout
		</button>
	</div>
</template>