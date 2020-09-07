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
		if (error?.response?.data?.error === 5401) {
			localStorage.clear();
			window.location.assign("http://localhost:3000");
		} else if (error?.response?.data?.error === 5402) {
			window.location.assign("http://localhost:3000/planos");
		}
		return Promise.reject(error);
	}
);

export default api;
