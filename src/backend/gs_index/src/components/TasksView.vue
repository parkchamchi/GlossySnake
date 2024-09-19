<script>
	import { EventBus } from "../EventBus.js";
	import { GsApi } from "../GsApi.js"
	import Task from "./Task.vue"

	export default {
		components: {
			Task,
		},
		data() {
			return {
				api: new GsApi(),

				tasks: [],
			}; 
		},
		methods: {
			async updateTasks() {
				const res = await this.api.submit("/tasks/");
				const data = await res.json();
				this.tasks = data;
			}
		},
		created() {
			EventBus.on("updateTasks", this.updateTasks);
		},
		beforeDestroy() {
			EventBus.off("updateTasks", this.updateTasks); // Clean up the event listener
		},
	}
</script>

<template>
	<h3>Tasks</h3>
	<div>
		<Task v-for="(task, index) in tasks"
			:key="index"
			:task_id="task.task_id"
			:status="task.status"
			:target_corpus_id="task.target_corpus_id" />
	</div>
</template>