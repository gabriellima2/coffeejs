import * as MaterialUI from "@mui/material";

function Text({ onChange, input, label, register }) {
	return (
		<MaterialUI.TextField
			error={input.errors && Object.keys(input?.errors) !== 0}
			{...input}
			label={label.value}
			{...register(input.name, input.rules)}
			onChange={onChange || null}
			variant="standard"
			required
		/>
	);
}

export const FormFields = { Text };
