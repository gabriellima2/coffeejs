import { useForm } from "react-hook-form";
import { debounce } from "../../../utils/debounce";

import { CheckoutFormFields } from "./CheckoutFormFields";

import { Container, Fields, SubmitButton } from "./styles";

export function CheckoutForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	console.log(watch("cep"));

	const formSubmit = (data) => {};

	const requestApi = () => {
		console.log("requisição");
	};

	const handleZipCodeTyping = (zipCode) => {
		const regexZipCode = /^[0-9]{8}$/;

		if (!zipCode || !regexZipCode.test(zipCode)) return;

		requestApi();
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
						debounce(() => handleZipCodeTyping(target.value), 1000)
					}
				/>
			</Fields>
			<Fields>
				<CheckoutFormFields.Text
					register={register}
					input={{ type: "text", name: "public-place", id: "field" }}
					inputLabel={{ label: "Logradouro" }}
				/>
				<CheckoutFormFields.Text
					register={register}
					input={{ type: "text", name: "neighborhood", id: "field" }}
					inputLabel={{ label: "Bairro" }}
				/>
			</Fields>

			<SubmitButton type="submit">Comprar</SubmitButton>
		</Container>
	);
}
