import React from "react";

import colors from "~/styles/colors";

import {
	Container,
	Cursos,
	CursoCard,
	LogoBg,
	Logo,
	Titulo,
	SubTituloMaya,
	Texto,
	Lista,
} from "./styles";

import Maya from "~/assets/images/logo_maya.svg";
import Zbrush from "~/assets/images/logo_zbrush.png";

import { Header } from "~/components";
import { Link } from "react-router-dom";

const Aluno = () => {
	return (
		<>
			<Header />
			<Container>
				<Cursos>
					<Link to="cursos">
						<CursoCard cor={colors.maya} lg={8}>
							<LogoBg cor={colors.maya}>
								<Logo src={Maya} />
							</LogoBg>
							<Titulo>START</Titulo>
							<SubTituloMaya cor={colors.maya}>
								Cursos gratúitos
							</SubTituloMaya>
							<Texto>
								Software de animação computadorizada, modelagem,
								simulação e renderização 3D
							</Texto>
							<Lista>
								<ul>
									<li>
										Dê vida a personagens realistas com
										ferramentas de animação interativas.
									</li>
									<li>
										Modele objetos e cenas 3D com
										ferramentas intuitivas de modelagem de
										imagens no software Maya®.
									</li>
									<li>
										Crie efeitos realistas, de explosões à
										simulação de tecidos.
									</li>
								</ul>
							</Lista>
						</CursoCard>
					</Link>

					<Link to="cursos">
						<CursoCard cor={colors.primary} lg={8}>
							<LogoBg cor={colors.primary}>
								<Logo src={Zbrush} />
							</LogoBg>
							<Titulo>AVANÇADO</Titulo>
							<SubTituloMaya cor={colors.primary}>
								Seja o mestre da modelagem 3D
							</SubTituloMaya>
							<Texto>
								Software de animação computadorizada, modelagem,
								simulação e renderização 3D
							</Texto>
							<Lista>
								<ul>
									<li>
										Dê vida a personagens realistas com
										ferramentas de animação interativas.
									</li>
									<li>
										Modele objetos e cenas 3D com
										ferramentas intuitivas de modelagem de
										imagens no software Maya®.
									</li>
									<li>
										Crie efeitos realistas, de explosões à
										simulação de tecidos.
									</li>
								</ul>
							</Lista>
						</CursoCard>
					</Link>
				</Cursos>
			</Container>
		</>
	);
};

export default Aluno;
