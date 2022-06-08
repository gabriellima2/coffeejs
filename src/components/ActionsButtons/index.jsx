import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../GlobalStyles";

import { cartSelector } from "../../redux/reducers/cart";
import {
	addToCart,
	updateTotal,
	updateProductsInCart,
} from "../../redux/actions/cart";

import { actions } from "./constants";
import { renderPages } from "../../constants";
import handleProductData from "./functions/handleProductData";

import { Container, Decrement, Increment, ToggleQuantity } from "./styles.js";

export default function ActionsButtons({ page, product }) {
	const [quantity, setQuantity] = useState(product.totalQuantity || 1);

	const productsInCart = useSelector(cartSelector.products);
	const dispatch = useDispatch();

	useEffect(() => dispatch(updateTotal()), [productsInCart]);

	useEffect(() => {
		if (page === renderPages.ON_CART) {
			const updatedProduct = handleProductData(product, quantity);

			dispatch(updateProductsInCart(updatedProduct));
		}
	}, [quantity]);

	const handleAddToCart = (product) => {
		const sameProduct = productsInCart.find((prod) => prod.id === product.id);

		const updatedProduct = handleProductData(product, quantity);

		if (sameProduct) {
			dispatch(updateProductsInCart(updatedProduct));
		} else {
			dispatch(addToCart(updatedProduct));
		}
	};

	const handleQuantity = (action) => {
		if (action === actions.DECREMENT) {
			setQuantity((prevState) => (prevState > 1 ? prevState - 1 : prevState));
		} else if (action === actions.INCREMENT) {
			setQuantity((prevState) => prevState + 1);
		}
	};

	return (
		<Container>
			<ToggleQuantity>
				<Decrement onClick={() => handleQuantity(actions.DECREMENT)}>
					-
				</Decrement>
				<p>{quantity}</p>
				<Increment onClick={() => handleQuantity(actions.INCREMENT)}>
					+
				</Increment>
			</ToggleQuantity>

			{page === renderPages.PRODUCT_DETAILS ? (
				<Button onClick={() => handleAddToCart(product)}>
					ADICIONAR AO CARRINHO
				</Button>
			) : null}
		</Container>
	);
}
