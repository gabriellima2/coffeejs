import actionsType from "../../constants/actions";

const addProductToCart = (product, quantity) => {
    const updateProduct = {
        ...product,
        quantity
    }

    return {
        type: actionsType.ADD_TO_CART,
        product: updateProduct
    };
}

const changeQuantityProduct = (quantity) => {
    return {
        type: actionsType.CHANGE_QUANTITY_PRODUCT,
        quantity
    };
}

export { addProductToCart, changeQuantityProduct };
