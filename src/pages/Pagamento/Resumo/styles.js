import styled from "styled-components";
import colors from "~/styles/colors";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: ${colors.secundary};
	padding: 20px;
	margin: 20px;
	padding-top: 0px;
	border-radius: 5px;
	width: 520px;

	a {
		background-color: ${colors.primary};
		color: ${colors.secundary};
		margin-top: 20px;
		padding: 10px;
		border-radius: 5px;
		text-align: center;
	}

	h1 {
		text-align: center;
		margin: 20px;
	}

	p.center {
		text-align: center;
	}
`;
