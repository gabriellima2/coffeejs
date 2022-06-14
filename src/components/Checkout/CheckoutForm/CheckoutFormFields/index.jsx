import * as MaterialUI from "@mui/material";

function Text({ onChange, input, inputLabel, register }) {
	return (
		<MaterialUI.TextField
			error={input.errors && Object.keys(input?.errors) !== 0}
			{...input}
			{...inputLabel}
			{...register(input.name, input.rules)}
			onChange={onChange || null}
			variant="standard"
			required
		/>
	);
}

export const CheckoutFormFields = { Text };
