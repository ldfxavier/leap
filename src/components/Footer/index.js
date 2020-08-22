import React from "react";

import { Container, Box, IconTexto } from "./styles";

const Footer = () => {
	return (
		<Container>
			<Box>
				<IconTexto icon="envelope" size="lg" />
				<IconTexto icon="whatsapp" size="lg" />
				<IconTexto icon="facebook" size="lg" />
				<IconTexto icon="instagram" size="lg" />
			</Box>
		</Container>
	);
};

export default Footer;
