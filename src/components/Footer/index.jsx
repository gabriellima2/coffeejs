import { BsGithub, BsLinkedin } from "react-icons/bs";

import { Logo } from "../../infra/Logo";

import {
	Container,
	MainInformation,
	Nav,
	List,
	ListItem,
	AreaDev,
	Name,
} from "./styles";

export default function Footer() {
	return (
		<Container>
			<MainInformation>
				<Logo />
				<Nav id="contact">
					<List>
						<ListItem>
							<a target="_blank" href="https://github.com/gabriellima2">
								<BsGithub />
							</a>
						</ListItem>
						<ListItem>
							<a
								target="_blank"
								href="https://www.linkedin.com/in/gabriel-lima-860612236/"
							>
								<BsLinkedin />
							</a>
						</ListItem>
					</List>
				</Nav>
			</MainInformation>
			<AreaDev>
				<Name>Gabriel</Name>
			</AreaDev>
		</Container>
	);
}
