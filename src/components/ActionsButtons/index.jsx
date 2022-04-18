import { useContext, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { cartSelect } from "../../redux/reducers/cart";
import { 
    addToCart,
    updateTotal,
    updateProductsInCart
} from "../../redux/actions/cart";

import { types, actions } from "./constants";

import { PopupContext } from "../../context/PopupContext";

import {
    Container,
    Decrement,
    Increment,
    AddToCart,
    ToggleQuantity
} from "./styles.js";

export default function ActionsButtons({ type, product }) {
    const [ quantity, setQuantity ] = useState(product.totalQuantity || 1);
    const { showPopup } = useContext(PopupContext);

    const productsInCart = useSelector(cartSelect.products);
    const dispatch = useDispatch();

    useEffect(() => dispatch(updateTotal()), [productsInCart]);

    useEffect(() => {
        if (type === types.ON_CART) dispatch(updateProductsInCart(product, quantity));
    }, [ quantity ]);

    const handleAddToCart = (product) => {
        const haveSameProduct = productsInCart.reduce((acc, prod) => {
            console.log(prod.id, product.id);
            if (prod.ic === product.id) {
                return acc = true;
            }
        }, false);

        console.log(product)
        console.log(haveSameProduct)

        if (haveSameProduct) {
            dispatch(updateProductsInCart(product, quantity));
            return;
        }

        dispatch(addToCart(product, quantity));
        showPopup();
    }

    const handleQuantity = (action) => {
        if (action === actions.DECREMENT) {
            setQuantity((prevState) => prevState > 1 ? prevState - 1 : prevState);
        } else if (action === actions.INCREMENT) {
            setQuantity((prevState) => prevState + 1);
        }
    }

    return (
        <Container>
            <ToggleQuantity>
                <Decrement onClick={() => handleQuantity(actions.DECREMENT)}>-</Decrement>
                <p>{quantity}</p>
                <Increment onClick={() => handleQuantity(actions.INCREMENT)}>+</Increment>             
            </ToggleQuantity>

            {
                type === types.PAGE_PRODUCT ? 
                <AddToCart onClick={() => handleAddToCart(product)}>ADICIONAR AO CARRINHO</AddToCart>
                :
                null
            }
        </Container>
    );
}
