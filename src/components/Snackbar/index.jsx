import { Alert, Snackbar } from "@mui/material";

export function Snackbar() {
	return (
		<Snackbar open={true} onClose={() => {}}>
			<Alert onClose={() => {}} severity="success">
				{error ? error : ""}
			</Alert>
		</Snackbar>
	);
}
