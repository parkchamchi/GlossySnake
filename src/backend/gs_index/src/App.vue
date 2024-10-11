<script>
	import Header from "./components/Header.vue"
	import RestAuth from "./components/RestAuth.vue"
	import AnnotatorSelect from "./components/AnnotatorSelect.vue"
	import LocalAnnotatorOptions from "./components/LocalAnnotatorOptions.vue"
	import CorpusesView from "./components/CorpusesView.vue"
	import UploadView from "./components/UploadView.vue"
	import AlertsView from "./components/AlertsView.vue"
	import TasksView from "./components/TasksView.vue"

	export default {
		components: {
			Header, RestAuth, AnnotatorSelect, LocalAnnotatorOptions,
			CorpusesView, UploadView, AlertsView,
			TasksView,
		},
		data() {
			return {

			}
		},
	}
</script>

<template>
	<header>
		<Header />
	</header>

	<main>
		<RestAuth />
		<hr>
		<AnnotatorSelect />
		<hr>
		<LocalAnnotatorOptions />
		<hr>
		<CorpusesView />
		<hr>
		<UploadView />
		<hr>
		<AlertsView />
		<hr>
		<TasksView />
	</main>
</template>

<style scoped>
	body {
		font-family: sans-serif;
		text-align: center;
	}
	a:link {
		color: lightgrey;
	}

	main {
		text-align: center;
	}
</style>
