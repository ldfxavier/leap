import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Routes";

import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Perfil from "../pages/Perfil";
import Cursos from "../pages/Cursos";
import Curso from "../pages/Curso";
import Pagamento from "../pages/Pagamento";
import SemAcesso from "../pages/SemAcesso";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/login" exact component={Login} />
			<Route path="/signup" exact component={SignUp} />
			<Route path="/pagamento/:plano" exact component={Pagamento} />
			<Route path="/perfil" isPrivate exact component={Perfil} />
			<Route path="/cursos" isPrivate isBlock exact component={Cursos} />
			<Route
				path="/curso/:curso"
				isPrivate
				isBlock
				exact
				component={Curso}
			/>
			<Route path="/planos" isPrivate exact component={SemAcesso} />
		</Switch>
	);
};

export default Routes;
