import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { dataProductSelector } from "../../redux/reducers/dataProducts";
import { addProductToCart, changeQuantityProduct } from "../../redux/actions/dataProducts";

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
    const [ productQuantity, setProductQuantity ] = useState(0);

    const { productsToCart } = useSelector(dataProductSelector);
    const dispatch = useDispatch();
    
    const handleDecrement = () => {
        setProductQuantity(productQuantity !== 0 ? (prevState) => prevState - 1 : 0);
    }

    const handleIncrement = () => setProductQuantity((prevState) => prevState + 1);

    const handleAddToCart = (product) => {
        if (productQuantity !== 0) {
            dispatch(addProductToCart(product, productQuantity));
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
                                    <p>{productQuantity}</p>
                                    <Increment onClick={handleIncrement}>+</Increment>
                                </HandleQuantity>
                                <AddToCart onClick={() => handleAddToCart(product)}>ADICIONAR AO CARRINHO</AddToCart>
                            </Actions>
                        </Content>

                        <Description>
                            <ContentDescription>
                                <h1>Descrição</h1>
                                <p>{product.description}</p>
                            </ContentDescription>
                        </Description>

                        <Popup />
                    </Main>
                ))
            }
        </>
    );
}
