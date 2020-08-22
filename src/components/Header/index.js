import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Avatar, Icon } from "rsuite";

import { Container } from "./styles";

import logo from "~/assets/images/logo.png";

const Header = () => {
	const [usuario, setUsuario] = useState();

	useEffect(() => {
		const dados = localStorage.getItem("@Usuario");
		setUsuario(JSON.parse(dados));
	}, []);

	return (
		<Container>
			<div className="menu">
				<img className="logo" alt="logo" src={logo} />
				<Link to="/cursos">
					<strong>Cursos</strong>
				</Link>
				<Link to="/login">
					<strong>Sair</strong>
				</Link>
			</div>
			<div className="perfil">
				<div>
					<strong>{usuario?.dados.nome}</strong>
					<p>{usuario?.dados.email}</p>
				</div>
				{/* <Badge content="20"> */}
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
				{/* </Badge> */}
			</div>
		</Container>
	);
};

export default Header;
