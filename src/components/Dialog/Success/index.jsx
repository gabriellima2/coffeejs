import * as RadixDialog from "@radix-ui/react-dialog";

export function Success() {
	return (
		<RadixDialog.Root>
			<RadixDialog.Trigger></RadixDialog.Trigger>

			<RadixDialog.Content>
				<RadixDialog.Close></RadixDialog.Close>
			</RadixDialog.Content>
		</RadixDialog.Root>
	);
}
