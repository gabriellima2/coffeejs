import { Link } from "react-router-dom";

import allProducts from "../../data/allProducts";

import { List, Product, ProductStyle, Image, Property, Name, Price } from "./styles";

export default function ListProduct() {
    return (
        <List>
            {
                allProducts.map((product) => (
                    <Product key={product.id}>
                        <Link to={`/${product.id}`}>
                            <ProductStyle>
                                <Image src={product.image.src} alt={product.image.alt} />
                                <Property>
                                    <Name>{product.name}</Name>
                                    <Price>R${product.price.toFixed(2)}</Price>
                                </Property>
                            </ProductStyle>
                        </Link>
                    </Product>
                ))
            }
        </List>
    );
}
