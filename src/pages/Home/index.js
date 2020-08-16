import React, { useState } from "react";

import { Banner, Footer, Menu } from "../../components";

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
	SobreContainer,
	Sobre,
	TituloSobre,
	ModalCursos as Modal,
} from "./styles";

import Maya from "~/assets/images/logo_maya.svg";
import Zbrush from "~/assets/images/logo_zbrush.png";

const Home = () => {
	const [cursoFree, setCursoFree] = useState(false);
	const [cursos, setCursos] = useState(false);

	return (
		<Container>
			<Menu />
			<Banner />
			<Cursos>
				<CursoCard
					cor={colors.maya}
					lg={8}
					onClick={() => setCursos(true)}
				>
					<LogoBg cor={colors.maya}>
						<Logo src={Maya} />
					</LogoBg>
					<Titulo>START</Titulo>
					<SubTituloMaya cor={colors.maya}>
						Torne-se um profissional em Maya
					</SubTituloMaya>
					<Texto>
						Software de animação computadorizada, modelagem,
						simulação e renderização 3D
					</Texto>
					<Lista>
						<ul>
							<li>
								Dê vida a personagens realistas com ferramentas
								de animação interativas.
							</li>
							<li>
								Modele objetos e cenas 3D com ferramentas
								intuitivas de modelagem de imagens no software
								Maya®.
							</li>
							<li>
								Crie efeitos realistas, de explosões à simulação
								de tecidos.
							</li>
						</ul>
					</Lista>
				</CursoCard>

				<CursoCard
					cor={colors.primary}
					lg={8}
					onClick={() => setCursoFree(true)}
				>
					<LogoBg cor={colors.primary}>
						<Logo src={Zbrush} />
					</LogoBg>
					<Titulo>Cursos avançados</Titulo>
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
								Dê vida a personagens realistas com ferramentas
								de animação interativas.
							</li>
							<li>
								Modele objetos e cenas 3D com ferramentas
								intuitivas de modelagem de imagens no software
								Maya®.
							</li>
							<li>
								Crie efeitos realistas, de explosões à simulação
								de tecidos.
							</li>
						</ul>
					</Lista>
				</CursoCard>
			</Cursos>
			<SobreContainer>
				<Sobre>
					<TituloSobre>Sobre</TituloSobre>
					<Texto>
						A Leap School visa contribuir com o cenário artístico e
						comercial nacional e internacional através de
						capacitação e qualificação de seus alunos,
						transformando-os em profissionais. Crescendo e
						conquistando, tem como seu maior objetivo ser referência
						mundial pela qualidade dos profissionais que gera,
						sempre com o maximo zelo e ética profissional. Com base
						forte e comprometida com a reciprocidade, respeito e
						Transparência, A Leap school ofereçe a seus alunos
						sempre o melhor.
					</Texto>
				</Sobre>
			</SobreContainer>
			<Footer />
			<Modal show={cursos} onHide={() => setCursos(false)}>
				<Modal.Header>
					<Modal.Title>Cursos gratuitos</Modal.Title>
				</Modal.Header>
				<Modal.Body></Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>

			<Modal show={cursoFree} onHide={() => setCursoFree(false)}>
				<Modal.Header>
					<Modal.Title>Cursos avançados</Modal.Title>
				</Modal.Header>
				<Modal.Body></Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</Container>
	);
};

export default Home;
