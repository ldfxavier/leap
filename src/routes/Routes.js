import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

// import { Container } from './styles';

function Routes(props) {
	const { push } = useHistory();

	useEffect(() => {
		const usuario = JSON.parse(localStorage.getItem("@Usuario"));
		if (props.isPrivate && !usuario) {
			push("login");
		}
	}, []);

	return (
		<div>
			<Route {...props} />
		</div>
	);
}

export default Routes;
