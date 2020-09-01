import React, { useState } from "react";
import api from "~/services/api";

import { useHistory } from "react-router-dom";

import InputMask from "react-input-mask";

import logo from "~/assets/images/logo.png";

import { Alert } from "rsuite";

import { Container, ButtonBack } from "./styles";

const Signup = () => {
	const { push } = useHistory();

	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [cpf, setCpf] = useState("");
	const [nascimento, setNascimento] = useState("");
	const [telefone, setTelefone] = useState("");
	const [senha, setSenha] = useState("");
	const [confirmar, setConfirmar] = useState("");

	const signUp = (e) => {
		e.preventDefault();

		if (senha === confirmar) {
			api.post("/usuario", {
				email,
				nome,
				cpf,
				nascimento,
				telefone,
				password: senha,
			})
				.then((response) => {
					localStorage.setItem(
						"@Usuario",
						JSON.stringify(response.data)
					);
					Alert.success(response.data.message);
					setTimeout(() => {
						push("/cursos");
					}, 1000);
				})
				.catch((error) => {
					Alert.error(error.response.data.message);
				});
		} else {
			Alert.error("As senhas não são iguais!");
		}
	};

	return (
		<Container>
			<div>
				<img className="logo" alt="logo" src={logo} />
			</div>

			<form onSubmit={signUp} method="POST">
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
					Criar conta
				</button>
			</form>
			<a href="/">
				<ButtonBack>Voltar</ButtonBack>
			</a>
		</Container>
	);
};

export default Signup;
