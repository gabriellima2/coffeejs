import { useContext } from "react";
import { Link } from "react-router-dom";
import { MobileMenuContext } from "../../../context/MobileMenuContext";

import { ItemList, LinksList, NavStyle } from "./styles";

export default function Nav() {
	const { activated, deactivated } = useContext(MobileMenuContext);

	return (
		<NavStyle menuMobileIsActivated={activated}>
			<LinksList onClick={() => deactivated()}>
				<ItemList>
					<Link to="/">Início</Link>
				</ItemList>
				<ItemList>
					<a href="https://github.com/gabriellima2/pizzajs" target="_blank">
						Repositório
					</a>
				</ItemList>
				<ItemList>
					<a href="#contact">Contato</a>
				</ItemList>
			</LinksList>
		</NavStyle>
	);
}
