import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import InputMask from "react-input-mask";

import { Container, Card, Row } from "./styles";
import api from "~/services/api";
import Header from "../Header";

import PaymentCard from "react-payment-card-component";
import { Alert, Button } from "rsuite";

function Cartao({ setTab, usuario }) {
	const { push } = useHistory();

	const usuarioToken = JSON.parse(localStorage.getItem("@Usuario"));
	/**
	 * States
	 */

	/**
	 * Informações para o checkout
	 */

	const [senderHash, setSenderHash] = useState();
	// const [session, setSession] = useState();
	// const [cardToken, setCardToken] = useState();

	/**
	 * Dados do cartao
	 */

	const [flipped, setFlipped] = useState(false);
	const [cvv, setCvv] = useState("");
	const [expiry, setExpiry] = useState("");
	const [name, setName] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [brand, setBrand] = useState();

	//dados de teste
	// const [cvv, setCvv] = useState("989");
	// const [expiry, setExpiry] = useState("04/2021");
	// const [name, setName] = useState("Lucas F Xavier");
	// const [cardNumber, setCardNumber] = useState("5467 1270 8429 4277");

	/**
	 * Parcelas
	 */

	const [plots, setPlots] = useState(null);
	const [installments, setInstallments] = useState();

	/**
	 * Plano
	 */
	const [planoSelect, setPlanoSelect] = useState();

	/**
	 * Botao
	 */

	const [loading, setLoading] = useState(null);
	const [disabled, setDisabled] = useState();

	/**
	 * Produtos (Pacotes)
	 */
	const [amount, setAmount] = useState(0);

	/**
	 * Funções úteis
	 */

	function moeda(valor) {
		return valor.toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL",
		});
	}

	function replaceAll(string, search, replace) {
		return string.split(search).join(replace);
	}

	function getSession() {
		api.get("pagamento/sessao")
			.then((response) => {
				// setSession(response.data?.code);

				window.PagSeguroDirectPayment.setSessionId(response.data?.code);
			})
			.catch((error) => console.log(error.response));
	}

	function setStorage({ status }) {
		const user = {
			...usuarioToken,
			dados: { ...usuarioToken.dados, status },
		};
		localStorage.setItem("@Usuario", JSON.stringify(user));
	}

	function checkout(cardToken) {
		if (planoSelect === "1" || planoSelect === "2" || planoSelect === "3") {
			let usuarioTelefone = String(usuario.telefone);
			let telefone = replaceAll(usuarioTelefone, " ", "");
			telefone = replaceAll(usuarioTelefone, "_", "");
			telefone = usuarioTelefone
				.replace(" ", "")
				.replace("(", "")
				.replace(")", "")
				.replace("-", "");
			let ddd = telefone.substring(2, 0);
			telefone = telefone.substring(11, 2);

			let cursoDescription = "";

			if (planoSelect === "1") {
				cursoDescription = "Curso mensal";
			} else if (planoSelect === "2") {
				cursoDescription = "Curso semestral";
			} else if (planoSelect === "3") {
				cursoDescription = "Curso anual";
			}

			api.post(
				"pagamento/checkout",
				{
					cartao_token: cardToken,
					hash: senderHash,
					item: [
						{
							itemId: planoSelect,
							itemDescription: cursoDescription,
							itemAmount: amount,
							itemQuantity: 1,
						},
					],
					senderName: usuario.nome,
					senderCPF: usuario.cpf,
					senderAreaCode: ddd,
					senderPhone: telefone,
					senderEmail: "teste@sandbox.pagseguro.com.br",
					installmentQuantity: plots,
					installmentValue: installments[plots - 1].installmentAmount,
					creditCardHolderName: name,
					creditCardHolderCPF: usuario.cpf,
					creditCardHolderBirthDate: usuario.nascimento,
					creditCardHolderAreaCode: ddd,
					creditCardHolderPhone: telefone,
					billingAddressStreet: usuario.endereco,
					billingAddressNumber: usuario.numero,
					billingAddressComplement: usuario.complemento,
					billingAddressDistrict: usuario.bairro,
					billingAddressPostalCode: usuario.cep,
					billingAddressCity: usuario.cidade,
					billingAddressState: usuario.estado,
					plano: planoSelect,
				},
				{
					headers: {
						Authorization: `Bearer ${usuarioToken?.access_token}`,
					},
				}
			)
				.then((response) => {
					Alert.success(response.data.message);
					setStorage(1);
					push("/cursos");
				})
				.catch((error) => console.log(error.response))
				.finally(() => {
					setLoading(false);
					setDisabled(false);
				});
		}
	}

	useEffect(() => {
		getSession();
	}, []);

	/**
	 * Metodos de pagamento
	 */

	// function getPaymentMethods() {
	// 	window.PagSeguroDirectPayment.getPaymentMethods({
	// 		amount: 100.0,
	// 		success: function (response) {
	// 			// Retorna os meios de pagamento disponíveis.
	// 			console.log(response);
	// 		},
	// 		error: function (response) {
	// 			// Callback para chamadas que falharam.
	// 			console.log(response);
	// 		},
	// 		complete: function (response) {
	// 			// Callback para todas chamadas.
	// 			console.log(response);
	// 		},
	// 	});
	// }

	/**
	 * Hash de segurança pra o usuário
	 */

	function getSenderHash() {
		window.PagSeguroDirectPayment.onSenderHashReady(function (response) {
			if (response.status === "error") {
				return false;
			}
			setSenderHash(response.senderHash);
		});
	}

	/**
	 * Pegar bandeira do cartão
	 */

	function getBrand(number, check = false) {
		let cleanSpaces = replaceAll(number, " ", "");
		let cleanUnderline = replaceAll(cleanSpaces, "_", "");

		if (cleanUnderline.length >= 6 || check) {
			window.PagSeguroDirectPayment.getBrand({
				cardBin: cleanUnderline,
				success: function (response) {
					setBrand(response.brand);
				},
				error: function (response) {
					console.log(response);
				},
				complete: function (response) {},
			});
		}
	}

	/**
	 * Pegar parcelas
	 */

	function getInstallments(brand, check) {
		window.PagSeguroDirectPayment.getInstallments({
			amount: check ? check : amount,
			maxInstallmentNoInterest: 12,
			brand,
			success: function (response) {
				setInstallments(response.installments[brand]);
				setPlots(1);
			},
			error: function (response) {
				console.log(response);
			},
			complete: function (response) {
				// Callback para todas chamadas.
			},
		});
	}

	/**
	 * Pegar token do cartao para checkout
	 */

	function createCardToken() {
		// e.preventDefault();

		setLoading(true);
		setDisabled(true);

		if (
			cvv === "" ||
			expiry === "" ||
			cardNumber === "" ||
			name === "" ||
			plots === null ||
			planoSelect === ""
		) {
			Alert.error("Todos os campos são obrigatórios");
			setLoading(false);
			setDisabled(false);
		} else {
			const data = expiry.split("/");
			const numberCard = Number(replaceAll(cardNumber, " ", ""));

			window.PagSeguroDirectPayment.createCardToken({
				cardNumber: numberCard,
				brand: brand?.name,
				cvv,
				expirationMonth: String(data[0]),
				expirationYear: String(data[1]),
				success: function (response) {
					setTimeout(() => {
						checkout(response.card.token);
					}, 1000);
				},
				error: function (response) {
					// Callback para chamadas que falharam.
					setLoading(false);
					setDisabled(false);
				},
				complete: function (response) {
					// Callback para todas chamadas.
				},
			});
		}
	}

	/**
	 * Select options da parcela
	 */

	function options() {
		if (installments) {
			return installments.map((item) => (
				<option
					key={`parcela${item.quantity}`}
					value={item.quantity}
				>{`${item.quantity}x de ${moeda(
					item.installmentAmount
				)}`}</option>
			));
		}
		return <option value="">Parcelas</option>;
	}

	return (
		<>
			<Header numero={3} setTab={setTab} />
			<Container>
				<Card>
					<PaymentCard
						bank="default"
						model="normal"
						type="gold"
						brand={brand?.name}
						number={cardNumber}
						cvv={cvv}
						holderName={name}
						expiration={expiry}
						flipped={flipped}
					/>
				</Card>
				<form method="POST">
					<InputMask
						placeholder="Numero do cartão de crédito"
						mask="9999 9999 9999 9999"
						onChange={(e) => {
							setCardNumber(e.target.value);
							getBrand(e.target.value);
						}}
						onBlur={() => getSenderHash()}
						value={cardNumber}
					/>
					<Row>
						<InputMask
							placeholder="CVV"
							className="cvv"
							mask={brand?.cvvSize === 4 ? "9999" : "999"}
							onChange={(e) => {
								setCvv(e.target.value);
							}}
							onFocus={() => setFlipped(true)}
							onBlur={() => setFlipped(false)}
							value={cvv}
						/>
						<InputMask
							placeholder="Validade"
							className="expiry"
							mask="99/9999"
							onChange={(e) => {
								setExpiry(e.target.value);
							}}
							value={expiry}
						/>
					</Row>

					<select
						placeholder="Plano..."
						value={planoSelect}
						onChange={(e) => {
							var valor;

							if (e.target.value === "1") {
								valor = 88;
							} else if (e.target.value === "2") {
								valor = 342;
							} else if (e.target.value === "3") {
								valor = 540;
							}
							setAmount(valor);
							getInstallments(brand?.name, valor);
							setPlanoSelect(e.target.value);
						}}
					>
						<option value="">Escolha um plano</option>
						<option value="1">Mensal</option>
						<option value="2">Semestral</option>
						<option value="3">Anual</option>
					</select>

					<select
						placeholder="Parcelas..."
						value={plots}
						onChange={(e) => {
							setPlots(e.target.value);
						}}
					>
						{options()}
					</select>

					<input
						placeholder="Nome igual ao cartão"
						name="nome"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Button
						onClick={createCardToken}
						className="btn_padrao"
						appearance="primary"
						disabled={disabled}
						loading={loading}
					>
						Finalizar compra
					</Button>
				</form>
			</Container>
		</>
	);
}

export default Cartao;
