import { BsCartCheckFill, BsX } from "react-icons/bs";

import { CheckoutDialog } from "./CheckoutDialog";
import { CheckoutForm } from "./CheckoutForm";

export function Checkout() {
	return (
		<CheckoutDialog
			trigger={{ element: BsCartCheckFill, style: { color: "#000" } }}
			close={{ element: BsX, style: { color: "#000" } }}
		>
			<CheckoutForm />
		</CheckoutDialog>
	);
}
