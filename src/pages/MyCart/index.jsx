import { useEffect } from "react";
import { BsCartXFill, BsChevronCompactLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { Error } from "../../components/Error";
import { Product } from "../../components/Product";
import { CheckoutForm, CheckoutSummary } from "../../components/Checkout";

import { cartSelect, updateTotals } from "../../redux/slices/cart";

import { Title } from "../../GlobalStyles";
import {
	Container,
	Text,
	Content,
	ProductsOnCart,
	ShoppingSummary,
	BuyerDataForm,
	Back,
} from "./styles";
import { Link } from "react-router-dom";

export function MyCart() {
	const { products, totals } = useSelector(cartSelect);
	const dispatch = useDispatch();

	useEffect(() => dispatch(updateTotals()), [products]);

	if (products.length === 0) {
		return (
			<Error
				message={"Carrinho vazio"}
				icon={BsCartXFill}
				link={{ text: "Vamos às compras!", href: "/" }}
			/>
		);
	}

	return (
		<Container>
			<Text>
				<Title>seu carrinho</Title>
				<small>{totals.quantity} produtos</small>
			</Text>
			<Content>
				<ShoppingSummary>
					<Back>
						<Link to="/#catalog">
							<BsChevronCompactLeft />
							<span> Voltar ao Catálogo</span>
						</Link>
					</Back>
					<CheckoutSummary />
				</ShoppingSummary>
				<ProductsOnCart>
					<ul>
						{products.map((product, index) => (
							<li key={product.id}>
								<Product attrProduct={{ ...product, index }} />
							</li>
						))}
					</ul>
				</ProductsOnCart>
				<BuyerDataForm>
					<CheckoutForm />
				</BuyerDataForm>
			</Content>
		</Container>
	);
}
