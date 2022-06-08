import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NotFound from "../../components/NotFound";
import ActionsButtons from "../../components/ActionsButtons";

import allProducts from "../../data/allProducts";

import { renderPages } from "../../constants";

import { App } from "../../layouts/App";

import { Main, Property, Description, ContentDescription } from "./styles";

export function Product() {
	const [currentProduct, setCurrentProduct] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const [productClicked] = allProducts.filter(
			(product) => product.id === Number(id) && product
		);

		setCurrentProduct(productClicked);
	}, []);

	if (!currentProduct) return <NotFound text="Produto não encontrado!" />;

	return (
		<App>
			<Main>
				<img src={currentProduct.image.src} alt={currentProduct.image.alt} />
				<Property>
					<p>{currentProduct.name}</p>
					<p>R${currentProduct.price.toFixed(2)}</p>
				</Property>
				<ActionsButtons
					page={renderPages.PRODUCT_DETAILS}
					product={currentProduct}
				/>
			</Main>

			<Description>
				<ContentDescription>
					<h1>Descrição</h1>
					<p>{currentProduct.description}</p>
				</ContentDescription>
			</Description>
		</App>
	);
}
