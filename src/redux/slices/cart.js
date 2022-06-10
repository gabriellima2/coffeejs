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
		addProducts: (state, action) => {
			state.products = [...state.products, action.payload];
		},

		removeProducts: () => {},

		updateProducts: () => {},

		updateTotal: () => {},
	},
});

export const { addProducts, removeProducts, updateProducts, updateTotal } =
	cartSlice.actions;

export default cartSlice.reducer;
