import { useSelector } from "react-redux";

import { cartSelect } from "../../../redux/slices/cart";

import { Container, Total, Title, Text } from "./styles";

export function CheckoutSummary() {
	const { totals } = useSelector(cartSelect);

	return (
		<Container>
			<Title>Resumo</Title>

			<section>
				<Text>
					Subtotal<span>R${totals.price.toFixed(2)}</span>
				</Text>
				<Text>
					Frete<span>R$5,00</span>
				</Text>
			</section>

			<Total>
				<span>Total</span> R${(totals.price + 5).toFixed(2)}
			</Total>
		</Container>
	);
}
