import * as Dialog from "@radix-ui/react-dialog";
import { BsList, BsX } from "react-icons/bs";

import { Trigger, Content, Close } from "./styles";

import { Nav } from "../Nav";

export function SidebarMobile() {
	return (
		<Dialog.Root>
			<Trigger>
				<BsList />
			</Trigger>
			<Content>
				<Close>
					<BsX />
				</Close>
				<Nav />
			</Content>
		</Dialog.Root>
	);
}
