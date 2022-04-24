import allProducts from "../../../data/allProducts";

const INITIAL_STATE = {
	allProducts,
};

const products = (state = INITIAL_STATE, { type }) => {
	switch (type) {
		default:
			return { ...state };
	}
};

export const productsSelect = {
	products: (state) => state.products.allProducts,
};

export default products;
