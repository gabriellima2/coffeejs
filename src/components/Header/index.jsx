import { useRef } from "react";
import { BsList } from "react-icons/bs";

import { Nav } from "./Nav";
import SidebarMobile from "./SidebarMobile";
import { Button } from "../Button";

import { Logo } from "../../infra/Logo";

import {
	Container,
	Content,
	ControlVisibility,
	OpenSidebarButton,
} from "./styles";

export default function Header() {
	const sidebarRef = useRef(null);

	const openSidebar = () => sidebarRef?.current.handleOpenSidebar();

	return (
		<Container>
			<Logo />

			<Content>
				<ControlVisibility>
					<Nav />
				</ControlVisibility>

				<Button.ViewCart />

				<OpenSidebarButton onClick={openSidebar}>
					<BsList />
				</OpenSidebarButton>

				<SidebarMobile ref={sidebarRef} />
			</Content>
		</Container>
	);
}
