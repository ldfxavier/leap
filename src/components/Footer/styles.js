import styled from "styled-components";

import { Icon } from "rsuite";

import colors from "~/styles/colors";

export const Container = styled.div`
	background-color: ${colors.background};
	border-top-width: 2px;
	border-bottom-width: 0px;
	border-right-width: 0px;
	border-left-width: 0px;
	border-style: solid;
	border-color: ${colors.text};
	padding: 20px;
`;

export const Box = styled.div``;

export const Texto = styled.p`
	color: ${colors.text};
`;

export const IconTexto = styled(Icon)`
	margin-right: 10px;
`;
