import styled from "styled-components";

import colors from "~/styles/colors";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 20px;
	color: ${colors.secundary};
	justify-content: center;
	align-items: center;
	padding: 20px;

	div {
		h1 {
			text-align: center;
			margin-bottom: 20px;
		}
	}
`;
