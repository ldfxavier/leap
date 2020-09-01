import axios from "axios";

const api = axios.create({
	// baseURL: "http://localhost/leap_painel/leap/public/api",
	baseURL: "https://api.leap.art.br/api",
	headers: {
		"Content-Type": "application/json",
	},
});

export default api;
