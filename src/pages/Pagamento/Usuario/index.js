import React, { useState, useEffect } from "react";

import InputMask from "react-input-mask";

import { Alert } from "rsuite";

import Header from "../Header";

import { Container } from "./styles";
import api from "~/services/api";

const Usuario = ({ setTab, setUsuario, usuario }) => {
	const usuarioToken = JSON.parse(localStorage.getItem("@Usuario"));

	const [conta, setConta] = useState(false);
	const [nome, setNome] = useState(
		usuario?.nome !== undefined ? usuario.nome : ""
	);
	const [email, setEmail] = useState(
		usuario?.email !== undefined ? usuario.email : ""
	);
	const [cpf, setCpf] = useState(
		usuario?.cpf !== undefined ? usuario.cpf : ""
	);
	const [nascimento, setNascimento] = useState(
		usuario?.nascimento !== undefined ? usuario.nascimento : ""
	);
	const [telefone, setTelefone] = useState(
		usuario?.telefone !== undefined ? usuario.telefone : ""
	);
	const [senha, setSenha] = useState(
		usuario?.senha !== undefined ? usuario.senha : ""
	);
	const [confirmar, setConfirmar] = useState(
		usuario?.senha !== undefined ? usuario.senha : ""
	);

	useEffect(() => {
		if (usuarioToken) {
			const {
				nome,
				email,
				cpf,
				data_nascimento,
				telefone,
				logradouro,
				numero,
				estado,
				cep,
				bairro,
				cidade,
				complemento,
			} = usuarioToken.dados;

			setUsuario({
				...usuario,
				nome,
				email,
				cpf,
				nascimento: data_nascimento,
				telefone,
				endereco: logradouro,
				numero,
				estado,
				cep,
				bairro,
				cidade,
				complemento,
			});
			setTab(2);
		}
		// eslint-disable-next-line
	}, []);

	const avancar = (e) => {
		e.preventDefault();

		if (
			nome === "" ||
			email === "" ||
			senha === "" ||
			telefone === "" ||
			cpf === "" ||
			nascimento === ""
		) {
			Alert.error("Todos os campos são obrigatórios");
		} else if (senha === confirmar) {
			// eslint-disable-next-line
			{
				api.post("/usuario", {
					email,
					nome,
					cpf,
					nascimento,
					telefone,
					password: senha,
				})
					.then((response) => {
						setUsuario({
							...usuario,
							nome,
							email,
							cpf,
							nascimento,
							telefone,
							senha,
						});
						localStorage.setItem(
							"@Usuario",
							JSON.stringify(response.data)
						);
						Alert.success(response.data.message);
						setTimeout(() => {
							setTab(2);
						}, 1000);
					})
					.catch((error) => {
						Alert.error(error.response.data.message);
					});
			}
		} else {
			Alert.error("As senhas não são iguais!");
		}
	};

	const logIn = (e) => {
		e.preventDefault();

		if (email === "" || senha === "") {
			Alert.error("Todos os campos são obrigatórios");
		} else {
			api.post("/auth/login", {
				email,
				password: senha,
			})
				.then((response) => {
					const {
						nome,
						email,
						cpf,
						data_nascimento,
						telefone,
						logradouro,
						bairro,
						complemento,
						estado,
						cidade,
						cep,
						numero,
					} = response.data.dados;
					setUsuario({
						...usuario,
						nome,
						email,
						cpf,
						nascimento: data_nascimento,
						telefone,
						endereco: logradouro,
						bairro,
						complemento,
						estado,
						cidade,
						cep,
						numero,
					});
					localStorage.setItem(
						"@Usuario",
						JSON.stringify(response.data)
					);
					Alert.success("Login efetuado com sucesso!");
					setTimeout(() => {
						setTab(2);
					}, 1000);
				})
				.catch((error) => {
					Alert.error(error.response.data.message);
				});
		}
	};

	return (
		<>
			<Header numero={1} />
			<Container>
				{conta ? (
					<>
						<form onSubmit={logIn} method="POST">
							<input
								type="text"
								placeholder="E-mail"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>

							<input
								type="password"
								placeholder="Senha"
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
							/>
							<button className="btn_padrao" appearance="primary">
								Avançar
							</button>
						</form>
						<button
							className="link"
							onClick={() => setConta(false)}
						>
							Não tenho conta
						</button>
					</>
				) : (
					<>
						<form onSubmit={avancar} method="POST">
							<input
								type="text"
								placeholder="Nome completo"
								value={nome}
								onChange={(e) => setNome(e.target.value)}
							/>

							<input
								type="text"
								placeholder="E-mail"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>

							<InputMask
								mask="999.999.999-99"
								value={cpf}
								onChange={(e) => setCpf(e.target.value)}
								placeholder="CPF"
							/>

							<InputMask
								mask="99/99/9999"
								value={nascimento}
								onChange={(e) => setNascimento(e.target.value)}
								placeholder="Data de nascimento"
							/>

							<InputMask
								mask="(99) 99999-9999"
								value={telefone}
								onChange={(e) => setTelefone(e.target.value)}
								placeholder="Telefone celular"
							/>

							<input
								type="password"
								placeholder="Senha"
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
							/>

							<input
								type="password"
								placeholder="Confirmar senha"
								value={confirmar}
								onChange={(e) => setConfirmar(e.target.value)}
							/>
							<button className="btn_padrao" appearance="primary">
								Avançar
							</button>
						</form>
						<button className="link" onClick={() => setConta(true)}>
							Já tenho conta
						</button>
					</>
				)}
			</Container>
		</>
	);
};

export default Usuario;
