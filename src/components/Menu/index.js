import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "rsuite";

import { MenuBg } from "./styles";

const Menu = () => {
	return (
		<>
			<MenuBg>
				<Link to="/signup">
					<p>Criar conta</p>
				</Link>
				<Link to="/login">
					<p className="aluno">
						<Icon icon="mortar-board" /> Área do aluno
					</p>
				</Link>
			</MenuBg>
		</>
	);
};

export default Menu;
