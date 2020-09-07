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

	const [loading, setLoading] = useState(false);

	const curso = async () => {
		const usuario = JSON.parse(localStorage.getItem("@Usuario"));
		setLoading(true);

		await api
			.get(`/cursos/${params.curso}`, {
				headers: {
					Authorization: `Bearer ${usuario?.access_token}`,
				},
			})
			.then((response) => {
				setAulas(response.data.aulas);
			})
			.catch((error) => {})
			.finally((response) => setLoading(false));
	};

	useEffect(() => {
		curso();
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
								title={`Aula ${index + 1}`}
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
			{loading && <Loading />}
			<Header />
			{renderContainer()}
		</>
	);
};

export default Curso;
