import * as Dialog from "@radix-ui/react-dialog";
import { BsList, BsX } from "react-icons/bs";

import { Nav } from "../Nav";

import { scrollToTop } from "../../../utils/scrollToTop";

import { Trigger, Content, Close } from "./styles";

export function SidebarMobile() {
	return (
		<Dialog.Root>
			<Trigger onClick={scrollToTop}>
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
