import React, { useEffect, useState } from "react";

import api from "~/services/api";

import parse from "html-react-parser";

import { useRouteMatch } from "react-router-dom";

import Loading from "~/components/Loading";

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
	const { params } = useRouteMatch();

	const [index, setIndex] = useState(0);
	const [aulas, setAulas] = useState(0);
	const [curso, setCurso] = useState(0);

	const [loading, setLoading] = useState(false);

	const getCurso = async () => {
		const usuario = JSON.parse(localStorage.getItem("@Usuario"));
		setLoading(true);

		await api
			.get(`/cursos/${params.curso}`, {
				headers: {
					Authorization: `Bearer ${usuario?.access_token}`,
				},
			})
			.then((response) => {
				setCurso(response.data);
				setAulas(response.data.aulas);
			})
			.catch((error) => {})
			.finally((response) => setLoading(false));
	};

	useEffect(() => {
		getCurso();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const renderTimeLine = () => {
		if (aulas.length > 0) {
			return aulas.map((item, i) => {
				return (
					<TimeLineVideo.Item
					key={i}
						dot={<Bol active={i <= index ? true : false} />}
					>
						<Topico
							onClick={() => setIndex(i)}
							active={index === i ? true : false}
						>
							{item.titulo}
						</Topico>
					</TimeLineVideo.Item>
				);
			});
		}
	};

	const renderContainer = () => {
		if (aulas.length > 0) {
			return (
				<Container>
					<h1>{curso.titulo}</h1>
					<h2>{aulas[index].titulo}</h2>
					<Video>
						<VideoContainer>
							<iframe
								title={`Aula ${index + 1}`}
								src={aulas[index].video}
								allow="autoplay; fullscreen"
							></iframe>
						</VideoContainer>
						<TimeLineVideo>{renderTimeLine()}</TimeLineVideo>
					</Video>
					{aulas[index].conteudo !==  null && (
						<Descricao>
							<h1>Descrição</h1>
							{parse(aulas[index].conteudo)}
						</Descricao>
					)}
					
				</Container>
			);
		}
	};

	return (
		<>
			{loading && <Loading />}
			<Header />
			{renderContainer()}
		</>
	);
};

export default Curso;
