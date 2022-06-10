import { Link } from "react-router-dom";

import { products } from "../../mocks";

import { Default } from "../../layouts/Default";

import arrow from "../../assets/img/arrow.svg";

import {
	Main,
	TextArea,
	Catalog,
	CatalogTitle,
	List,
	ListItem,
} from "./styles";

export function Home() {
	return (
		<Default>
			<Main>
				<TextArea>
					<h1>Não precisa de motivos para pedir pizza</h1>

					<a href="#">Veja nossas promoções</a>
				</TextArea>

				<img src={arrow} alt="" />
			</Main>

			<Catalog>
				<CatalogTitle>nossos produtos</CatalogTitle>
				<section>
					<List>
						{products.map((product) => (
							<Link to={`product/${product.id}`} key={product.id}>
								<ListItem>
									<img
										width={100}
										src={product.image.src}
										alt={product.image.alt}
									/>
									<h1>{product.name}</h1>
									<h2>R${product.price.toFixed(2)}</h2>
								</ListItem>
							</Link>
						))}
					</List>
				</section>
			</Catalog>
		</Default>
	);
}
