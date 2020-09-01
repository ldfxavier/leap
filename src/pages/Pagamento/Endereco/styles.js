import styled from "styled-components";
import colors from "~/styles/colors";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${colors.background};
	padding: 20px;
	border-radius: 5px;

	form {
		input,
		select {
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

		input.numero {
			margin-right: 6px;
			width: 60px;
		}

		input.cidade,
		input.bairro {
			margin-right: 5px;
		}
	}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Card = styled.div`
	margin-right: 20px;
	.n8WyS45z_FVci1BDsHQGe::before {
		display: none;
	}
`;
