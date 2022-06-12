import { useSelector } from "react-redux";

import { cartSelect } from "../../redux/slices/cart";

import { Container, AmountsPayment, Total, BuyButton } from "./styles";

export function Checkout() {
	const { totals } = useSelector(cartSelect);

	return (
		<Container>
			<h1>informações</h1>
			<AmountsPayment>
				<p>
					subtotal<span>R${totals.price.toFixed(2)}</span>
				</p>
				<p>
					frete<span>R$5,00</span>
				</p>
			</AmountsPayment>
			<Total>
				total <span>R${(totals.price + 5).toFixed(2)}</span>
			</Total>
			<BuyButton type="button">Comprar</BuyButton>
		</Container>
	);
}
