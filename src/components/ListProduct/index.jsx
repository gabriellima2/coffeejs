import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { productsSelect } from "../../redux/reducers/products";

import { List, Image, Product, ProductData, Title }  from "./styles";

export default function ListProduct() {
    const products = useSelector(productsSelect.products);

    return (
        <List>
            {
                products.map((product) => (
                    <Product key={product.id}>
                        <Link to={`/${product.id}`}>
                            <ProductData>
                                <Image src={product.image.src} alt={product.image.alt} />
                                <Title>{product.name}</Title>
                                <h2><span>R$</span>{product.price.toFixed(2)}</h2>
                            </ProductData>
                        </Link>
                    </Product>
                ))
            }
        </List>
    );
}
