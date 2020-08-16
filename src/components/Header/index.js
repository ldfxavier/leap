import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { Icon, Avatar, Badge } from "rsuite";

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
			<div>
				<img className="logo" src={logo} />
				<Link to="" onClick={() => goBack()}>
					<Icon icon="chevron-left" />
					<strong>Voltar</strong>
				</Link>
			</div>
			<div className="perfil">
				<div>
					<strong>{usuario?.dados.nome}</strong>
					<p>{usuario?.dados.email}</p>
				</div>
				<Badge content="20">
					<Link to="/perfil">
						<Avatar
							circle
							size="md"
							src="https://avatars2.githubusercontent.com/u/34281331?v=4"
							alt="RS"
						/>
					</Link>
				</Badge>
			</div>
		</Container>
	);
};

export default Header;
