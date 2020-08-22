import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container, Body, Main, Menu, Bloco, Input } from "./styles";
import { Header } from "~/components";

import "./styles.css";

import {
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	Alert,
	Uploader,
	Loader,
	Icon,
} from "rsuite";
import api from "~/services/api";

function Perfil() {
	const { push } = useHistory();
	const usuario = JSON.parse(localStorage.getItem("@Usuario"));

	const [errorVisible, setErrorVisible] = useState(false);
	const errorMessage = errorVisible ? "Campo obrigatório" : null;

	const [senhaAtual, setSenhaAtual] = useState("");
	const [senhaNova, setSenhaNova] = useState("");
	const [senhaConfirmar, setSenhaConfirmar] = useState("");

	const [nome, setNome] = useState("");
	const [telefone, setTelefone] = useState("");
	const [email, setEmail] = useState("");
	const [avatar, setAvatar] = useState(null);

	const [uploading, setUploading] = useState(false);

	function setStorage({ nome, telefone }) {
		const user = {
			...usuario,
			dados: { ...usuario.dados, nome, telefone },
		};
		localStorage.setItem("@Usuario", JSON.stringify(user));
	}

	function setStorageAvatar(avatar) {
		const user = {
			...usuario,
			dados: { ...usuario.dados, avatar },
		};
		localStorage.setItem("@Usuario", JSON.stringify(user));
	}

	useEffect(() => {
		api.get("/auth/usuario", {
			headers: {
				Authorization: `Bearer ${usuario?.access_token}`,
			},
		})
			.then(({ data }) => {
				setNome(data.nome);
				setTelefone(data.telefone);
				setEmail(data.email);
				setAvatar(data.avatar);

				console.log(data);
			})
			.catch((error) => {
				if (error.response.data.error === "token") {
					push("/login");
				}
				Alert.error(error.response.data.message);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSenha = () => {
		if (senhaAtual === "" || senhaNova === "" || senhaConfirmar === "") {
			setErrorVisible(true);
		} else {
			api.put(
				"/usuario/senha",
				{
					senha_atual: senhaAtual,
					nova_senha: senhaNova,
					confirmar_senha: senhaConfirmar,
				},
				{
					headers: {
						Authorization: `Bearer ${usuario?.access_token}`,
					},
				}
			)
				.then((response) => {
					setSenhaAtual("");
					setSenhaNova("");
					setSenhaConfirmar("");
					Alert.success("Senha atualizada com sucesso!");
				})
				.catch((error) => {
					if (error.response.data.error === "token") {
						push("/login");
					}
					Alert.error(error.response.data.message);
				});
		}
	};

	const handleDados = () => {
		if (nome === "" || telefone === "") {
			Alert.error("Todos os campos são obrigatórios!");
		} else {
			api.put(
				"/usuario",
				{
					nome,
					telefone,
				},
				{
					headers: {
						Authorization: `Bearer ${usuario?.access_token}`,
					},
				}
			)
				.then((response) => {
					setStorage({ nome, telefone });
					Alert.success("Dados atualizado com sucesso!");
				})
				.catch((error) => {
					if (error.response.data.error === "token") {
						push("/login");
					}
					Alert.error(error.response.data.message);
				});
		}
	};

	return (
		<>
			<Header />
			<Container>
				<Body>
					<Menu>
						<Uploader
							fileListVisible={false}
							listType="picture"
							name="avatar"
							action="https://api.leap.art.br/api/api/usuario/avatar"
							headers={{
								Authorization: `Bearer ${usuario?.access_token}`,
							}}
							onUpload={(file) => {
								setUploading(true);
							}}
							onSuccess={(response, file) => {
								setUploading(false);
								setStorageAvatar(response.url);
								setAvatar(response.url);
								Alert.success("Uploaded successfully");
							}}
							onError={() => {
								setAvatar(null);
								setUploading(false);
								Alert.error("Upload failed");
							}}
						>
							<button>
								{console.log(avatar)}
								{uploading && <Loader backdrop center />}
								{avatar ? (
									<img
										alt="Avatar"
										src={avatar}
										width="100%"
										height="100%"
									/>
								) : (
									<Icon icon="user-circle" size="5x" />
								)}
							</button>
						</Uploader>
						<h1>{nome}</h1>
						<p>{email}</p>
					</Menu>
					<Main>
						<Bloco>
							<h1>Meus dados</h1>
							<Form fluid onSubmit={() => handleDados()}>
								<FormGroup>
									<ControlLabel>Nome</ControlLabel>
									<FormControl
										value={nome}
										onChange={(value) => setNome(value)}
										errorMessage={errorMessage}
									/>
								</FormGroup>
								<FormGroup>
									<ControlLabel>Telefone</ControlLabel>
									<Input
										mask="(99) 99999-9999"
										value={telefone}
										onChange={(e) => {
											setTelefone(e.target.value);
										}}
									/>
								</FormGroup>
								<button className="btn_small">Atualizar</button>
							</Form>
						</Bloco>
						<Bloco>
							<h1>Meu acesso</h1>
							<Form fluid onSubmit={() => handleSenha()}>
								<FormGroup>
									<ControlLabel>Senha atual</ControlLabel>
									<FormControl
										type="password"
										value={senhaAtual}
										onChange={(value) =>
											setSenhaAtual(value)
										}
										errorMessage={errorMessage}
									/>
								</FormGroup>
								<FormGroup>
									<ControlLabel>Nova senha</ControlLabel>
									<FormControl
										type="password"
										value={senhaNova}
										onChange={(value) =>
											setSenhaNova(value)
										}
										errorMessage={errorMessage}
									/>
								</FormGroup>
								<FormGroup>
									<ControlLabel>Confirmar senha</ControlLabel>
									<FormControl
										type="password"
										value={senhaConfirmar}
										onChange={(value) =>
											setSenhaConfirmar(value)
										}
										errorMessage={errorMessage}
									/>
								</FormGroup>
								<button className="btn_small">
									Trocar senha
								</button>
							</Form>
						</Bloco>
					</Main>
				</Body>
			</Container>
		</>
	);
}

export default Perfil;
