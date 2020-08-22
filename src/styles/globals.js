import { createGlobalStyle } from "styled-components";

import colors from "../styles/colors";
import { shade } from "polished";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html {
		scroll-behavior: smooth;
	}

	h1{
		font-size: 18px;
		line-height: 20px;
	}

	body {
		background: ${colors.background};
		-webkit-font-smoothing: antialiased;
	}

	body, input, button {
		font: 16px Roboto, sans-serif;
	}

	a {
		text-decoration:none;
		cursor: pointer;
	}

	a:hover{
		text-decoration:none;
	}

	#root {
	}

	input, .rs-form-fluid .rs-form-control-wrapper > .rs-input-number, .rs-form-fluid .rs-form-control-wrapper > .rs-input {
		background-color: ${colors.background};
		border-radius: 5px;
		border-color: ${shade(0.3, colors.background)};
		color: ${colors.secundary};
	}

	button.btn_padrao {
		background-color: ${colors.primary};
		padding: 10px 20px;
		color: #fff;
		width: 100%;
		border-radius: 5px;
		&:hover {
			background-color: ${shade(0.2, colors.primary)};
		}
		&:active {
			color: #fff;
		}
	}

	button.btn_small {
		background-color: ${colors.primary};
		padding: 10px 20px;
		color: #fff;
		border-radius: 5px;
		&:hover {
			background-color: ${shade(0.2, colors.primary)};
		}
		&:active {
			color: #fff;
		}
	}
`;
