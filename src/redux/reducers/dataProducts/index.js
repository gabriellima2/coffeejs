import allProducts from "../../../data/allProducts";

import productsActions from "../../constants/actions";

const INITIAL_STATE = {
    allProducts,
    cartData: {
        products: [],
        totalPrice: 0,
        totalQuantity: 0
    },
}

const dataProduct = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case productsActions.ADD_TO_CART: 
            const { product } = action.payload;

            return {
                ...state,
                cartData: {
                    products: [ ...state.cartData.products, product ],
                    totalPrice: state.cartData.totalPrice + product.price,
                    totalQuantity: state.cartData.totalQuantity + product.quantity
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
