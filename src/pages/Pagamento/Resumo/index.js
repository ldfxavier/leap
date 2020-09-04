import React from "react";

import Header from "../Header";

import { Container } from "./styles";

const Resumo = ({ usuario }) => {
	function plano(id) {
		let texto = "";

		if (id === "1") {
			texto = "Mensal";
		} else if (id === "2") {
			texto = "Semestral";
		} else if (id === "3") {
			texto = "Anual";
		}

		return texto;
	}

	return (
		<>
			<Header numero={4} />
			<Container>
				<h1>Aguardando autorização do pagamento.</h1>

				<p>
					<strong>Nome:</strong> {usuario.nome}
				</p>
				<p>
					<strong>E-mail:</strong> {usuario.email}
				</p>
				<p>
					<strong>Plano:</strong> {plano(usuario.plano)}
				</p>
				<p>
					<strong>Valor:</strong> R$ {usuario.valor}
				</p>
				<p>
					<strong>Parcelas:</strong> {usuario.parcela}x
				</p>

				<h1>Obrigado por confiar na gente!</h1>

				<p>
					Assim que seu pagamento for aprovado enviaremos um e-mail
					com a liberação do seu acesso a nossa plataforma.
				</p>
				<p className="center">Bons estudos!</p>
				<a href="/">Voltar ao site</a>
			</Container>
		</>
	);
};

export default Resumo;
