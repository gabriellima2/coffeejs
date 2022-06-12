import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { Nav } from "./Nav";
import { SidebarMobile } from "./SidebarMobile";

import { Logo } from "../../infra/Logo";

import { CartButton, Container, Content, ControlVisibility } from "./styles";

export default function Header() {
	return (
		<Container>
			<Logo />

			<Content>
				<ControlVisibility>
					<Nav />
				</ControlVisibility>

				<Link to={"/mycart"}>
					<CartButton>
						<BsCartFill />
					</CartButton>
				</Link>

				<SidebarMobile />
			</Content>
		</Container>
	);
}
