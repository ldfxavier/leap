import axios from "axios";

const apiCep = axios.create({
	baseURL: "https://viacep.com.br/ws",
	headers: {
		"Content-Type": "application/json",
	},
});

export default apiCep;
