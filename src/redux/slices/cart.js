import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	totals: {
		price: 0,
		quantity: 0,
	},
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, { type, payload }) => {
			state.totals.price += payload.price;
			state.totals.quantity += payload.quantity;

			const total = state.totals.price * state.totals.quantity;

			payload = { ...payload, total };

			state.products = [...state.products, payload];
		},

		removeProduct: (state, { type, payload }) => {
			state.products = state.products.filter(
				(product) => product.id !== payload
			);
		},

		updateProducts: () => {},

		updateTotal: (state, { type, payload }) => {},
	},
});

export const cartSelect = (state) => state.cart;

export const { addProduct, removeProduct, updateProducts, updateTotal } =
	cartSlice.actions;

export default cartSlice.reducer;
