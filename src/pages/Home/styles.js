import styled from "styled-components";

import colors from "~/styles/colors";

import { Modal } from "rsuite";

import bg1 from "~/assets/images/bg1.png";
import bg2 from "~/assets/images/bg2.png";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Cursos = styled.div`
	display: flex;
	background-color: ${colors.background};
	align-items: center;
	padding: 20px;
	justify-content: center;

	.draw {
		transition: color 0.25s;

		&::before,
		&::after {
			border: 2px solid transparent;
			width: 0;
			height: 0;
		}

		&::before {
			top: 0;
			left: 0;
		}

		&::after {
			bottom: 0;
			right: 0;
		}

		&:hover {
			color: ${colors.primary};
		}

		&:hover::before,
		&:hover::after {
			width: 100%;
			height: 100%;
		}

		&:hover::before {
			border-top-color: ${colors.primary};
			border-right-color: ${colors.primary};
			transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
		}

		&:hover::after {
			border-bottom-color: ${colors.primary};
			border-left-color: ${colors.primary};
			transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s,
				height 0.25s ease-out 0.75s;
		}
	}

	@media only screen and (max-device-width: 900px) {
		flex-direction: column;
	}
`;

export const CursoCard = styled.div`
	display: flex;
	flex-direction: column;
	background: ${colors.backgroundSecundary};
	border: 0;
	box-sizing: border-box;
	margin: 1em;
	padding: 1em 2em;
	align-items: center;
	max-width: 400px;
	height: 450px;

	font-size: inherit;
	font-weight: 700;
	text-align: justify;

	position: relative;
	vertical-align: middle;

	&::before,
	&::after {
		box-sizing: inherit;
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
	}
`;

export const LogoBg = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
`;
export const Logo = styled.img`
	height: 100px;
	width: 100px;
	border-radius: 50px;
	border-width: 2px;
	border-style: solid;
	border-color: ${colors.primary};
`;

export const Titulo = styled.h1`
	color: ${colors.primary};
	margin-bottom: 10px;
`;

export const SubTituloMaya = styled.h2`
	padding: 0;
	margin: 0;
	font-size: 14px;
	color: ${colors.primary};
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
	padding: 20px;
`;

export const Sobre = styled.div`
	max-width: 600px;
	text-align: justify;
`;

export const TituloSobre = styled.h1`
	text-align: center;
	font-size: 22px;
	margin-bottom: 20px;
`;

export const Detalhes = styled.div`
	display: flex;
	flex-direction: column;

	background-image: url(${bg1}), url(${bg2});
	background-position: left, right;
	background-repeat: no-repeat, no-repeat;
	background-size: 400px, 550px;

	color: ${colors.secundary};
	padding: 20px;
	justify-content: center;
	align-items: center;

	@media only screen and (max-device-width: 750px) {
		background-image: url(${bg1});
		background-position: right;
		background-repeat: no-repeat;
		background-size: 400px;
	}

	div.cardRow {
		display: flex;
		flex-direction: row;
		margin-bottom: 50px;
		margin-top: 50px;

		@media only screen and (max-device-width: 750px) {
			flex-direction: column;
			margin-bottom: 0px;
			margin-top: 0px;
		}

		div.card {
			margin-right: 100px;
			max-width: 300px;
			&:last-child {
				margin-right: 0px;
			}
			h1 {
			}

			@media only screen and (max-device-width: 750px) {
				margin-bottom: 50px;
			}
		}
	}
`;

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
