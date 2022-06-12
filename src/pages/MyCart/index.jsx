import { useEffect } from "react";
import { BsCartXFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { Error } from "../../components/Error";
import { Product } from "../../components/Product";
import { Checkout } from "../../components/Checkout";

import { App } from "../../layouts/App";

import { cartSelect, updateTotals } from "../../redux/slices/cart";

import { Title } from "../../GlobalStyles";
import { Container, ContentText, Summary, Content } from "./styles";

export function MyCart() {
	const { products, totals } = useSelector(cartSelect);
	const dispatch = useDispatch();

	useEffect(() => dispatch(updateTotals()), [products]);

	return (
		<App>
			{products.length === 0 ? (
				<Error
					message={"Carrinho vazio"}
					icon={BsCartXFill}
					link={{ text: "Vamos às compras!", href: "/" }}
				/>
			) : (
				<Container>
					<Content>
						<ContentText>
							<Title>seu carrinho</Title>
							<small>{totals.quantity} produtos</small>
						</ContentText>
						<section>
							<ul>
								{products.map((product) => (
									<li key={product.id}>
										<Product attrProduct={product} />
									</li>
								))}
							</ul>
						</section>
					</Content>
					<Summary>
						<Checkout />
					</Summary>
				</Container>
			)}
		</App>
	);
}
