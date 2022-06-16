import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { Nav } from "./Nav";
import { SidebarMobile } from "./SidebarMobile";

import { Logo } from "../../infra/Logo";

import { Container, Content, ControlVisibility } from "./styles";
import { ViewCartButton } from "../Buttons/ViewCartButton";

export default function Header() {
	return (
		<Container>
			<Logo />

			<Content>
				<ControlVisibility>
					<Nav />
				</ControlVisibility>

				<ViewCartButton />

				<SidebarMobile />
			</Content>
		</Container>
	);
}
