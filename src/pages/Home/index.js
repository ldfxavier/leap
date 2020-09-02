import React, { useState } from "react";

import { Banner, Footer, Menu, Planos } from "../../components";

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
	Detalhes,
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
					className="draw meet"
					lg={8}
					onClick={() => setCursos(true)}
				>
					<LogoBg>
						<Logo src={Maya} />
					</LogoBg>
					<Titulo>START</Titulo>
					<SubTituloMaya>
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
					className="draw meet"
					lg={8}
					onClick={() => setCursoFree(true)}
				>
					<LogoBg>
						<Logo src={Zbrush} />
					</LogoBg>
					<Titulo>Cursos avançados</Titulo>
					<SubTituloMaya>Seja o mestre da modelagem 3D</SubTituloMaya>
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
					className="draw meet"
					lg={8}
					onClick={() => setCursoFree(true)}
				>
					<LogoBg>
						<Logo src={Zbrush} />
					</LogoBg>
					<Titulo>Cursos avançados</Titulo>
					<SubTituloMaya>Seja o mestre da modelagem 3D</SubTituloMaya>
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
			<Planos />
			<Detalhes>
				<div className="cardRow">
					<div className="card">
						<h1>Assista quando quiser</h1>
						<p>Assista no celular, tablet, smart TV ou notebook.</p>
					</div>
					<div className="card">
						<h1>O que é a Leap school?</h1>
						<p>
							Uma escola on-line com cursos nas áreas de, desenho,
							ilustração, 3D e artes gráficas.
						</p>
					</div>
				</div>
				<div className="cardRow">
					<div className="card">
						<h1>O que eu tenho acesso?</h1>
						<p>
							Você pode assistir a todos os cursos, quando e onde
							quiser, sem comerciais tudo por um preço bem
							acessível.
						</p>
					</div>
					<div className="card">
						<h1>Tem certificado?</h1>
						<p>
							Emitimos certificado com as horas do curso que você
							completou.
						</p>
					</div>
				</div>
			</Detalhes>
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
						Transparência, A Leap school oferece a seus alunos
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
