import styled from "styled-components";

import colors from "~/styles/colors";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 20px;
	color: ${colors.background};
	background-color: ${(props) =>
		props.color ? props.color : colors.secundary};

	@media only screen and (max-device-width: 750px) {
		flex-direction: column;
	}

	div.card {
		display: flex;
		flex-direction: column;
		padding: 20px;
		background: #fff;
		margin: 1em;
		box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);

		@media only screen and (max-device-width: 750px) {
			margin-bottom: 20px;
			width: 100%;
		}
	}

	h1 {
		font-size: 30px;
	}

	h2 {
		font-size: 16px;
		font-weight: normal;
		margin: 20px 0px 20px 0px;
	}

	strong {
		font-size: 30px;
	}

	ul {
		display: flex;
		flex-direction: column;
		list-style: none;
		text-align: start;
		margin-bottom: 20px;

		li {
			padding: 5px;
			font-size: 16px;
		}
	}

	span {
		font-size: 12px;
	}

	button {
		text-transform: uppercase;
	}
`;
