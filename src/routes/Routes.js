import React, { useEffect } from "react";
import { Route, useHistory, useLocation } from "react-router-dom";

function Routes(props) {
	const { push } = useHistory();
	const { pathname } = useLocation();

	useEffect(() => {
		const usuario = JSON.parse(localStorage.getItem("@Usuario"));

		if (pathname === "/login" && usuario) {
			push("cursos");
		}

		if (props.isPrivate) {
			if (!usuario) {
				push("login");
			}

			if (usuario?.dados?.status === 2 && props.isBlock) {
				push("planos");
			}
		}
	}, [pathname, props, push]);

	return (
		<div>
			<Route {...props} />
		</div>
	);
}

export default Routes;
