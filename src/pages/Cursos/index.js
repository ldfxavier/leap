import React, { useState, useEffect, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import api from "~/services/api";

import { FaUserTie } from "react-icons/fa";

import { Container, List, Form, Categoria } from "./styles";

import { Header } from "~/components";

import "react-multi-carousel/lib/styles.css";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const Cursos = () => {
	const { push } = useHistory();

	const [deviceType, setDeviceType] = useState("web");

	const usuario = JSON.parse(localStorage.getItem("@Usuario"));

	const [isMoving, setIsMoving] = useState(false);
	const [categorias, setCategorias] = useState(false);
	const [resultadoBusca, setResultadoBusca] = useState(false);
	const [texto, setTexto] = useState("");

	async function cursos() {
		await api
			.get("/categorias/cursos/1", {
				headers: {
					Authorization: `Bearer ${usuario?.access_token}`,
				},
			})
			.then((response) => {
				setCategorias(response.data);
			})
			.catch((error) => {
				if (error.response.data.error === "token") {
					push("/login");
				}
				console.log(error.response);
			});
	}

	useEffect(() => {
		cursos();
	}, []);

	async function busca() {
		await api
			.get(`/cursos/busca/${texto}`, {
				headers: {
					Authorization: `Bearer ${usuario.access_token}`,
				},
			})
			.then((response) => {
				setResultadoBusca(response.data);
			})
			.catch((error) => {
				if (error.response.data.error === "token") {
					push("/login");
				}
				setResultadoBusca(false);
			});
	}

	const renderCategorias = () => {
		if (categorias) {
			return categorias.map((item) => (
				<Categoria key={`categoria${item.id}`}>
					<h1>{item.titulo}</h1>
					<List
						responsive={responsive}
						ssr
						infinite={false}
						beforeChange={() => setIsMoving(true)}
						afterChange={() => setIsMoving(false)}
						containerClass="first-carousel-container container"
						deviceType={deviceType}
					>
						{/* <a href={`curso/`} key={`curso`}>
							<img
								src="https://amascoteria.com.br/wp-content/uploads/2019/11/mascote-personagem-3d-Abor_Expressao_8-600x600.jpg"
								alt="Titulo do curso"
							/>
							<div>
								<strong>TESTE</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>Swami</span>
							</div>
						</a>
						<a href={`curso/`} key={`curso`}>
							<img
								src="https://amascoteria.com.br/wp-content/uploads/2019/11/mascote-personagem-3d-Abor_Expressao_8-600x600.jpg"
								alt="Titulo do curso"
							/>
							<div>
								<strong>TESTE</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>Swami</span>
							</div>
						</a>
						<a href={`curso/`} key={`curso`}>
							<img
								src="https://amascoteria.com.br/wp-content/uploads/2019/11/mascote-personagem-3d-Abor_Expressao_8-600x600.jpg"
								alt="Titulo do curso"
							/>
							<div>
								<strong>TESTE</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>Swami</span>
							</div>
						</a>
						<a href={`curso/`} key={`curso`}>
							<img
								src="https://amascoteria.com.br/wp-content/uploads/2019/11/mascote-personagem-3d-Abor_Expressao_8-600x600.jpg"
								alt="Titulo do curso"
							/>
							<div>
								<strong>TESTE</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>Swami</span>
							</div>
						</a>
						<a href={`curso/`} key={`curso`}>
							<img
								src="https://amascoteria.com.br/wp-content/uploads/2019/11/mascote-personagem-3d-Abor_Expressao_8-600x600.jpg"
								alt="Titulo do curso"
							/>
							<div>
								<strong>TESTE</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>Swami</span>
							</div>
						</a>
						<a href={`curso/`} key={`curso`}>
							<img
								src="https://amascoteria.com.br/wp-content/uploads/2019/11/mascote-personagem-3d-Abor_Expressao_8-600x600.jpg"
								alt="Titulo do curso"
							/>
							<div>
								<strong>TESTE</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>Swami</span>
							</div>
						</a>
						<a href={`curso/`} key={`curso`}>
							<img
								src="https://amascoteria.com.br/wp-content/uploads/2019/11/mascote-personagem-3d-Abor_Expressao_8-600x600.jpg"
								alt="Titulo do curso"
							/>
							<div>
								<strong>TESTE</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>Swami</span>
							</div>
						</a>
						<a href={`curso/`} key={`curso`}>
							<img
								src="https://amascoteria.com.br/wp-content/uploads/2019/11/mascote-personagem-3d-Abor_Expressao_8-600x600.jpg"
								alt="Titulo do curso"
							/>
							<div>
								<strong>TESTE</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>Swami</span>
							</div>
						</a>
						<a href={`curso/`} key={`curso`}>
							<img
								src="https://amascoteria.com.br/wp-content/uploads/2019/11/mascote-personagem-3d-Abor_Expressao_8-600x600.jpg"
								alt="Titulo do curso"
							/>
							<div>
								<strong>TESTE</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>Swami</span>
							</div>
						</a>
						<a href={`curso/`} key={`curso`}>
							<img
								src="https://amascoteria.com.br/wp-content/uploads/2019/11/mascote-personagem-3d-Abor_Expressao_8-600x600.jpg"
								alt="Titulo do curso"
							/>
							<div>
								<strong>TESTE</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>Swami</span>
							</div>
						</a>
						<a href={`curso/`} key={`curso`}>
							<img
								src="https://amascoteria.com.br/wp-content/uploads/2019/11/mascote-personagem-3d-Abor_Expressao_8-600x600.jpg"
								alt="Titulo do curso"
							/>
							<div>
								<strong>TESTE</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>Swami</span>
							</div>
						</a>
						<a href={`curso/`} key={`curso`}>
							<img
								src="https://amascoteria.com.br/wp-content/uploads/2019/11/mascote-personagem-3d-Abor_Expressao_8-600x600.jpg"
								alt="Titulo do curso"
							/>
							<div>
								<strong>TESTE</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>Swami</span>
							</div>
						</a>
						<a href={`curso/`} key={`curso`}>
							<img
								src="https://amascoteria.com.br/wp-content/uploads/2019/11/mascote-personagem-3d-Abor_Expressao_8-600x600.jpg"
								alt="Titulo do curso"
							/>
							<div>
								<strong>TESTE</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>Swami</span>
							</div>
						</a>
						<a href={`curso/`} key={`curso`}>
							<img
								src="https://amascoteria.com.br/wp-content/uploads/2019/11/mascote-personagem-3d-Abor_Expressao_8-600x600.jpg"
								alt="Titulo do curso"
							/>
							<div>
								<strong>TESTE</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>Swami</span>
							</div>
						</a>
						<a href={`curso/`} key={`curso`}>
							<img
								src="https://amascoteria.com.br/wp-content/uploads/2019/11/mascote-personagem-3d-Abor_Expressao_8-600x600.jpg"
								alt="Titulo do curso"
							/>
							<div>
								<strong>TESTE</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>Swami</span>
							</div>
						</a> */}
						{item.cursos.map((c) => (
							<a href={`curso/${c.url}`} key={`curso${c.url}`}>
								<img src={c.imagem} alt="Titulo do curso" />
								<div>
									<strong>{c.titulo}</strong>
								</div>
								<div className="professor">
									<FaUserTie className="icone" />
									<span>{c.professor}</span>
								</div>
							</a>
						))}
					</List>
				</Categoria>
			));
		}
	};

	function renderBusca() {
		if (resultadoBusca.length > 0) {
			return (
				<List
					responsive={responsive}
					ssr
					infinite={false}
					beforeChange={() => setIsMoving(true)}
					afterChange={() => setIsMoving(false)}
					containerClass="first-carousel-container container"
					deviceType={deviceType}
				>
					{resultadoBusca.map((item) => (
						<a href={`curso/${item.url}`} key={`curso${item.url}`}>
							<img src={item.imagem} alt="Titulo do curso" />
							<div>
								<strong>{item.titulo}</strong>
							</div>
							<div className="professor">
								<FaUserTie className="icone" />
								<span>{item.professor}</span>
							</div>
						</a>
					))}
				</List>
			);
		}
	}

	return (
		<>
			<Header />
			<Container>
				<Form onSubmit={busca}>
					<input
						placeholder="Buscar curso"
						onChange={(e) => {
							setTexto(e.target.value);
							busca();
						}}
					/>
				</Form>
				{texto ? renderBusca() : renderCategorias()}
			</Container>
		</>
	);
};

export default Cursos;
