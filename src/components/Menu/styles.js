import styled from "styled-components";

import colors from "~/styles/colors";

export const MenuBg = styled.div`
	display: flex;
	position: absolute;
	z-index: 9;
	right: 0;
	color: #fff;

	a {
		color: ${colors.secundary};
	}

	p {
		margin: 20px 0px;
		padding: 5px 10px;
		cursor: pointer;
		&:hover {
			text-decoration: underline;
			color: ${colors.primary};
		}
	}

	.aluno {
		margin-right: 20px;
		margin-left: 20px;
		padding: 5px 10px;
		border-width: 2px;
		border-style: solid;
		border-color: ${colors.primary};
		&:hover {
			text-decoration: none;
			background-color: ${colors.primary};
			color: ${colors.secundary};
		}
	}
`;

export const Login = styled.div`
	display: flex;
	justify-content: flex-end;
`;
