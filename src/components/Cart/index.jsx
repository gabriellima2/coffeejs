import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { BsXLg } from "react-icons/bs";

import NotFound from "../NotFound";
import Container from "../Container";
import ActionsButtons from "../ActionsButtons";

import { cartSelect } from "../../redux/reducers/cart";
import { removeProducts, updateTotal } from "../../redux/actions/cart";

import types from "../../assets/constants/types";

import { Title, Main, Product, Data, Remove } from "./styles";

export default function Cart() {
    const products = useSelector(cartSelect.products);
    const { price, quantity } = useSelector(cartSelect.total);
    
    const dispatch = useDispatch();

    useEffect(() => dispatch(updateTotal()), [products]);

    const handleRemove = (product) => {
        dispatch(removeProducts(product));
    }

    if (products.length === 0) {
        return <NotFound text="Carrinho Vazio!"/>
    }

    return (
        <Container>
            <Title>Seu Carrinho</Title>
            <Main>
                {
                    products.map((product) => (
                        <Product key={product.id}>
                            <img src={product.image.src} alt={product.image.alt} />
                            <Data>
                                <p>{product.name}</p>
                                <p>R${product.totalPrice.toFixed(2)}</p>
                            </Data>
                            <ActionsButtons type={types.ON_CART} product={product}/>
                            <Remove onClick={() => handleRemove(product)}><BsXLg /></Remove>
                        </Product>
                    ))
                }
            </Main>
            <section>
                <p>Quantidade Total: {quantity}</p>
                <p>Valor Total: R${price.toFixed(2)}</p>
            </section>
        </Container>
    );
}
