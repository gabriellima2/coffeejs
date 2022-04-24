import { cartActions } from "../../constants/actions";

const INITIAL_STATE = {
	products: [],
	total: {
		price: 0,
		quantity: 0,
	},
};

const cart = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case cartActions.ADD_TO_CART:
			return {
				...state,
				products: [...state.products, payload],
			};

		case cartActions.REMOVE_PRODUCTS:
			const productRemoved = state.products.filter(
				(prod) => prod.id !== payload.id
			);

			return {
				...state,
				products: productRemoved,
			};

		case cartActions.UPDATE_TOTAL:
			const newTotal = state.products.reduce(
				(acc, product) => {
					return {
						price: (acc.price += product.totalPrice),
						quantity: (acc.quantity += product.totalQuantity),
					};
				},
				{ price: 0, quantity: 0 }
			);

			return {
				...state,
				total: newTotal,
			};

		case cartActions.UPDATE_PRODUCTS_IN_CART:
			const updatedCart = state.products.map((prod) => {
				if (prod.id === payload.id) {
					prod.totalPrice = payload.totalPrice;
					prod.totalQuantity = payload.totalQuantity;
				}
				return prod;
			});

			return {
				...state,
				products: updatedCart,
			};

		default:
			return state;
	}
};

export const cartSelect = {
	products: (state) => state.cart.products,
	total: (state) => state.cart.total,
};

export default cart;
