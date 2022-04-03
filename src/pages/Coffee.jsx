import { useEffect, useState } from "react";

import Wrapper from "../components/Wrapper";
import ShowProduct from "../components/ShowProduct";

import { useParams } from "react-router-dom";

import products from "../data/products";

export default function Coffee() {
    const [ currentProduct, setCurrentProduct ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setCurrentProduct(products.filter((product) => {
            return product.id === Number(id) ? product : null;
        }));
    }, []);

    return (
        <Wrapper>
            <ShowProduct currentProduct={currentProduct}/>
        </Wrapper>
    );
}
