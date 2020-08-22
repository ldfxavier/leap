import styled from "styled-components";
import { shade } from "polished";

import colors from "~/styles/colors";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: ${shade(0.2, colors.background)};
	padding: 10px;
	color: ${colors.secundary};

	div.menu {
		img.logo {
			height: 30px;
			margin-right: 30px;
		}
		a {
			text-decoration: none;
			color: ${colors.secundary};
			margin-right: 20px;

			&:hover {
				color: ${colors.primary};
			}

			i {
				margin-right: 10px;
			}
		}
	}

	div.perfil {
		display: flex;
		align-items: center;

		div {
			margin-right: 16px;
		}
		p {
			font-size: 14px;
		}
		a div {
			border: solid 2px ${colors.primary};
		}

		i {
			display: flex;
			border: solid 2px ${colors.primary};
			border-radius: 50%;
			height: 60px;
			width: 60px;
			color: ${colors.secundary};
			text-align: center;
			justify-content: center;
			align-items: center;
			font-size: 56px;
		}
	}
`;
