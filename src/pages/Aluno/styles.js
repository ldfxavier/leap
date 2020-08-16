import styled from "styled-components";
import { shade } from "polished";

import colors from "~/styles/colors";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

export const Cursos = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	height: 0px;
	flex-wrap: wrap;
`;

export const CursoCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	max-width: 400px;
	height: 450px;
	background-color: ${shade(0.2, colors.background)};
	margin-right: 20px;
	transition: all 0.2s ease 0s;
	text-align: center;
	border-width: 2px;
	border-style: solid;
	border-color: ${shade(0.2, colors.background)};

	a {
		margin-right: 20px;

		&:last-child {
			margin-right: 0px;
		}
	}
	&:hover {
		margin-top: -10px;
		border-width: 2px;
		border-style: solid;
		border-color: ${(props) => props.cor};
	}
`;

export const LogoBg = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
	width: 100px;
	margin: 10px;
	border-radius: 50px;
	border-width: 2px;
	border-style: solid;
	border-color: ${(props) => props.cor};
	padding: 10px;
`;
export const Logo = styled.img`
	height: 55px;
	width: 55px;
`;

export const Titulo = styled.h1`
	color: #fff;
`;

export const SubTituloMaya = styled.h2`
	padding: 0;
	margin: 0;
	color: ${(props) => props.cor};
	font-size: 14px;
`;

export const Texto = styled.p`
	color: ${colors.text};
`;

export const Lista = styled.div`
	text-align: left;
	color: ${colors.text};
	list-style-type: circle;
	padding: 10px 0px 0px 20px;
`;

export const SobreContainer = styled.div`
	display: flex;
	background-color: ${colors.secundary};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding-top: 200px;
	padding-bottom: 20px;
`;

export const Sobre = styled.div`
	max-width: 600px;
`;

export const TituloSobre = styled.h1``;
