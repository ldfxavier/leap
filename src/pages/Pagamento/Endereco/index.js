import React, { useState } from "react";

import InputMask from "react-input-mask";

import { Container, Row } from "./styles";
import Header from "../Header";
import { Alert } from "rsuite";
import api from "~/services/api";

function Endereco({ setTab, setUsuario, usuario }) {
	const usuarioToken = JSON.parse(localStorage.getItem("@Usuario"));
	/**
	 * Dados do endereco
	 */
	const [endereco, setEndereco] = useState(
		usuario?.endereco !== undefined ? usuario.endereco : ""
	);
	const [numero, setNumero] = useState(
		usuario?.numero !== undefined ? usuario.numero : ""
	);
	const [bairro, setBairro] = useState(
		usuario?.bairro !== undefined ? usuario.bairro : ""
	);
	const [complemento, setComplemento] = useState(
		usuario?.complemento !== undefined ? usuario.complemento : ""
	);
	const [cidade, setCidade] = useState(
		usuario?.cidade !== undefined ? usuario.cidade : ""
	);
	const [estado, setEstado] = useState(
		usuario?.estado !== undefined ? usuario.estado : ""
	);
	const [cep, setCep] = useState(
		usuario?.cep !== undefined ? usuario.cep : ""
	);

	/**
	 * Options do estado
	 */

	const estados = {
		Estado: "Estado",
		AC: "Acre",
		AL: "Alagoas",
		AP: "Amapá",
		AM: "Amazonas",
		BA: "Bahia",
		CE: "Ceará",
		DF: "Distrito Federal",
		ES: "Espírito Santo",
		GO: "Goiás",
		MA: "Maranhão",
		MT: "Mato Grosso",
		MS: "Mato Grosso do Sul",
		MG: "Minas Gerais",
		PA: "Pará",
		PB: "Paraíba",
		PR: "Paraná",
		PE: "Pernambuco",
		PI: "Piauí",
		RJ: "Rio de Janeiro",
		RN: "Rio Grande do Norte",
		RS: "Rio Grande do Sul",
		RO: "Rondônia",
		RR: "Roraima",
		SC: "Santa Catarina",
		SP: "São Paulo",
		SE: "Sergipe",
		TO: "Tocantins",
	};

	function options() {
		var es = Object.entries(estados);
		return es.map((item) => (
			<option key={`estado${item[0]}`} value={item[0]}>
				{item[1]}
			</option>
		));
	}

	const avancar = (e) => {
		e.preventDefault();

		if (endereco === "") {
			Alert.error("O campo endereço é obrigatório");
			return false;
		} else if (numero === "") {
			Alert.error("O campo número é obrigatório");
			return false;
		} else if (bairro === "") {
			Alert.error("O campo bairro é obrigatório");
			return false;
		} else if (cidade === "") {
			Alert.error("O campo cidade é obrigatório");
			return false;
		} else if (estado === "") {
			Alert.error("O campo estado é obrigatório");
			return false;
		} else if (cep === "") {
			Alert.error("O campo CEP é obrigatório");
			return false;
		} else {
			api.put(
				"/usuario",
				{
					nome: usuarioToken.dados.nome,
					telefone: usuarioToken.dados.telefone,
					logradouro: endereco,
					numero,
					bairro,
					complemento,
					cidade,
					estado,
					cep,
				},
				{
					headers: {
						Authorization: `Bearer ${usuarioToken?.access_token}`,
					},
				}
			)
				.then((response) => {
					setUsuario({
						...usuario,
						endereco,
						numero,
						bairro,
						complemento,
						cidade,
						estado,
						cep,
					});
					setTab(3);
				})
				.catch((error) => {
					if (error.response.data.error === "token") {
						Alert.error(
							"Verifique todos os dados e tente novamente"
						);
					}
					Alert.error(error.response.data.message);
				});
		}
	};

	return (
		<>
			<Header numero={2} setTab={setTab} />
			<Container>
				<form onSubmit={avancar} method="POST">
					<input
						type="text"
						value={endereco}
						placeholder="Endereço"
						onChange={(e) => {
							setEndereco(e.target.value);
						}}
					/>
					<Row>
						<input
							type="number"
							placeholder="Nº"
							className="numero"
							onChange={(e) => {
								setNumero(e.target.value);
							}}
							value={numero}
						/>

						<input
							type="text"
							placeholder="Cidade"
							className="cidade"
							onChange={(e) => setCidade(e.target.value)}
							value={cidade}
						/>

						<select
							placeholder="Estado"
							onChange={(e) => {
								setEstado(e.target.value);
							}}
							value={estado}
						>
							{options()}
						</select>
					</Row>

					<Row>
						<input
							type="text"
							placeholder="Bairro"
							className="bairro"
							onChange={(e) => {
								setBairro(e.target.value);
							}}
							value={bairro}
						/>

						<InputMask
							placeholder="CEP"
							mask="99.999-999"
							onChange={(e) => {
								setCep(e.target.value);
							}}
							value={cep}
						/>
					</Row>

					<input
						type="text"
						placeholder="Complemento"
						onChange={(e) => setComplemento(e.target.value)}
						value={complemento}
					/>
					<button className="btn_padrao">Avançar</button>
				</form>
			</Container>
		</>
	);
}

export default Endereco;
