import { reactive } from 'vue';

const eventBus = reactive({});
//Don't ask me how this works...
export const EventBus = {
	on(event, callback) {
		if (!eventBus[event]) {
			eventBus[event] = [];
		}
		eventBus[event].push(callback);
	},
	off(event, callback) {
		if (!eventBus[event]) return;
		eventBus[event] = eventBus[event].filter(cb => cb !== callback);
	},
	emit(event, data) {
		if (!eventBus[event]) return;
		eventBus[event].forEach(callback => callback(data));
	},
};