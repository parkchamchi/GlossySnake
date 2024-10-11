<script>
	import { sharedState } from '../sharedState.js';

	export default {
		data() {
			return sharedState;
		},
		watch: {
			annotator_name() {
				this.emitChange();
			},
			lang_from() {
				this.emitChange();
			},
			lang_to() {
				this.emitChange();
			},

			toRemote() {
				this.emitChange();
			},
		},
		methods: {
			emitChange() {
				sharedState.annotator_name = this.annotator_name;
				sharedState.lang_from = this.lang_from;
				sharedState.lang_to = this.lang_to;

				sharedState.toRemote = this.toRemote;
			},
		}
	}
</script>

<template>
    <div class="container mt-4">
		<div class="row">
			<div class="col-md-4">
				<label for="annotator_name">annotator_name:</label>
				<select v-model="annotator_name" name="annotator_name" id="annotator_name_select" class="form-control">
					<option value="dummy">dummy</option>
					<option value="chatgpt_ft0">chatgpt_ft0</option>
					<option value="chatgpt_gpt-4o-mini-untrained_0">chatgpt_gpt-4o-mini-untrained_0</option>
					<option value="chatgpt_gpt-4o-mini-pretrained_0">chatgpt_gpt-4o-mini-pretrained_0</option>
					<option value="chatgpt_gpt-3.5-turbo-untrained_0">chatgpt_gpt-3.5-turbo-untrained_0</option>
					<option value="chatgpt_gpt-3.5-turbo-pretrained_0">chatgpt_gpt-3.5-turbo-pretrained_0</option>
				</select>
			</div>
			<div class="col-md-4">
				<label for="lang_from">lang_from:</label>
				<select v-model="lang_from" name="lang_from" id="lang_from_select" class="form-control">
					<option value="French">French</option>
					<option value="German">German</option>
				</select>
			</div>
			<div class="col-md-4">
				<label for="lang_to">lang_to:</label>
				<select v-model="lang_to" name="lang_to" id="lang_to_select" class="form-control">
					<option value="English">English</option>
				</select>
			</div>
		</div>
	</div>

	<br>

	<div>
		<input v-model="toRemote" 
			type="checkbox" name="toRemote" id="toRemote_input" class="form-check-input"
			checked>
		<label for="toRemote_input" class="form-check-label">To the remote server</label>
	</div>
</template>