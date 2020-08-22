import styled from "styled-components";
import { shade } from "polished";

import colors from "~/styles/colors";

import Carousel from "react-multi-carousel";

export const Container = styled.div`
	padding-bottom: 20px;
`;

export const Form = styled.form`
	margin: 0 auto;
	margin-top: 20px;
	width: 700px;
	display: flex;

	@media only screen and (max-device-width: 750px) {
		width: 100%;
		padding: 0 20px;
	}

	select {
		height: 40px;
		padding: 0 24px;
		border: 0;
		color: ${colors.text};
		background-color: ${colors.secundary};
	}

	input {
		flex: 1;
		height: 40px;
		padding: 0 24px;
		border: 0;
		background-color: ${shade(0.2, colors.background)};

		&::placeholder {
			color: ${colors.plots};
		}
	}

	button {
		width: 210px;
		height: 40px;
		background-color: ${colors.maya};
		color: ${colors.secundary};
		font-weight: bold;
		transition: background-color 0.2s;

		&:hover {
			background-color: ${shade(0.2, colors.maya)};
		}
	}
`;

export const Categoria = styled.div`
	h1 {
		font-size: 18px;
		color: ${colors.secundary};
		margin: 40px 20px 20px 20px;
	}
`;

export const List = styled(Carousel)`
	margin-top: 40px;

	a {
		display: flex;
		flex-direction: column;
		-webkit-box-align: center;
		align-items: center;
		padding: 36px 24px;
		background: ${shade(0.2, colors.background)};
		border-radius: 5px 5px 0px 0px;
		border-bottom: 1px solid ${colors.primary};
		text-decoration: none;
		/* max-width: 250px; */
		margin: 0px 20px;

		display: flex;
		align-items: center;
		transition: transform 0.2s;

		& + a {
			margin-top: 16px;
		}

		&:hover {
			background: ${shade(0.3, colors.background)};
		}

		img {
			width: 100px;
			height: 100px;
			border-radius: 50%;
			margin-bottom: 10px;
		}

		div {
			margin-left: 16px;
			margin-right: 16px;
			text-align: center;
			strong {
				font-size: 20px;
				color: ${colors.secundary};
			}

			p {
				font-size: 18px;
				color: ${colors.text};
				margin-top: 4px;
			}
		}
		i {
			margin-left: auto;
			color: ${colors.text};
		}

		.professor {
			margin-top: 40px;
			display: flex;
			-webkit-box-align: center;
			align-items: center;
			-webkit-box-pack: center;
			justify-content: center;

			.icone {
				color: ${colors.primary};
			}

			span {
				margin-left: 10px;
				color: ${colors.primary};
				font-size: 14px;
			}
		}
	}
`;
