import { useEffect, useState } from "react";

import Wrapper from "../components/Wrapper";
import ShowProduct from "../components/ShowProduct";

import { useParams } from "react-router-dom";

import products from "../data/products";

export default function Coffee() {
    const [ currentProduct, setCurrentProduct ] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setCurrentProduct(products.filter((product) => {
            return product ? product.id === Number(id) : null;
        }));

        return () => setCurrentProduct(null);
    }, []);


    if (!currentProduct) {
        return (
            <Wrapper>
                <h1>Produto não encontrado!</h1>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <ShowProduct currentProduct={currentProduct}/>
        </Wrapper>
    );
}
