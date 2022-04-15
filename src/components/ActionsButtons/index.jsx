import { useContext, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { cartSelect } from "../../redux/reducers/cart";

import { addToCart, updateTotal, updateProductsInCart } from "../../redux/actions/cart";

import { PopupContext } from "../../context/PopupContext";

import {
    Container,
    Decrement,
    Increment,
    AddToCart,
    ToggleQuantity
} from "./styles.js";

const actionsType = {
    DECREMENT: "DECREMENT",
    INCREMENT: "INCREMENT"
}

export default function ActionsButtons({ type, product }) {
    const [ quantity, setQuantity ] = useState(product.totalQuantity || 1);
    const { showPopup } = useContext(PopupContext);

    const productsInCart = useSelector(cartSelect.products);
    const dispatch = useDispatch();

    useEffect(() => dispatch(updateTotal()), [productsInCart]);

    const handleAddToCart = (product) => {
        const haveSameProduct = productsInCart.reduce((acc, prod) => {
            return prod.id === product.id;
        }, false);

        if (haveSameProduct) {
            dispatch(updateProductsInCart(product, quantity));
            return;
        }

        dispatch(addToCart(product, quantity));
        showPopup();
    }

    const handleQuantity = (action) => {
        if (action === actionsType.DECREMENT) {
            setQuantity((prevState) => prevState > 1 ? prevState - 1 : prevState);

        } else if (action === actionsType.INCREMENT) {
            setQuantity((prevState) => prevState + 1);
        }
    }

    return (
        <Container>
            <ToggleQuantity>
                <Decrement onClick={() => handleQuantity(actionsType.DECREMENT)}>-</Decrement>
                <p>{quantity}</p>
                <Increment onClick={() => handleQuantity(actionsType.INCREMENT)}>+</Increment>             
            </ToggleQuantity>

            {
                type === "PAGE_PRODUCT" ? 
                <AddToCart onClick={() => handleAddToCart(product)}>ADICIONAR AO CARRINHO</AddToCart>
                :
                null
            }
        </Container>
    );
}
