import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { cartSelect } from "../../../redux/slices/cart";

import { Container } from "./styles";

export function ViewCartButton() {
	const { totals } = useSelector(cartSelect);

	return (
		<Link to={"/mycart"}>
			<Container>
				<p>{totals.quantity}</p>
				<BsCartFill />
			</Container>
		</Link>
	);
}
