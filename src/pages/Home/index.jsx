import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Wrapper from "../../components/Wrapper";

import { productsSelect } from "../../redux/reducers/products";

import { Button } from "../../GlobalStyles";
import {
	Main,
	TextArea,
	Catalog,
	CatalogTitle,
	List,
	Product,
	ProductData,
	ProductImage,
	ProductTitle,
} from "./styles";

export default function Home() {
	const products = useSelector(productsSelect.products);

	return (
		<Wrapper>
			<Main>
				<TextArea>
					<h1>Não precisa de motivos para pedir pizza</h1>
					<h2>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
						maiores?
					</h2>
				</TextArea>
				<Button>Promoções</Button>
			</Main>

			<Catalog>
				<CatalogTitle>Nossos Produtos</CatalogTitle>
				<List id="catalog">
					{products.map((product) => (
						<Product key={product.id}>
							<Link to={`/product/${product.id}`}>
								<ProductData>
									<ProductImage
										src={product.image.src}
										alt={product.image.alt}
									/>
									<ProductTitle>{product.name}</ProductTitle>
									<h2>
										<span>R$</span>
										{product.price.toFixed(2)}
									</h2>
								</ProductData>
							</Link>
						</Product>
					))}
				</List>
			</Catalog>
		</Wrapper>
	);
}
