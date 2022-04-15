import { cartActions } from "../../constants/actions";

const addToCart = (product, quantity) => {
    const totalQuantity = quantity;
    const totalPrice = product.price * totalQuantity;

    return {
        type: cartActions.ADD_TO_CART,
        payload: {
            product: { ...product, totalQuantity, totalPrice },
        }
    };
}

const removeProducts = (product) => {
    return {
        type: cartActions.REMOVE_PRODUCTS,
        payload: {
            product
        }
    };
}

const updateTotal = () => {
    return {
        type: cartActions.UPDATE_TOTAL
    };
}

const updateProductsInCart = (product, quantity) => {
    const totalQuantity = quantity;
    const totalPrice = product.price * quantity;

    return {
        type: cartActions.UPDATE_PRODUCTS_IN_CART,
        payload: {
            product: { ...product, totalQuantity, totalPrice }
        }
    };
}

export { addToCart, removeProducts, updateTotal, updateProductsInCart };
