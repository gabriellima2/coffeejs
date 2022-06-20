import { useEffect, useState } from "react";
import { BsCartXFill, BsChevronCompactLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Error } from "../../components/Error";
import { Product } from "../../components/Product";
import { Checkout } from "../../components/Checkout";
import { Dialog } from "../../components/Dialog";

import { cartSelect, updateTotals } from "../../redux/slices/cart";

import { scrollToTop } from "../../utils/scrollToTop";

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

export function MyCart() {
	const [checkoutIsCompleted, setCheckoutIsCompleted] = useState(false);
	const { products, totals } = useSelector(cartSelect);
	const dispatch = useDispatch();

	useEffect(() => scrollToTop(), []);

	useEffect(() => dispatch(updateTotals()), [products]);

	const completeCheckout = (data) => setCheckoutIsCompleted(true);

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
			{checkoutIsCompleted && <Dialog.Success isOpen={checkoutIsCompleted} />}
			<Dialog.Success />
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
					<Checkout.Summary />
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
					<Checkout.Form handleOnSubmit={completeCheckout} />
				</BuyerDataForm>
			</Content>
		</Container>
	);
}
