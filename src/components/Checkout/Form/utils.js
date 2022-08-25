import * as yup from "yup";

export const fieldAttributes = [
	{
		input: {
			type: "text",
			name: "full-name",
			id: "full-name",
		},
		label: { value: "Nome Completo" },
		yup: yup
			.string()
			.min(2)
			.matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "Somente letras!")
			.required(),
	},
	{
		input: {
			type: "string",
			name: "zip-code",
			id: "zip-code",
		},
		label: { value: "CEP" },
		yup: yup
			.string()
			.matches(/^[0-9]{5}-[0-9]{3}$/, "Por favor, digite um CEP válido")
			.required(),
	},
];

const fieldsWithYupRules = fieldAttributes.reduce(
	(acc, current) => (acc = { ...acc, [current.input.id]: current.yup }),
	{}
);

export const schema = yup.object().shape(fieldsWithYupRules);
