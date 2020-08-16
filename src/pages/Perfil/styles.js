import styled from "styled-components";

import colors from "~/styles/colors";

import { shade } from "polished";

import InputMask from "react-input-mask";

export const Container = styled.div`
	display: flex;
	margin: 0 auto;
	justify-content: center;
	padding: 20px;
	max-width: 700px;

	h1 {
		height: 18px;
		color: ${colors.secundary};
		margin-bottom: 20px;
	}
	p {
		color: ${colors.secundary};
	}
`;

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${shade(0.2, colors.background)};
	margin-right: 20px;
	padding: 20px;
	height: 200px;
	border-radius: 5px;
	width: 200px;
	text-align: center;

	.menuPerfil {
		max-width: 200px;
		align-items: center;
	}

	.rs-avatar {
		margin-bottom: 20px;
	}
	p {
		margin-top: 5px;
	}
`;

export const Bloco = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${shade(0.2, colors.background)};
	padding: 20px;
	margin-bottom: 20px;
	border-radius: 5px;
`;

export const Main = styled.div`
	flex: 1 1 0%;
`;

export const Input = styled(InputMask)`
	width: 100%;
	border-radius: 5px;
	border: 1px solid ${shade(0.3, colors.background)};
	padding: 7px 11px;
	font-size: 14px;
	line-height: 1.42857143;
	color: ${colors.secundary};
`;
