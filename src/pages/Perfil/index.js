import React, { useState, useEffect } from "react";

import {
	Container,
	Body,
	Main,
	Menu,
	Bloco,
	Input,
	Row,
	Column,
} from "./styles";
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
import apiCep from "~/services/apiCep";

import Loading from "~/components/Loading";

import InputMask from "react-input-mask";

function Perfil() {
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

	const [endereco, setEndereco] = useState("");
	const [numero, setNumero] = useState("");
	const [bairro, setBairro] = useState("");
	const [complemento, setComplemento] = useState("");
	const [cidade, setCidade] = useState("");
	const [estado, setEstado] = useState("");
	const [cep, setCep] = useState("");

	const [uploading, setUploading] = useState(false);

	const [loading, setLoading] = useState(false);

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
		setLoading(true);
		api.get("/auth/usuario", {
			headers: {
				Authorization: `Bearer ${usuario?.access_token}`,
			},
		})
			.then(({ data }) => {
				setNome(data.nome || "");
				setTelefone(data.telefone || "");
				setEmail(data.email || "");
				setAvatar(data.avatar || "");
				setEndereco(data.logradouro || "");
				setBairro(data.bairro || "");
				setComplemento(data.complemento || "");
				setCidade(data.cidade || "");
				setEstado(data.estado || "");
				setNumero(data.numero || "");
				setCep(data.cep || "");
			})
			.catch((error) => {
				Alert.error(error.response.data.message);
			})
			.finally((response) => setLoading(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	/**
	 * Pesquisar cep
	 */

	async function pesquisacep(valor) {
		var cep = valor.replace(/\D/g, "");

		if (cep !== "") {
			var validacep = /^[0-9]{8}$/;
			if (validacep.test(cep)) {
				await apiCep
					.get(`/${cep}/json`)
					.then((response) => {
						const {
							bairro,
							complemento,
							localidade,
							logradouro,
							uf,
						} = response.data;
						setEndereco(logradouro);
						setBairro(bairro);
						setComplemento(complemento);
						setCidade(localidade);
						setEstado(uf);
					})
					.catch((error) => console.log(error.response));
			}
		}
	}

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
					Alert.error(error.response.data.message);
				});
		}
	};

	const handleEndereco = (e) => {
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
					nome,
					telefone,
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
						Authorization: `Bearer ${usuario?.access_token}`,
					},
				}
			)
				.then((response) => {
					Alert.success("Endereço atualizado com sucesso!");
				})
				.catch((error) => {
					Alert.error(error.response.data.message);
				});
		}
	};

	function options() {
		var es = Object.entries(estados);
		return es.map((item) => (
			<option key={`estado${item[0]}`} value={item[0]}>
				{item[1]}
			</option>
		));
	}

	return (
		<>
			{loading && <Loading />}
			<Header />
			<Container>
				<Body>
					<Menu>
						<Uploader
							fileListVisible={false}
							listType="picture"
							name="avatar"
							action="https://api.leap.art.br/api/usuario/avatar"
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
							<h1>Dados</h1>
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
							<h1>Endereço</h1>
							<form
								className="endereco"
								onSubmit={handleEndereco}
								method="POST"
							>
								<Row>
									<Column>
										<label>CEP</label>
										<InputMask
											placeholder="CEP"
											className="cep"
											mask="99.999-999"
											onChange={(e) => {
												setCep(e.target.value);
											}}
											onBlur={(e) =>
												pesquisacep(e.target.value)
											}
											value={cep}
										/>
									</Column>
									<Column>
										<label>Logradouro</label>
										<input
											type="text"
											value={endereco}
											placeholder="Logradouro"
											onChange={(e) => {
												setEndereco(e.target.value);
											}}
										/>
									</Column>
								</Row>
								<Row>
									<Column>
										<label>Número</label>
										<input
											type="number"
											placeholder="Nº"
											className="numero"
											onChange={(e) => {
												setNumero(e.target.value);
											}}
											value={numero}
										/>
									</Column>

									<Column>
										<label>Cidade</label>
										<input
											type="text"
											placeholder="Cidade"
											className="cidade"
											onChange={(e) =>
												setCidade(e.target.value)
											}
											value={cidade}
										/>
									</Column>

									<Column>
										<label>Estado</label>

										<select
											placeholder="Estado"
											onChange={(e) => {
												setEstado(e.target.value);
											}}
											value={estado}
										>
											{options()}
										</select>
									</Column>
								</Row>

								<Column>
									<label>Bairro</label>
									<input
										value={bairro}
										type="text"
										placeholder="Bairro"
										className="bairro"
										onChange={(e) => {
											setBairro(e.target.value);
										}}
									/>
								</Column>
								<Column>
									<label>Complemento</label>
									<input
										value={complemento}
										type="text"
										placeholder="Complemento"
										onChange={(e) =>
											setComplemento(e.target.value)
										}
									/>
								</Column>

								<button className="btn_small">Atualizar</button>
							</form>
						</Bloco>
						<Bloco>
							<h1>Acesso</h1>
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
