import { useSelector } from "react-redux";

import { cartSelect } from "../../../redux/slices/cart";

import { randomNumberGenerator } from "../../../utils/randomNumberGenerator";

import { Container, Total, Price } from "./styles";

const SHIPPING_COST = randomNumberGenerator(5, 20);

export function Summary() {
	const { totals } = useSelector(cartSelect);

	return (
		<Container>
			<h1 style={{ display: "none" }}>Resumo</h1>

			<section>
				<Price>
					Subtotal<span>R${totals.price.toFixed(2)}</span>
				</Price>
				<Price>
					Frete<span>R${SHIPPING_COST.toFixed(2)}</span>
				</Price>
			</section>

			<Total>
				<span>Total</span> R${(totals.price + 5).toFixed(2)}
			</Total>
		</Container>
	);
}
