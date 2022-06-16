import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	totals: {
		price: 0,
		quantity: 0,
	},
	messageToUser: {
		type: null,
		value: null,
	},
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, { type, payload }) => {
			const handleAddProduct = () => {
				const total = payload.price * payload.quantity;

				payload = { ...payload, total };

				state.messageToUser = {
					type: "success",
					value: "Produto adicionado ao carrinho!",
				};
				state.products = [...state.products, payload];
			};

			if (state.products.length === 0) return handleAddProduct();

			if (state.products.length >= 1) {
				const productAlreadyAdded = state.products.some(
					(product) => product.id === payload.id
				);

				if (productAlreadyAdded) {
					state.messageToUser = {
						type: "error",
						value: "Produto já adicionado!",
					};
					return;
				}

				handleAddProduct();
			}
		},

		removeProduct: (state, { type, payload }) => {
			state.products = state.products.filter(
				(product) => product.id !== payload
			);
		},

		updateProductData: (state, { type, payload }) => {
			state.products.map((product) => {
				if (product.id === payload.id) {
					product.quantity = payload.newQuantity;
					product.total = product.price * payload.newQuantity;
				}
			});
		},

		updateTotals: (state, action) => {
			let priceTotal = 0;
			let quantityTotal = 0;

			state.products.map((product) => {
				priceTotal += product.total;
				quantityTotal += product.quantity;
			});

			state.totals.price = priceTotal;
			state.totals.quantity = quantityTotal;
		},
	},
});

export const cartSelect = (state) => state.cart;

export const { addProduct, removeProduct, updateProductData, updateTotals } =
	cartSlice.actions;

export default cartSlice.reducer;
