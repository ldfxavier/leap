import React from "react";

import { Container, Titulo } from "./styles";

function Header({ numero }) {
	return (
		<Container>
			<div>
				<Titulo numero={numero >= 1 ? true : false}>1</Titulo>
				<strong>Criar conta</strong>
			</div>
			<div>
				<Titulo numero={numero >= 2 ? true : false}>2</Titulo>
				<strong>Endereço</strong>
			</div>
			<div>
				<Titulo numero={numero >= 3 ? true : false}>3</Titulo>
				<strong>Pagamento</strong>
			</div>
			<div>
				<Titulo numero={numero >= 4 ? true : false}>4</Titulo>
				<strong>Resumo</strong>
			</div>
		</Container>
	);
}

export default Header;
