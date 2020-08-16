import axios from "axios";

const api = axios.create({
	baseURL: "http://leap.art.br:8000/api",
	headers: {
		"Content-Type": "application/json",
	},
});

export default api;
