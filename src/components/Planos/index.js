import React from "react";

import { Container } from "./styles";

function Planos({ color }) {
	return (
		<Container color={color}>
			<div className="card">
				<h1>Mensal</h1>
				<h2>
					<strong>R$90</strong>/mês
				</h2>

				<ul>
					<li>Certificado de participação</li>
					<li>Projeto avaliado pelos instrutores</li>
				</ul>

				<span>Cartão de crédito</span>

				<button className="btn_padrao">Matricule-se</button>
			</div>
			<div className="card">
				<h1>Semestral</h1>
				<h2>
					6x de <strong>R$60</strong>
				</h2>

				<ul>
					<li>Certificado de participação</li>
					<li>Projeto avaliado pelos instrutores</li>
				</ul>

				<span>Cartão de crédito</span>

				<button className="btn_padrao">Matricule-se</button>
			</div>
			<div className="card">
				<h1>Anual</h1>
				<h2>
					12x de <strong>R$45</strong>
				</h2>

				<ul>
					<li>Certificado de participação</li>
					<li>Projeto avaliado pelos instrutores</li>
				</ul>

				<span>Cartão de crédito</span>

				<button className="btn_padrao">Matricule-se</button>
			</div>
		</Container>
	);
}

export default Planos;
