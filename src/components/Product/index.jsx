import { useState, useContext } from "react";

import { useDispatch, useSelector } from "react-redux";

import { dataProductSelector } from "../../redux/reducers/dataProducts";
import { addProductToCart } from "../../redux/actions/dataProducts";

import { popup } from "../../context/popup";

import NotFound from "../NotFound";
import Container from "../Container";
import HandleQuantity from "../HandleQuantity";

import {
    Main,
    Property,
    Actions,
    Description,
    ContentDescription,
    AddToCart
} from "./styles";


export default function Product({ currentProduct }) {
    const { cartData } = useSelector(dataProductSelector);
    const dispatch = useDispatch();

    const { showPopup } = useContext(popup);
    
    const handleAddToCart = (product) => {
        dispatch(addProductToCart(product, 1));
        showPopup();
    }

    if (currentProduct.length === 0) {
        return <NotFound text="Produto não encontrado!"/>
    }

    const [ product ] = currentProduct;

    return (
        <Container>
            <Main>
                <img src={product.image.src}/>
                <Property>
                    <p>{product.name}</p>
                    <p>R${product.price.toFixed(2)}</p>
                </Property>

                <Actions>
                    <HandleQuantity />
                    <AddToCart onClick={() => handleAddToCart(product)}>ADICIONAR AO CARRINHO</AddToCart>
                </Actions>
            </Main>

            <Description>
                <ContentDescription>
                    <h1>Descrição</h1>
                    <p>{product.description}</p>
                </ContentDescription>
            </Description>
        </Container>
    );
}
