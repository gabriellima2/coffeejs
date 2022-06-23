import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Fields } from "./Fields";

import { Error } from "../../GlobalStyles";
import { Container, Fieldset, SubmitButton } from "./styles";

export function DynamicForm({
	fields,
	yupSchema,
	handleFormSubmit,
	disableSubmitButton,
	children,
}) {
	const {
		handleSubmit,
		register,
		clearErrors,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(yupSchema),
		mode: "onChange",
	});

	const validateFormFieldsToSubmit = async (data) => {
		const isValid = await yupSchema.isValid(data);

		if (!isValid) return;

		clearErrors();
		handleFormSubmit(data);
	};

	return (
		<Container onSubmit={handleSubmit(validateFormFieldsToSubmit)}>
			<h1>PREENCHA OS CAMPOS</h1>
			<section>
				{fields?.attributes.map((attribute) => (
					<Fieldset key={attribute.input.id}>
						<Fields.Text
							input={{
								...attribute.input,
								errors: errors[attribute.input.id],
							}}
							label={attribute.label}
							handleEvents={fields.handleEvents}
							register={register}
						/>
						<Error role="alert">{errors[attribute.input.id]?.message}</Error>
					</Fieldset>
				))}
			</section>
			{children}
			<SubmitButton type="submit" disabled={disableSubmitButton || !isValid}>
				Comprar
			</SubmitButton>
		</Container>
	);
}
