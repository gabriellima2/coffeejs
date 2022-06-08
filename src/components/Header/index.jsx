import { useSelector } from "react-redux";
import { BsCart2, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

import { cartSelector } from "../../redux/reducers/cart";

import Nav from "./Nav";
import MenuMobile from "./MobileMenu";

import { MobileMenuContextProvider } from "../../context/MobileMenuContext";

import { Logo } from "../../infra/Logo";

import { Container, ActionButtons, Cart, ProductsTotal } from "./styles";

export default function Header() {
	const { quantity } = useSelector(cartSelector.total);

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
						<Link to="/mycart">
							<ProductsTotal>{quantity}</ProductsTotal>
							<BsCart2 />
						</Link>
					</Cart>
				</ActionButtons>
			</Container>
		</MobileMenuContextProvider>
	);
}
