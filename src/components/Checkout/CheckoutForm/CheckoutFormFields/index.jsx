import * as MaterialUI from "@mui/material";

function Text({ onChange, input, inputLabel, register }) {
	return (
		<MaterialUI.TextField
			{...input}
			{...inputLabel}
			{...register(input.name)}
			onChange={onChange || null}
			variant="standard"
			required
		/>
	);
}

export const CheckoutFormFields = { Text };
