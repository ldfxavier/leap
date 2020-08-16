import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "~/services/api";

import parse from "html-react-parser";

import { Link, useRouteMatch } from "react-router-dom";

import {
	Container,
	TimeLineVideo,
	Bol,
	Video,
	VideoContainer,
	Descricao,
	Topico,
} from "./styles";
import { Header } from "~/components";

const Curso = (props) => {
	const { push } = useHistory();

	const { params } = useRouteMatch();

	const [dadosCurso, setDadosCurso] = useState(false);
	const [index, setIndex] = useState(0);
	const [aulas, setAulas] = useState(0);

	const curso = async () => {
		const usuario = JSON.parse(localStorage.getItem("@Usuario"));

		await api
			.get(`/cursos/${params.curso}`, {
				headers: {
					Authorization: `Bearer ${usuario?.access_token}`,
				},
			})
			.then((response) => {
				setDadosCurso(response.data);
				setAulas(response.data.aulas);
			})
			.catch((error) => {
				if (error.response.data.error === "token") {
					push("/login");
				}
				console.log(error.response);
			});
	};

	useEffect(() => {
		curso();
	}, []);

	const renderTimeLine = () => {
		if (aulas.length > 0) {
			return aulas.map((item, i) => {
				return (
					<>
						<TimeLineVideo.Item
							dot={<Bol active={i <= index ? true : false} />}
						>
							<Topico
								onClick={() => setIndex(i)}
								active={index === i ? true : false}
							>
								{item.titulo}
							</Topico>
						</TimeLineVideo.Item>
					</>
				);
			});
		}
	};

	const renderContainer = () => {
		if (aulas.length > 0) {
			return (
				<Container>
					<h1>Modelagem de personagem</h1>
					<Video>
						<VideoContainer>
							<iframe
								src={aulas[index].video}
								frameborder="0"
								allow="autoplay; fullscreen"
								allowfullscreen
							></iframe>
						</VideoContainer>
						<TimeLineVideo>{renderTimeLine()}</TimeLineVideo>
					</Video>
					<Descricao>
						<h1>Descrição</h1>
						{parse(aulas[index].conteudo)}
					</Descricao>
				</Container>
			);
		}
	};

	return (
		<>
			<Header />
			{renderContainer()}
		</>
	);
};

export default Curso;
