import { EventBus } from "./EventBus.js";

export function GsApi() {

};

GsApi.prototype.host = "https://glossysnake.com";
GsApi.prototype.api = "/api/v4"

GsApi.prototype.uri = function (endpoint) {
	return this.host + this.api + endpoint;
}

//Use this instead of .json()
GsApi.prototype.jsonHelper = async function (target) {
	try {
		let json = await target.json();
		return json;
	}
	catch (error) {
		console.log(error);
		return {
			"error": JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error)))
		};
	}
}

GsApi.prototype.submit = async function (endpoint, method="GET", query=null) {
	const uri = this.uri(endpoint);

	let data = {
		method: method,
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
		credentials: "include",
	};
	if (method != "GET") {
		data.body = JSON.stringify(query);

		//POST: set CSRF too
		const csrftoken = (document.cookie.match(/^(?:.*;)?\s*csrftoken\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
		if (!csrftoken)
			console.log("POST: no csrftoken.");
		data.headers["X-CSRFToken"] = csrftoken;
	}

	const res = await fetch(uri, data);
	if (!res.ok) {
		const json = await this.jsonHelper(res);
		const errmsg = uri + ": " + res.statusText + "\n> " + JSON.stringify(json);
		EventBus.emit("addAlert", { message: errmsg, alertClass: "alert-warning" });
		throw new Error(errmsg);
	}
	this.emitCorpusesUpdate(endpoint);

	return res;
}

GsApi.prototype.emitCorpusesUpdate = async function (endpoint) {
	const endpointsToExclude = [
		"/corpuses/", "/tasks/", //targets
		"/user/check", "/user/get-temp-user", "/user/logout", //handled by RestAuth.vue
		"/rest-auth/registration/", "/rest-auth/login/", "/rest-auth/logout/", //handled by RestAuth.vue
	];
	if (endpointsToExclude.some((endpointToExclude) =>
		endpoint.endsWith(endpointToExclude))
	) 
		return;

	EventBus.emit("updateCorpuses");
	EventBus.emit("updateTasks");
}