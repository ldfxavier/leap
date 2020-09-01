import React from "react";

import { Container, Titulo } from "./styles";

function Header({ setTab, numero }) {
	return (
		<Container>
			<div onClick={() => setTab(1)}>
				<Titulo numero={numero >= 1 ? true : false}>1</Titulo>
				<strong>Criar conta</strong>
			</div>
			<div onClick={() => setTab(2)}>
				<Titulo numero={numero >= 2 ? true : false}>2</Titulo>
				<strong>Endereço</strong>
			</div>
			<div onClick={() => setTab(3)}>
				<Titulo numero={numero >= 3 ? true : false}>3</Titulo>
				<strong>Cartão</strong>
			</div>
		</Container>
	);
}

export default Header;
