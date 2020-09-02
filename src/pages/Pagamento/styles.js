import styled from "styled-components";

import colors from "~/styles/colors";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;

	img.logo {
		width: 150px;
		margin-bottom: 20px;
	}
`;

export const ButtonBack = styled.div`
	padding: 10px 20px;
	color: ${colors.primary};
	width: 100%;
	text-align: center;
	&:hover {
		text-decoration: underline;
		color: ${colors.primary};
	}
	&:active {
		color: ${colors.secundary};
	}
`;
