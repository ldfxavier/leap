import styled from "styled-components";
import colors from "~/styles/colors";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	max-width: 480px;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		strong {
			color: ${colors.secundary};
		}
	}
`;

export const Titulo = styled.h1`
	background-color: ${(props) =>
		props.numero ? colors.primary : colors.secundary};
	color: ${(props) => (props.numero ? colors.secundary : colors.background)};
	padding: 5px;
	width: 30px;
	height: 30px;
	justify-content: center;
	text-align: center;
	border-radius: 50%;
	margin-right: 10px;
`;
