import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

// import { Container } from './styles';

function Routes(props) {
	const { push } = useHistory();

	useEffect(() => {
		const usuario = JSON.parse(localStorage.getItem("@Usuario"));
		// eslint-disable-next-line react/prop-types
		if (props.isPrivate && !usuario) {
			push("login");
		}
	}, [props, push]);

	return (
		<div>
			<Route {...props} />
		</div>
	);
}

export default Routes;
