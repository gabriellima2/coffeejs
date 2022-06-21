import * as MaterialUI from "@mui/material";

function Text({ input, methods, label, register }) {
	return (
		<MaterialUI.TextField
			{...input}
			{...register(input.name, input.rules)}
			{...methods}
			label={label.value}
			error={input.errors && Object.keys(input?.errors) !== 0}
			variant="standard"
			required
		/>
	);
}

export const FormFields = { Text };
