import axios from "axios";

const api = axios.create({
	baseURL: "https://api.leap.art.br/api",
	headers: {
		"Content-Type": "application/json",
	},
});

export default api;
