import { useState, useContext } from "react";

import Rating from "../Rating";

import { addToCartContext } from "../../context/addToCartContext";

import {
    Main,
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

    const { addNewTotal } = useContext(addToCartContext);

    const handleIncrement = () => setQuantity((prevState) => prevState + 1);

    const handleDecrement = () => {
        setQuantity((prevState) => prevState > 0 ? prevState - 1 : prevState);
    }

    const handleAddToCart = () => quantity !== 0 ? addNewTotal(quantity) : null;

    return (
        <>
            {
                currentProduct.map((product) => (
                    <div key={product.id}>
                        <Main>
                            <img src={product.image.src}/>
                            <Property>
                                <p>{product.name}</p>
                                <Rating rating={product.rating}/>
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
                        </Main>
                        <Description>
                            <ContentDescription>
                                <h1>Descrição</h1>
                                <p>{product.description}</p>
                            </ContentDescription>
                        </Description>
                    </div>
                ))
            }
        </>
    );
}
