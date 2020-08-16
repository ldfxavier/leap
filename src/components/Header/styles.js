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

	div {
		img.logo {
			height: 30px;
			margin-right: 30px;
		}
		a {
			text-decoration: none;
			color: ${colors.secundary};

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
	}
`;
