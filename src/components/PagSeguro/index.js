import React, { useState, useEffect } from "react";

import InputMask from "react-input-mask";

import { Container, Card, Row } from "./styles";
import api from "~/services/api";

import PaymentCard from "react-payment-card-component";

function PagSeguro() {
	/**
	 * States
	 */

	/**
	 * Informações para o checkout
	 */

	const [senderHash, setSenderHash] = useState();
	// const [session, setSession] = useState();
	const [cardToken, setCardToken] = useState();

	/**
	 * Dados do cartao
	 */

	const [flipped, setFlipped] = useState(false);
	const [cvv, setCvv] = useState(986);
	const [expiry, setExpiry] = useState("04/2021");
	const [name, setName] = useState("Lucas F Xavier");
	const [cardNumber, setCardNumber] = useState("5467 1270 8429 4277");
	const [brand, setBrand] = useState();

	/**
	 * Parcelas
	 */

	const [plots, setPlots] = useState(1);
	const [installments, setInstallments] = useState();

	/**
	 * Produtos (Pacotes)
	 */
	const [amount] = useState(500.0);

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
				console.log(response);
				// setSession(response.data?.code);

				window.PagSeguroDirectPayment.setSessionId(response.data?.code);
			})
			.catch((error) => console.log(error.response));
	}

	function checkout() {
		console.log({
			cartao_token: cardToken,
			hash: senderHash,
			item: [
				{
					itemId: 1,
					itemDescription: "Curso báisco",
					itemAmount: amount,
					itemQuantity: 1,
				},
			],
			reference: "user123",
			senderName: name,
			senderCPF: "02966994118",
			senderAreaCode: 61,
			senderPhone: 999999999,
			senderEmail: "teste@sandbox.pagseguro.com.br",
			installmentQuantity: plots,
			installmentValue: installments[plots - 1].installmentAmount,
			creditCardHolderName: name,
			creditCardHolderCPF: "02966994118",
			creditCardHolderBirthDate: "03/11/1989",
			creditCardHolderAreaCode: 61,
			creditCardHolderPhone: 999999999,
			billingAddressStreet: "Qr 406 conjuto 13",
			billingAddressNumber: 20,
			billingAddressComplement: "",
			billingAddressDistrict: "Norte",
			billingAddressPostalCode: "72318314",
			billingAddressCity: "Brasília",
			billingAddressState: "DF",
		});
		api.post("pagamento/checkout", {
			cartao_token: cardToken,
			hash: senderHash,
			item: [
				{
					itemId: 1,
					itemDescription: "Curso básico",
					itemAmount: amount,
					itemQuantity: 1,
				},
			],
			reference: "user123",
			senderName: name,
			senderCPF: "02966994118",
			senderAreaCode: 61,
			senderPhone: 999999999,
			senderEmail: "teste@sandbox.pagseguro.com.br",
			installmentQuantity: plots,
			installmentValue: installments[plots - 1].installmentAmount,
			creditCardHolderName: name,
			creditCardHolderCPF: "02966994118",
			creditCardHolderBirthDate: "03/11/1989",
			creditCardHolderAreaCode: 61,
			creditCardHolderPhone: 999999999,
			billingAddressStreet: "Qr 406 conjuto 13",
			billingAddressNumber: 20,
			billingAddressComplement: "",
			billingAddressDistrict: "Norte",
			billingAddressPostalCode: "72318314",
			billingAddressCity: "Brasília",
			billingAddressState: "DF",
		})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => console.log(error.response));
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
				console.log(response.message);
				return false;
			}
			setSenderHash(response.senderHash);
		});
	}

	/**
	 * Pegar bandeira do cartão
	 */

	function getBrand(number) {
		let cleanSpaces = replaceAll(number, " ", "");
		let cleanUnderline = replaceAll(cleanSpaces, "_", "");

		if (cleanUnderline.length === 6) {
			window.PagSeguroDirectPayment.getBrand({
				cardBin: cleanUnderline,
				success: function (response) {
					setBrand(response.brand);
					getInstallments(response.brand.name);
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

	function getInstallments(brand) {
		window.PagSeguroDirectPayment.getInstallments({
			amount,
			maxInstallmentNoInterest: 12,
			brand,
			success: function (response) {
				setInstallments(response.installments[brand]);
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

	function createCardToken(e) {
		e.preventDefault();

		const data = expiry.split("/");
		const numberCard = Number(replaceAll(cardNumber, " ", ""));

		console.log({
			cardNumber: numberCard,
			brand: brand?.name,
			cvv,
			expirationMonth: String(data[0]),
			expirationYear: String(data[1]),
		});

		window.PagSeguroDirectPayment.createCardToken({
			cardNumber: numberCard,
			brand: brand?.name,
			cvv,
			expirationMonth: String(data[0]),
			expirationYear: String(data[1]),
			success: function (response) {
				setCardToken(response.card.token);
			},
			error: function (response) {
				// Callback para chamadas que falharam.
			},
			complete: function (response) {
				// Callback para todas chamadas.
			},
		});
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
				<form onSubmit={createCardToken}>
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
					<button className="btn_padrao">Comprar</button>
				</form>
			</Container>

			<button className="btn_padrao" onClick={checkout}>
				TESTE
			</button>
		</>
	);
}

export default PagSeguro;
