import { useState, useRef } from "react";

import Product from "../Product";

import products from "../../data/products";

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
                        products.map((product) => (
                            <Product attributes={{
                                image: {
                                    src: product.image.src,
                                    alt: product.image.alt
                                },
                                name: product.name,
                                rating: product.rating,
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
