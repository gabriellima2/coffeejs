import { useSelector } from "react-redux";
import { BsCart2, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

import { cartSelect } from "../../redux/reducers/cart";

import Logo from "../Logo";
import Nav from "./Nav";
import MenuMobile from "./MobileMenu";

import { MobileMenuContextProvider } from "../../context/MobileMenuContext";

import { Container, ActionButtons, Cart, ProductsTotal } from "./styles";

export default function Header() {
	const { quantity } = useSelector(cartSelect.total);

	return (
		<MobileMenuContextProvider>
			<Container>
				<Logo />
				<MenuMobile />
				<Nav />
				<ActionButtons>
					<button>
						<BsSearch />
					</button>
					<Cart>
						<Link to="/cart">
							<ProductsTotal>{quantity}</ProductsTotal>
							<BsCart2 />
						</Link>
					</Cart>
				</ActionButtons>
			</Container>
		</MobileMenuContextProvider>
	);
}
