import Product from "../Product";

import allProducts from "../../data/allProducts";

import {
    Main,
    TextArea,
    MostSoldButton,
    Catalog,
    CatalogContent
} from "./styles";

export default function Initial() {
    return (
        <>
            <Main>
                <TextArea>
                    <h1>Café para começar seu dia</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, maiores?</h2>
                </TextArea>
                <MostSoldButton href="#">Mais vendidos</MostSoldButton>
            </Main>

            <Catalog id="catalog">
                <CatalogContent>
                    {
                        allProducts.map((product) => (
                            <Product attributes={{
                                image: {
                                    src: product.image.src,
                                    alt: product.image.alt
                                },
                                name: product.name,
                                price: product.price,
                                id: product.id
                            }} key={product.id} />
                        ))
                    }
                </CatalogContent>
            </Catalog>
        </>
    );
}
