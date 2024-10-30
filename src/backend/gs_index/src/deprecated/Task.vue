<script>
	import { GsApi } from "../GsApi.js"

	export default {
		props: {
			task_id: {
				required: true,
			},
			status: {
				type: String,
				required: true,
			},
			target_corpus_id: {
				required: true,
			},
		},
		data() {
			return {
				api: new GsApi(),
			};
		},
		computed: {
			isAbortButtonShown() {
				const effectiveStatus = ["READY", "RUNNING"];
				return effectiveStatus.includes(this.status);
			},
		},
		methods: {
			async abort() {
				this.api.submit("/tasks/" + this.task_id + "/abort");
			},
		}
	}
</script>

<template>
	<div class='task_wrapper'>
		<hr>
		<p>
			Task: {{ task_id }}

			<button v-if="isAbortButtonShown"
				class="task_button btn btn-light" @click="abort()">
				Abort
			</button>

			for corpus: {{ target_corpus_id }}
			({{ status }})
		</p>
	</div>
</template>