import { Nav } from "./Nav";
import { SidebarMobile } from "./SidebarMobile";
import { Button } from "../Button";

import { Logo } from "../../infra/Logo";

import { Container, Content, ControlVisibility } from "./styles";

export default function Header() {
	return (
		<Container>
			<Logo />

			<Content>
				<ControlVisibility>
					<Nav />
				</ControlVisibility>

				<Button.ViewCart />

				<SidebarMobile />
			</Content>
		</Container>
	);
}
