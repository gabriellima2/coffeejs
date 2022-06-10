import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cart";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});
