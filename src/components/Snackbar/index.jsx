import { useImperativeHandle, forwardRef, useState } from "react";
import * as Mui from "@mui/material";

export default forwardRef(function Snackbar({ type, message }, ref) {
	const [isActive, setIsActive] = useState(false);

	const handleOpen = () => setIsActive(true);

	const handleClose = () => setIsActive(false);

	useImperativeHandle(ref, () => {
		return {
			handleOpenSnackbar: handleOpen,
		};
	});

	return (
		<Mui.Snackbar open={isActive} autoHideDuration={4000} onClose={handleClose}>
			<Mui.Alert severity={type} onClose={handleClose}>
				{message}
			</Mui.Alert>
		</Mui.Snackbar>
	);
});
