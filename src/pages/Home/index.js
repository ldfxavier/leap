import React from "react";

import { Banner, Footer, Menu, Planos } from "../../components";

import {
	Container,
	Cursos,
	CursoCard,
	LogoBg,
	Logo,
	Titulo,
	Texto,
	SobreContainer,
	Sobre,
	TituloSobre,
	Detalhes,
} from "./styles";

import Curso3d from "~/assets/images/curso_3d.jpeg";
import CursoDesenho from "~/assets/images/curso_desenho.jpeg";

const Home = () => {
	return (
		<Container>
			<Menu />
			<Banner />
			<Cursos>
				<CursoCard className="draw meet" lg={8}>
					<LogoBg>
						<Logo src={Curso3d} />
					</LogoBg>
					<Titulo>Curso de 3D</Titulo>
					<Texto>
						<p>
							Descubra os segredos da animação computadorizada,
							modelagem, simulação e renderização 3D
						</p>
						<p>
							Dê vida aos mais diversos personagens com
							ferramentas de animação interativas;
						</p>
						<p>
							Construa objetos, cenas e ambientes em 3D com os
							recursos do software Autodesk Maya;
						</p>
						<p>
							Crie efeitos fantásticos e simule a física dos mais
							variados objetos;
						</p>
					</Texto>
				</CursoCard>

				<CursoCard className="draw meet" lg={8}>
					<LogoBg>
						<Logo src={CursoDesenho} />
					</LogoBg>
					<Titulo>Cursos de desenho</Titulo>
					<Texto>
						<p>
							Aperfeiçoe o artista que existe em você com os
							métodos tradicionais e digitais!
						</p>
						<p>
							Aprenda a base do desenho tradicional com foco em
							retratos e referências fotográficas;
						</p>
						<p>
							Domine a técnica de arte conceitual e do processo
							criativo, ideal para criação de personagens para
							animação, quadrinhos e muito mais;
						</p>
						<p>
							Torne-se um profissional digital com as ferramentas
							mais famosas do mercado.
						</p>
					</Texto>
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
		</Container>
	);
};

export default Home;
