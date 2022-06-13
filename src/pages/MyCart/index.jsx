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
	Main,
	Text,
	ProductsContainer,
	CheckoutFormContainer,
	CheckoutSummaryContainer,
	Back,
} from "./styles";
import { Link } from "react-router-dom";

export function MyCart() {
	const { products, totals } = useSelector(cartSelect);
	const dispatch = useDispatch();

	useEffect(() => dispatch(updateTotals()), [products]);

	return (
		<>
			{products.length === 0 ? (
				<Error
					message={"Carrinho vazio"}
					icon={BsCartXFill}
					link={{ text: "Vamos às compras!", href: "/" }}
				/>
			) : (
				<Container>
					<Text>
						<Title>seu carrinho</Title>
						<small>{totals.quantity} produtos</small>
					</Text>
					<Main>
						<ProductsContainer>
							<ul>
								{products.map((product) => (
									<li key={product.id}>
										<Product attrProduct={product} />
									</li>
								))}
							</ul>
						</ProductsContainer>
						<CheckoutFormContainer>
							<CheckoutForm />
						</CheckoutFormContainer>

						<CheckoutSummaryContainer>
							<Back>
								<Link to="/#catalog">
									<BsChevronCompactLeft />
									<span> Voltar ao Catálogo</span>
								</Link>
							</Back>
							<CheckoutSummary />
						</CheckoutSummaryContainer>
					</Main>
				</Container>
			)}
		</>
	);
}
