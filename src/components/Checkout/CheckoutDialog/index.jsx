import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { BsX } from "react-icons/bs";

export function CheckoutDialog({ trigger, close, children }) {
	return (
		<Dialog.Root>
			<Dialog.Trigger style={trigger.style}>
				{React.createElement(trigger.element, null)}
			</Dialog.Trigger>

			<Dialog.Content>
				<Dialog.Close style={{ color: "#000" }}>
					<BsX />
				</Dialog.Close>
				{children}
			</Dialog.Content>
		</Dialog.Root>
	);
}
