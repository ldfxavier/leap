import React, { useState } from "react";

import { Link } from "react-router-dom";

import InputMask from "react-input-mask";

import { Alert } from "rsuite";

import Header from "../Header";

import { Container } from "./styles";
import api from "~/services/api";

const Usuario = ({ setTab, setUsuario, usuario }) => {
	const [errorVisible, setErrorVisible] = React.useState(false);
	const errorMessage = errorVisible ? "Campo obrigatório" : null;

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
					console.log(response);
					setUsuario({
						...usuario,
						nome: response.data.dados.nome,
						email: response.data.dados.email,
						cpf: response.data.dados.cpf,
						nascimento: response.data.dados.data_nascimento,
						telefone: response.data.dados.telefone,
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
			<Header numero={1} setTab={setTab} />
			<Container>
				{conta ? (
					<>
						<form onSubmit={logIn} method="POST">
							<input
								type="text"
								onFocus={() => setErrorVisible(false)}
								placeholder="E-mail"
								errorMessage={errorMessage}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>

							<input
								type="password"
								onFocus={() => setErrorVisible(false)}
								placeholder="Senha"
								errorMessage={errorMessage}
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
							/>
							<button className="btn_padrao" appearance="primary">
								Avançar
							</button>
						</form>
						<Link onClick={() => setConta(false)}>
							Não tenho conta
						</Link>
					</>
				) : (
					<>
						<form onSubmit={avancar} method="POST">
							<input
								type="text"
								onFocus={() => setErrorVisible(false)}
								placeholder="Nome completo"
								errorMessage={errorMessage}
								value={nome}
								onChange={(e) => setNome(e.target.value)}
							/>

							<input
								type="text"
								onFocus={() => setErrorVisible(false)}
								placeholder="E-mail"
								errorMessage={errorMessage}
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
								onFocus={() => setErrorVisible(false)}
								placeholder="Senha"
								errorMessage={errorMessage}
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
							/>

							<input
								type="password"
								onFocus={() => setErrorVisible(false)}
								placeholder="Confirmar senha"
								errorMessage={errorMessage}
								value={confirmar}
								onChange={(e) => setConfirmar(e.target.value)}
							/>
							<button className="btn_padrao" appearance="primary">
								Avançar
							</button>
						</form>
						<Link onClick={() => setConta(true)}>
							Já tenho conta
						</Link>
					</>
				)}
			</Container>
		</>
	);
};

export default Usuario;
