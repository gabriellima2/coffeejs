import { useState } from "react";
import { useForm } from "react-hook-form";

import { Loading } from "../../Loading";
import { CheckoutFormFields } from "./CheckoutFormFields";

import { debounce } from "../../../utils/debounce";

import { Address, Container, Fields, SubmitButton } from "./styles";

export function CheckoutForm() {
	const [requestError, setRequestError] = useState(false);
	const [loadingAddress, setLoadingAddress] = useState(false);
	const [address, setAddress] = useState(null);

	const {
		register,
		handleSubmit,
		clearErrors,
		formState: { errors },
	} = useForm();

	const formSubmit = (data) => {};

	const searchAddressWithZipCode = async (zipCode) => {
		setLoadingAddress(true);
		setRequestError(false);
		clearErrors();

		try {
			const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);

			const data = await response.json();

			setLoadingAddress(false);
			setAddress(data);
		} catch (err) {
			setRequestError(true);
		}
	};

	const validateZipCode = (zipCode) => {
		const regexZipCode = /^[0-9]{8}$/;

		if (!zipCode || !regexZipCode.test(zipCode)) return;

		searchAddressWithZipCode(zipCode);
	};

	return (
		<Container onSubmit={handleSubmit(formSubmit)}>
			<h1>Preencha os Campos</h1>

			<Fields>
				<CheckoutFormFields.Text
					register={register}
					input={{
						type: "text",
						name: "full-name",
						id: "field",
						errors: errors["full-name"],
						rules: {
							required: "Campo de nome obrigatótio!",
							maxLength: {
								value: 30,
								message: "Nome com máximo de 30 caracteres!",
							},
							minLength: {
								value: 2,
								message: "Nome com minímo de 2 caracteres!",
							},
						},
					}}
					inputLabel={{ label: "Nome Completo" }}
					clearErrors={clearErrors}
					onChange={() => clearErrors("full-name")}
				/>
				<small>{errors["full-name"]?.message}</small>
			</Fields>
			<Fields>
				<CheckoutFormFields.Text
					error={errors["zip-code"]}
					register={register}
					input={{
						type: "number",
						name: "zip-code",
						id: "field",
						errors: errors["zip-code"],
						rules: {
							required: "Campo CEP obrigatório!",
							maxLength: {
								value: 8,
								message: "CEP tem o máximo de 8 números!",
							},
							minLength: {
								value: 8,
								message: "CEP tem o minímo de 8 números!",
							},
							pattern: /^[0-9]{8}$/,
						},
					}}
					inputLabel={{ label: "CEP" }}
					clearErrors={clearErrors}
					onChange={({ target }) => {
						debounce(() => validateZipCode(target.value), 1000);
						clearErrors("zip-code");
					}}
				/>
				<Address>
					{loadingAddress && <Loading />}
					{address && !loadingAddress && (
						<>
							<small>
								{address?.logradouro} {address?.bairro}
							</small>
							<small>
								{address?.localidade} {address?.uf}
							</small>
						</>
					)}
				</Address>
				<small>{errors["zip-code"]?.message}</small>
			</Fields>
			{requestError && (
				<span>Erro! Por favor, verifique se foi digitado um CEP válido!</span>
			)}

			<SubmitButton type="submit" disabled={loadingAddress}>
				Comprar
			</SubmitButton>
		</Container>
	);
}
