import { useSelector } from "react-redux";
import { dataProductSelector } from "../../redux/reducers/dataProducts";

import NotFound from "../NotFound";
import Container from "../Container";
import HandleQuantity from "../HandleQuantity";

import { Title, Main, Product, DataContainer, Remove } from "./styles";

export default function Cart() {
    const { cartData } = useSelector(dataProductSelector);


    if (cartData.products.length === 0) {
        return <NotFound text="Carrinho Vazio!"/>
    }

    return (
        <Container>
            <Title>Seu Carrinho</Title>
            <Main>
                {
                    cartData.products.map((product) => (
                        <Product key={product.id}>
                            <img src={product.image.src} alt={product.image.alt} />
                            <DataContainer>
                                <div>
                                    <p>{product.name}</p>
                                    <p>R$19.30</p>
                                </div>
                                <div>
                                    <HandleQuantity />
                                    <Remove>Remover</Remove>
                                </div>
                            </DataContainer>
                        </Product>
                    ))
                }
            </Main>
            <section>

            </section>
        </Container>
    );
}
