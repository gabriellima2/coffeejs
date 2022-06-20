import { forwardRef, useState, useImperativeHandle } from "react";
import { Dialog } from "@headlessui/react";
import { BsX } from "react-icons/bs";

import { Nav } from "../Nav";

import { Content, Close } from "./styles";

function SidebarMobile(props, ref) {
	const [isOpen, setIsOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			handleOpenSidebar: handleOpen,
		};
	});

	const handleOpen = () => setIsOpen(true);

	const handleClose = () => setIsOpen(false);

	return (
		<Dialog open={isOpen} onClose={handleClose}>
			<Content>
				<Close onClick={handleClose}>
					<BsX />
				</Close>
				<Nav closeSidebarOnClick={handleClose} />
			</Content>
		</Dialog>
	);
}

export default forwardRef(SidebarMobile);
