import * as MaterialUI from "@mui/material";

function Text({ input, handleEvents, label, register }) {
	return (
		<MaterialUI.TextField
			{...input}
			{...register(input.name)}
			{...handleEvents}
			onChange={(e) => {
				register(input.name).onChange(e);
				handleEvents.onChange(e);
			}}
			label={label.value}
			error={input.errors && Object.keys(input?.errors) !== 0}
			variant="standard"
			required
		/>
	);
}

export const Fields = { Text };
