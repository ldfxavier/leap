import styled from "styled-components";
import { shade } from "polished";

import { Timeline } from "rsuite";

import colors from "~/styles/colors";

export const Container = styled.div`
	width: 100%;
	max-width: 1080px;
	margin: 0 auto;
	margin-top: 20px;
	margin-bottom: 20px;

	h1 {
		font-size: 20px;
		color: ${colors.secundary};
		margin-bottom: 20px;
	}
`;

export const Video = styled.div`
	display: flex;
	position: relative;

	div {
		flex: 1 1 0%;
	}
`;

export const VideoContainer = styled.div`
	--video--width: 1296;
	--video--height: 540;

	position: relative;
	padding-bottom: calc(
		var(--video--height) / var(--video--width) * 100%
	); /* 41.66666667% */
	overflow: hidden;
	max-width: 100%;
	background: black;
	iframe,
	object,
	embed {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

export const TimeLineVideo = styled(Timeline)`
	width: 300px;
	margin-left: 20px;
	background-color: ${shade(0.2, colors.background)};
	padding: 20px;
	border-radius: 5px;
`;

export const Topico = styled.p`
	cursor: pointer;
	color: ${(props) => (props.active ? colors.secundary : colors.text)};
`;

export const Bol = styled.div`
	background-color: ${(props) =>
		props.active ? colors.primary : colors.secundary};
	height: 10px;
	width: 10px;
	border-radius: 50%;
`;

export const Descricao = styled.div`
	width: 100%;
	margin-top: 20px;
	color: ${colors.secundary};
	padding: 20px;
	border-radius: 5px;
	background-color: ${shade(0.2, colors.background)};

	h1 {
		padding: 10px 0;
	}

	p {
	}
`;
