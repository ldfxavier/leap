import React, { useState } from "react";
import api from "~/services/api";

import { Link, useHistory } from "react-router-dom";

import logo from "~/assets/images/logo.png";

import {
	Form,
	FormGroup,
	FormControl,
	ButtonToolbar,
	InputGroup,
	Icon,
	Alert,
} from "rsuite";

import { Container, ButtonBack } from "./styles";

const Signup = () => {
	const { push } = useHistory();

	const [errorVisible, setErrorVisible] = React.useState(false);
	const errorMessage = errorVisible ? "Campo obrigatório" : null;

	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [confirmar, setConfirmar] = useState("");

	const signUp = () => {
		if (email === "" || senha === "") {
			setErrorVisible(true);
		} else if (senha === confirmar) {
			api.post("/usuario", {
				email,
				nome,
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
				<img className="logo" src={logo} />
			</div>
			<Form>
				<FormGroup>
					<InputGroup inside>
						<InputGroup.Addon>
							<Icon icon="user" />
						</InputGroup.Addon>
						<FormControl
							name="name"
							onFocus={() => setErrorVisible(false)}
							placeholder="Nome completo"
							errorMessage={errorMessage}
							value={nome}
							onChange={(value) => setNome(value)}
						/>
					</InputGroup>
				</FormGroup>
				<FormGroup>
					<InputGroup inside>
						<InputGroup.Addon>
							<Icon icon="envelope" />
						</InputGroup.Addon>
						<FormControl
							name="email"
							onFocus={() => setErrorVisible(false)}
							placeholder="E-mail"
							errorMessage={errorMessage}
							value={email}
							onChange={(value) => setEmail(value)}
						/>
					</InputGroup>
				</FormGroup>
				<FormGroup>
					<InputGroup inside>
						<InputGroup.Addon>
							<Icon icon="key" />
						</InputGroup.Addon>
						<FormControl
							type="password"
							name="senha"
							onFocus={() => setErrorVisible(false)}
							placeholder="Senha"
							errorMessage={errorMessage}
							value={senha}
							onChange={(value) => setSenha(value)}
						/>
					</InputGroup>
				</FormGroup>
				<FormGroup>
					<InputGroup inside>
						<InputGroup.Addon>
							<Icon icon="key" />
						</InputGroup.Addon>
						<FormControl
							type="password"
							name="confirmar"
							onFocus={() => setErrorVisible(false)}
							placeholder="Confirmar senha"
							errorMessage={errorMessage}
							value={confirmar}
							onChange={(value) => setConfirmar(value)}
						/>
					</InputGroup>
				</FormGroup>
				<FormGroup>
					<ButtonToolbar>
						<button
							className="btn_padrao"
							onClick={() => signUp()}
							appearance="primary"
						>
							Cadastrar
						</button>
					</ButtonToolbar>
				</FormGroup>
				<FormGroup>
					<Link to="/">
						<ButtonBack>Voltar</ButtonBack>
					</Link>
				</FormGroup>
			</Form>
		</Container>
	);
};

export default Signup;
