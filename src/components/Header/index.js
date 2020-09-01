import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

import { Avatar, Icon } from "rsuite";

import { Container } from "./styles";

import logo from "~/assets/images/logo.png";

const Header = () => {
	const { push } = useHistory();

	const [usuario, setUsuario] = useState();

	useEffect(() => {
		const dados = localStorage.getItem("@Usuario");
		setUsuario(JSON.parse(dados));
	}, []);

	function logout() {
		localStorage.clear();
		push("/login");
	}

	return (
		<Container>
			<div className="menu">
				<img className="logo" alt="logo" src={logo} />
				<Link to="/cursos">
					<strong>Cursos</strong>
				</Link>
				<Link to="/login" onClick={logout}>
					<strong>Sair</strong>
				</Link>
			</div>
			<div className="perfil">
				<div>
					<strong>{usuario?.dados.nome}</strong>
					<p>{usuario?.dados.email}</p>
				</div>
				<Link to="/perfil">
					{usuario?.dados?.avatar ? (
						<Avatar
							circle
							size="lg"
							src={usuario?.dados?.avatar}
							alt="RS"
						/>
					) : (
						<Icon icon="user-circle" size="3x" />
					)}
				</Link>
			</div>
		</Container>
	);
};

export default Header;
