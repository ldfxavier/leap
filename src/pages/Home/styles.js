import styled from "styled-components";

import colors from "~/styles/colors";

import { Modal } from "rsuite";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Cursos = styled.div`
	display: flex;
	background-color: ${colors.background};
	justify-content: center;
	align-items: center;
	padding: 20px;

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
	
	font-size: inherit;
	font-weight: 700;
	
	position: relative;
	vertical-align: middle;

	&::before,
	&::after {
		box-sizing: inherit;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
	}

	/* &:last-child {
		margin-right: 0px;
	}
	&:hover {
		border-width: 2px;
		border-style: solid;
		border-color: ${(props) => props.cor};
	} */
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
	border-color: ${colors.primary};
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
	color: ${colors.primary};
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

export const Planos = styled.div`
	display: flex;
	background-color: ${colors.secundary};
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 20px;

	div.card {
		padding: 20px;
		background: #fff;
		margin-right: 20px;
		box-shadow: 0 0 10px 0 rgba(120, 135, 182, 0.1);
	}

	h1 {
		font-size: 30px;
	}

	h2 {
		font-size: 16px;
		font-weight: normal;
		margin: 20px 0px 20px 0px;
	}

	strong {
		font-size: 30px;
	}

	ul {
		display: flex;
		flex-direction: column;
		list-style: none;
		text-align: start;
		min-width: 300px;
		margin-bottom: 20px;

		li {
			padding: 5px;
			font-size: 16px;
		}
	}

	span {
		font-size: 12px;
	}

	button {
		text-transform: uppercase;
	}
`;

export const Detalhes = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${colors.background};
	color: ${colors.secundary};
	padding: 20px;
	justify-content: center;
	align-items: center;

	div.cardRow {
		display: flex;
		flex-direction: row;
		margin-bottom: 50px;
		margin-top: 50px;
		div.card {
			margin-right: 100px;
			max-width: 300px;
			&:last-child {
				margin-right: 0px;
			}
			h1 {
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
