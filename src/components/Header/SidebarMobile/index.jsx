import * as Dialog from "@radix-ui/react-dialog";
import { BsList, BsX } from "react-icons/bs";

import { Nav } from "../Nav";

import { Trigger, Content, Close } from "./styles";

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
