import styled from "styled-components";

import colors from "~/styles/colors";

import { shade } from "polished";

import InputMask from "react-input-mask";

export const Container = styled.div`
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	width: 100%;
`;

export const Body = styled.div`
	width: 100%;
	max-width: 1180px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding: 48px 30px 345.094px;

	@media only screen and (max-device-width: 750px) {
		flex-direction: column;
	}

	h1 {
		height: 18px;
		color: ${colors.secundary};
		margin-bottom: 20px;
	}
	p {
		color: ${colors.secundary};
	}
`;

export const Menu = styled.div`
	margin-right: 20px;
	text-align: center;
	padding: 20px;
	background-color: ${shade(0.2, colors.background)};
	border-radius: 5px;
	width: 31.425%;

	@media only screen and (max-device-width: 750px) {
		width: 100%;
		margin-bottom: 20px;
	}

	.rs-uploader-picture .rs-uploader-trigger-btn {
		width: 150px;
		height: 150px;
	}

	.rs-uploader-picture .rs-uploader-trigger-btn {
		border-radius: 50%;
		border: solid 2px ${colors.primary};
	}

	.rs-uploader-trigger-btn{
		img{
			object-fit: cover;
		}
	}

	.rs-icon-size-5x,
	.rs-icon-size-5x.rs-icon {
		font-size: 150px;
		height: 0px;
		margin-left: -2px;
		margin-top: -17px;
		/* color: ${colors.secundary};
		background-color: ${shade(0.2, colors.background)}; */
	}

	h1 {
		margin-top: 20px;
	}
`;

export const Bloco = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${shade(0.2, colors.background)};
	padding: 20px;
	margin-bottom: 20px;
	border-radius: 5px;

	@media only screen and (max-device-width: 750px) {
		width: 100%;
	}
`;

export const Main = styled.div`
	flex: 1 1 0%;

	@media only screen and (max-device-width: 750px) {
		width: 100%;
	}
`;

export const Input = styled(InputMask)`
	width: 100%;
	border-radius: 5px;
	border: 1px solid ${shade(0.3, colors.background)};
	padding: 7px 11px;
	font-size: 14px;
	line-height: 1.42857143;
	color: ${colors.secundary};
`;
