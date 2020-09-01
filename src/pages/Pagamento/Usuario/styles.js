import styled from "styled-components";
import colors from "~/styles/colors";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: ${colors.background};
	padding: 20px;
	border-radius: 5px;
	max-width: 520px;

	form {
		input {
			background-color: #fff;
			height: 36px;
			padding: 0px 10px 0px 10px;
			line-height: 36px;
			margin-bottom: 10px;
			border: 1px solid #e2e2e2;
			color: ${colors.background};
			width: 100%;
			margin-bottom: 24px;
			border-radius: 5px;
		}
	}
`;
