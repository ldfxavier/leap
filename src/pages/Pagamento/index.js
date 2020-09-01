import React, { useState } from "react";

import { Link } from "react-router-dom";

import logo from "~/assets/images/logo.png";

import Cartao from "./Cartao";
import Endereco from "./Endereco";
import Usuario from "./Usuario";

import { Container, ButtonBack } from "./styles";

const Login = () => {
	const [tab, setTab] = useState(1);

	const [usuario, setUsuario] = useState();

	return (
		<Container fluid>
			<div>
				<img className="logo" alt="logo" src={logo} />
			</div>

			{tab === 1 && (
				<Usuario
					setTab={setTab}
					setUsuario={setUsuario}
					usuario={usuario}
				/>
			)}
			{tab === 2 && (
				<Endereco
					setTab={setTab}
					setUsuario={setUsuario}
					usuario={usuario}
				/>
			)}
			{tab === 3 && <Cartao setTab={setTab} usuario={usuario} />}

			<Link to="/">
				<ButtonBack>Cancelar</ButtonBack>
			</Link>
		</Container>
	);
};

export default Login;
