import allProducts from "../../../data/allProducts";

import productsActions from "../../constants/actions";

const INITIAL_STATE = {
    allProducts,
    productsToCart: {
        products: [],
        totalPrice: 0,
        totalQuantity: 0
    },
}

const dataProduct = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case productsActions.ADD_TO_CART: 
            const { price, quantity } = action.product;

            return {
                ...state,
                productsToCart: {
                    products: [...state.productsToCart.products, action.product],
                    totalPrice: state.productsToCart.totalPrice + price,
                    totalQuantity: state.productsToCart.totalQuantity + quantity
                }
            };
        case productsActions.CHANGE_QUANTITY_PRODUCT:
            return {
                ...state
            };
        default:
            return state;
    }
}

export const dataProductSelector = (state) => state.dataProduct;

export default dataProduct;
