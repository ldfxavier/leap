import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { Avatar } from "rsuite";

import { Container } from "./styles";

import logo from "~/assets/images/logo.png";

const Header = () => {
	const [usuario, setUsuario] = useState();
	const { goBack } = useHistory();

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
					<Avatar
						circle
						size="lg"
						src="https://avatars2.githubusercontent.com/u/34281331?v=4"
						alt="RS"
					/>
				</Link>
				{/* </Badge> */}
			</div>
		</Container>
	);
};

export default Header;
