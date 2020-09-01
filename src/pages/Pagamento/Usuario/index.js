import React, { useState } from "react";

import InputMask from "react-input-mask";

import { Alert } from "rsuite";

import Header from "../Header";

import { Container } from "./styles";

const Usuario = ({ setTab, setUsuario, usuario }) => {
	const [errorVisible, setErrorVisible] = React.useState(false);
	const errorMessage = errorVisible ? "Campo obrigatório" : null;

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
				setUsuario({
					...usuario,
					nome,
					email,
					cpf,
					nascimento,
					telefone,
					senha,
				});
				setTab(2);
			}
		} else {
			Alert.error("As senhas não são iguais!");
		}
	};

	return (
		<>
			<Header numero={1} setTab={setTab} />
			<Container>
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
			</Container>
		</>
	);
};

export default Usuario;
