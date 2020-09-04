import React from "react";

import { Container, Box, IconTexto } from "./styles";

const Footer = () => {
	return (
		<Container>
			<Box>
				<a
					href="mailto:atendimento@leap.art.br"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconTexto icon="envelope" size="lg" />
				</a>
				<a
					href="https://www.facebook.com/LeapSchoolarte"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconTexto icon="facebook" size="lg" />
				</a>

				<a
					href="https://www.instagram.com/leap.school/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconTexto icon="instagram" size="lg" />
				</a>

				<a
					href="https://www.youtube.com/channel/UCB24JDry2AxQig37-fDK9FQ?view_as=subscriber"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconTexto icon="youtube-play" size="lg" />
				</a>
			</Box>
		</Container>
	);
};

export default Footer;
