import { useState, useContext, createRef } from "react";

import { addToCartContext } from "../../context/addToCartContext";

import Popup from "../Popup";

import {
    Main,
    Content,
    Property,
    Actions,
    HandleQuantity,
    Decrement,
    Increment,
    Description,
    ContentDescription,
    AddToCart
} from "./styles";

export default function ShowProduct({ currentProduct }) {
    const [quantity, setQuantity] = useState(0);
    const popupRef = createRef(null);

    const { addNewTotal } = useContext(addToCartContext);

    const handleIncrement = () => setQuantity((prevState) => prevState + 1);

    const handleDecrement = () => {
        setQuantity((prevState) => prevState > 0 ? prevState - 1 : prevState);
    }

    const handleAddToCart = () => {
        if (quantity !== 0) {
            addNewTotal(quantity);
            setQuantity(0);
            popupRef.current?.handleVisibility();
        }
    }

    if (currentProduct.length === 0) {
        return (
            <Main>
                <h1>Produto não encontrado!</h1>
            </Main>
        );
    }

    return (
        <>
            {
                currentProduct.map((product) => (
                    <Main key={product.id}>
                        <Content>

                            <img src={product.image.src}/>
                            <Property>
                                <p>{product.name}</p>
                                <p>R${product.price.toFixed(2)}</p>
                            </Property>

                            <Actions>
                                <HandleQuantity>
                                    <Decrement onClick={handleDecrement}>-</Decrement>
                                    <p>{quantity}</p>
                                    <Increment onClick={handleIncrement}>+</Increment>
                                </HandleQuantity>
                                <AddToCart onClick={handleAddToCart}>ADICIONAR AO CARRINHO</AddToCart>
                            </Actions>
                        </Content>

                        <Description>
                            <ContentDescription>
                                <h1>Descrição</h1>
                                <p>{product.description}</p>
                            </ContentDescription>
                        </Description>

                        <Popup ref={popupRef}/>
                    </Main>
                ))
            }
        </>
    );
}
