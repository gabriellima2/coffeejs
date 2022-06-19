import { useState } from "react";
import { useForm } from "react-hook-form";

import { Loading } from "../../Loading";
import { FormFields } from "./FormFields";

import { debounce } from "../../../utils/debounce";

import { Address, Container, Fields, SubmitButton, Error } from "./styles";
import { useFetch } from "../../../hooks/useFetch";

const inputAttributes = [
	{
		input: {
			type: "text",
			name: "full-name",
			id: "full-name",
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
		},
		label: { value: "Nome Completo" },
	},
	{
		input: {
			type: "number",
			name: "zip-code",
			id: "zip-code",
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
		},
		label: { value: "CEP" },
	},
];

function testZipCodeWithRegex(zipCode) {
	const regexZipCode = /^[0-9]{8}$/;

	return regexZipCode.test(zipCode);
}

export function Form({ handleOnSubmit }) {
	const [address, setAddress] = useState({});
	const fetch = useFetch();

	const {
		register,
		handleSubmit,
		clearErrors,
		formState: { errors },
	} = useForm();

	const formSubmit = (data) => {
		if (fetch.errorRequest) return;

		handleOnSubmit(data);
	};

	const searchAddressWithZipCode = async (zipCode) => {
		clearErrors();

		const response = await fetch.makeRequisition(
			`https://viacep.com.br/ws/${zipCode}/json/`
		);

		if (!response) return;

		setAddress(response);
	};

	const validateZipCode = (zipCode) => {
		if (!zipCode || !testZipCodeWithRegex(zipCode)) return;

		searchAddressWithZipCode(zipCode);
	};

	const allClean = () => {
		fetch.clearState();
		setAddress({});
	};

	return (
		<Container onSubmit={handleSubmit(formSubmit)}>
			<h1>Preencha os Campos</h1>

			{inputAttributes.map((inputAttribute) => (
				<Fields key={inputAttribute.input.id}>
					<FormFields.Text
						register={register}
						input={{
							...inputAttribute.input,
							errors: errors[inputAttribute.input.id],
						}}
						label={inputAttribute.label}
						onChange={(e) => {
							clearErrors(inputAttribute.input.id);
							allClean();

							if (inputAttribute.input.id === "zip-code") {
								debounce(() => validateZipCode(e.target.value), 800);
								clearErrors("zip-code");
							}
						}}
					/>
					<Error>{errors[inputAttribute.input.id]?.message}</Error>
				</Fields>
			))}

			<Address>
				{fetch.isLoading && <Loading />}
				{address && (
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
			{fetch.errorRequest && (
				<Error>Erro! Por favor, verifique se foi digitado um CEP válido!</Error>
			)}

			<SubmitButton type="submit" disabled={fetch.isLoading}>
				Comprar
			</SubmitButton>
		</Container>
	);
}
