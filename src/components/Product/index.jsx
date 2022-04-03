import { Link } from "react-router-dom";

import { Container, ProductStyle, Image, Property, Name, Price } from "./styles";

export default function Product({ attributes }) {
    return (
        <Container>
            <Link to={`/${attributes.id}`}>
                <ProductStyle>
                    <Image src={attributes.image.src} alt={attributes.image.alt} />
                    <Property>
                        <Name>{attributes.name}</Name>
                        <Price>R${attributes.price.toFixed(2)}</Price>
                    </Property>
                </ProductStyle>
            </Link>
        </Container>
    );
}
