import { cartActions } from "../../constants/actions";

const addToCart = (product) => {
	return {
		type: cartActions.ADD_TO_CART,
		payload: product,
	};
};

const removeProducts = (product) => {
	return {
		type: cartActions.REMOVE_PRODUCTS,
		payload: product,
	};
};

const updateTotal = () => {
	return {
		type: cartActions.UPDATE_TOTAL,
	};
};

const updateProductsInCart = (product) => {
	return {
		type: cartActions.UPDATE_PRODUCTS_IN_CART,
		payload: product,
	};
};

export { addToCart, removeProducts, updateTotal, updateProductsInCart };
