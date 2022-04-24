import { useContext, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../GlobalStyles";

import { cartSelect } from "../../redux/reducers/cart";
import {
	addToCart,
	updateTotal,
	updateProductsInCart,
} from "../../redux/actions/cart";

import { pages, actions } from "./constants";
import handleProductData from "./functions/handleProductData";

import { PopupContext } from "../../context/PopupContext";

import { Container, Decrement, Increment, ToggleQuantity } from "./styles.js";

export default function ActionsButtons({ page, product }) {
	const [quantity, setQuantity] = useState(product.totalQuantity || 1);
	const { showPopup } = useContext(PopupContext);

	const productsInCart = useSelector(cartSelect.products);
	const dispatch = useDispatch();

	useEffect(() => dispatch(updateTotal()), [productsInCart]);

	useEffect(() => {
		if (page === pages.ON_CART) {
			handleAddToCart(product);
		}
	}, [quantity]);

	const handleAddToCart = (product) => {
		const sameProduct = productsInCart.find((prod) => prod.id === product.id);

		const updatedProduct = handleProductData(product, quantity);

		if (sameProduct) {
			dispatch(updateProductsInCart(updatedProduct));
			return;
		}

		dispatch(addToCart(updatedProduct));
		showPopup();
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

			{page === pages.PRODUCT_DETAILS ? (
				<Button onClick={() => handleAddToCart(product)}>
					ADICIONAR AO CARRINHO
				</Button>
			) : null}
		</Container>
	);
}
