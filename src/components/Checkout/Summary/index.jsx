import { useSelector } from "react-redux";

import { cartSelect } from "../../../redux/slices/cart";

import { Container, Total, Price } from "./styles";

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
					Frete<span>R$5,00</span>
				</Price>
			</section>

			<Total>
				<span>Total</span> R${(totals.price + 5).toFixed(2)}
			</Total>
		</Container>
	);
}
