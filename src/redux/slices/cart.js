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
		addProduct: (state, action) => {
			state.totals.price += action.payload.price;
			state.products = [...state.products, action.payload];
		},

		removeProduct: () => {},

		updateProducts: () => {},

		updateTotal: () => {},
	},
});

export const cartSelect = (state) => state.cart;

export const { addProduct, removeProduct, updateProducts, updateTotal } =
	cartSlice.actions;

export default cartSlice.reducer;
