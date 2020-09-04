import React from "react";

import { Container } from "./styles";
import { Icon } from "rsuite";

function Loading() {
	return (
		<Container>
			<Icon icon="spinner" pulse />
		</Container>
	);
}

export default Loading;
