import { useState } from "react";

import { useFetch } from "../../../hooks/useFetch";

import { Loading } from "../../Loading";
import { DynamicForm } from "../../DynamicForm";

import { debounce } from "../../../utils/debounce";
import { fieldAttributes, schema } from "./utils";

import { Address } from "./styles";

function testZipCodeWithRegex(zipCode) {
	const regexZipCode = /^[0-9]{8}$/;

	return regexZipCode.test(zipCode);
}

export function Form({ sendData }) {
	const [address, setAddress] = useState({});
	const { clearState, errorRequest, isLoading, makeRequisition } = useFetch();

	const handleFormSubmit = (data) => {
		if (errorRequest) return;

		sendData(data);
	};

	const searchAddressWithZipCode = async (zipCode) => {
		const response = await makeRequisition(
			`https://viacep.com.br/ws/${zipCode}/json/`
		);

		if (!response) return;

		setAddress(response);
	};

	const validateZipCode = (zipCode) => {
		if (!zipCode || !testZipCodeWithRegex(zipCode)) return;

		searchAddressWithZipCode(zipCode);
	};

	const handleFieldsChange = (e) => {
		clearState();

		if (e.target.id === "zip-code") {
			debounce(() => validateZipCode(e.target.value), 800);
		}
	};

	return (
		<DynamicForm
			fields={{
				attributes: fieldAttributes,
				handleEvents: {
					onChange: handleFieldsChange,
				},
			}}
			yupSchema={schema}
			handleFormSubmit={handleFormSubmit}
			disableSubmitButton={isLoading || !Object.keys(address).length}
		>
			<Address>
				{isLoading && <Loading />}
				{address && (
					<>
						<small>
							{address?.logradouro || "Logradouro"}
							{" - "}
							{address?.bairro || "Bairro"}
						</small>
						<small>
							{address?.localidade || "Cidade"}
							{" - "}
							{address?.uf || "UF"}
						</small>
					</>
				)}
			</Address>
		</DynamicForm>
	);
}
