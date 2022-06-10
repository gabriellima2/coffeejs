import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NotFound from "../../components/NotFound";
import { Review } from "../../components/Review";
import { Stars } from "../../components/Stars";

import { App } from "../../layouts/App";

import { products } from "../../mocks";

import {
	Main,
	Content,
	ProductData,
	AddToCartButton,
	Reviews,
	TitleReviews,
	Rating,
	ReviewList,
} from "./styles";

export function Product() {
	const [currentProduct, setCurrentProduct] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const [productFound] = products.filter(
			(product) => product.id == id && product
		);

		setCurrentProduct(productFound);
	}, []);

	return (
		<App>
			{!currentProduct ? (
				<NotFound text="Produto não encontrado!" />
			) : (
				<>
					<Main>
						<img src={currentProduct.image.src} alt="" />
						<Content>
							<ProductData>
								<h1>{currentProduct.name}</h1>
								<h2>{currentProduct.description}</h2>
								<p>R$ {currentProduct.price.toFixed(2)}</p>
							</ProductData>
							<AddToCartButton type="button">
								Adicionar ao Carrinho
							</AddToCartButton>
						</Content>
					</Main>

					<Reviews>
						<TitleReviews>avaliações</TitleReviews>
						<Rating>
							<p>
								<span style={{ display: "none" }}>
									Avaliação total do produto {currentProduct.name}
								</span>
								{currentProduct.rating.toFixed(1)}
							</p>
							<Stars total={currentProduct.rating} />
						</Rating>

						<section>
							<ReviewList>
								{currentProduct.customerReviews?.map((review) => (
									<li key={review.id}>
										<Review
											name={review.name}
											text={review.text}
											stars={review.stars}
										/>
									</li>
								))}
							</ReviewList>
						</section>
					</Reviews>
				</>
			)}
		</App>
	);
}
