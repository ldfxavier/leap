import styled from "styled-components";

import colors from "~/styles/colors";

import { Modal, Button } from "rsuite";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
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
	z-index: 9;
	align-items: center;
	padding: 20px;
	height: 450px;
	max-width: 400px;
	background-color: ${colors.background};
	margin-top: -270px;
	margin-right: 20px;
	transition: all 0.2s ease 0s;
	text-align: center;
	border-width: 2px;
	border-style: solid;
	border-color: ${colors.background};
	cursor: pointer;

	&:last-child {
		margin-right: 0px;
	}
	&:hover {
		margin-top: -280px;
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

export const ModalCursos = styled(Modal).attrs({
	size: "lg",
})`
	.rs-modal-content {
		background-color: ${colors.background};
	}
	.rs-modal-header .rs-modal-title {
		color: ${colors.secundary};
	}
`;
