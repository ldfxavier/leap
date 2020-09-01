import React, { useState } from "react";
import api from "~/services/api";

import { useHistory } from "react-router-dom";

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

const Login = () => {
	const { push } = useHistory();

	const [errorVisible, setErrorVisible] = useState(false);
	const errorMessage = errorVisible ? "Campo obrigatório" : null;

	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const logIn = () => {
		if (email === "" || senha === "") {
			setErrorVisible(true);
		} else {
			api.post("/auth/login", {
				email,
				password: senha,
			})
				.then((response) => {
					localStorage.setItem(
						"@Usuario",
						JSON.stringify(response.data)
					);
					Alert.success("Login efetuado com sucesso!");
					setTimeout(() => {
						push("/cursos");
					}, 1000);
				})
				.catch((error) => {
					Alert.error(error.response.data.message);
				});
		}
	};

	return (
		<Container fluid>
			<div>
				<img className="logo" alt="logo" src={logo} />
			</div>
			<Form>
				<FormGroup>
					<InputGroup inside>
						<InputGroup.Addon>
							<Icon icon="avatar" />
						</InputGroup.Addon>
						<FormControl
							name="email"
							onFocus={() => setErrorVisible(false)}
							placeholder="E-mail"
							value={email}
							onChange={(value) => setEmail(value)}
							errorMessage={errorMessage}
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
					<ButtonToolbar>
						<button
							className="btn_padrao"
							onClick={() => logIn()}
							appearance="primary"
						>
							Login
						</button>
					</ButtonToolbar>
					<a href="/signup">
						<ButtonBack>Criar conta</ButtonBack>
					</a>
				</FormGroup>
				<FormGroup>
					<a href="/">
						<ButtonBack>Voltar</ButtonBack>
					</a>
				</FormGroup>
			</Form>
		</Container>
	);
};

export default Login;
