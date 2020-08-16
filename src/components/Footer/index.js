import React from "react";

import { Container, Box, Texto, IconTexto } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Box>
        <Texto>
          <IconTexto icon="envelope" />
          mail@email.com
        </Texto>
        <Texto>
          <IconTexto icon="whatsapp" />
          61 9 9999-9999
        </Texto>
        <Texto>
          <IconTexto icon="facebook" />
          Facebook
        </Texto>
        <Texto>
          <IconTexto icon="instagram" />
          Instagram
        </Texto>
      </Box>
    </Container>
  );
};

export default Footer;
