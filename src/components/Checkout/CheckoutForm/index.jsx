import { useState } from "react";
import { useForm } from "react-hook-form";
import { debounce } from "../../../utils/debounce";

import { CheckoutFormFields } from "./CheckoutFormFields";

import { Address, Container, Fields, SubmitButton } from "./styles";

export function CheckoutForm() {
	const [loadingAddress, setLoadingAddress] = useState(false);
	const [address, setAddress] = useState(null);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	console.log(watch("cep"));

	const formSubmit = (data) => {};

	const searchAddressWithZipCode = async (zipCode) => {
		setLoadingAddress(true);

		const response = await fetch(`https://viacep.com.br//ws/${zipCode}/json/`);
		const data = await response.json();

		setLoadingAddress(false);
		setAddress({});
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
					input={{ type: "text", name: "full-name", id: "field" }}
					inputLabel={{ label: "Nome Completo" }}
				/>
			</Fields>
			<Fields>
				<CheckoutFormFields.Text
					register={register}
					input={{ type: "number", name: "zip-code", id: "field" }}
					inputLabel={{ label: "CEP" }}
					onChange={({ target }) =>
						debounce(() => validateZipCode(target.value), 1000)
					}
				/>
				<Address>
					{address && (
						<>
							<small>
								{address?.logradouro} - {address?.bairro}
							</small>
							<small>
								{address?.localidade} - {address?.uf}
							</small>
						</>
					)}
				</Address>
			</Fields>

			<SubmitButton type="submit">Comprar</SubmitButton>
		</Container>
	);
}
