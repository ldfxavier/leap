import axios from "axios";

const api = axios.create({
	// baseURL: "http://localhost/leap_painel/leap/public/api",
	baseURL: "https://api.leap.art.br/api",
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error?.response?.data?.error === "token") {
			window.location.assign("http://leap.art.br");
		}
		return Promise.reject(error);
	}
);

export default api;
