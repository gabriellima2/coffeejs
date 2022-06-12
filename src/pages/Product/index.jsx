import { useEffect, useState } from "react";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Error } from "../../components/Error";
import { CustomerReview } from "../../components/CustomerReview";
import { Stars } from "../../components/Stars";

import { App } from "../../layouts/App";

import { products } from "../../mocks";

import { addProduct } from "../../redux/slices/cart";

import { Describe, MainButton } from "../../GlobalStyles";
import {
	Container,
	Main,
	Content,
	ProductData,
	Price,
	Reviews,
	TitleReviews,
	Rating,
	ReviewList,
} from "./styles";

export function Product() {
	const [currentProduct, setCurrentProduct] = useState(null);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		const [productFound] = products.filter(
			(product) => product.id == id && product
		);

		setCurrentProduct(productFound);
	}, []);

	const handleClickAddButton = () =>
		dispatch(addProduct({ ...currentProduct, quantity: 1 }));

	return (
		<App>
			{!currentProduct ? (
				<Error
					message="Produto não encontrado!"
					icon={BsFillEmojiFrownFill}
					link={{
						text: "Mas não fique triste! Veja os produtos disponíveis",
						href: "/",
					}}
				/>
			) : (
				<Container>
					<Main>
						<img src={currentProduct.image.src} alt="" />
						<Content>
							<ProductData>
								<h1>{currentProduct.name}</h1>
								<h2>{currentProduct.description}</h2>
								<Price>
									<p>
										<Describe>Preço do produto</Describe> R${" "}
										{currentProduct.price.toFixed(2)}
									</p>
									<small>
										Ou até{" "}
										<span>
											2X de R$
											{(currentProduct.price / 2).toFixed(2)}
										</span>{" "}
										sem juros
									</small>
								</Price>
							</ProductData>
							<MainButton type="button" onClick={handleClickAddButton}>
								Adicionar ao Carrinho
							</MainButton>
						</Content>
					</Main>

					<Reviews>
						<TitleReviews>avaliações</TitleReviews>
						<Rating>
							<p>
								<Describe>
									Avaliação total do produto {currentProduct.name}
								</Describe>
								{currentProduct.rating.toFixed(1)}
							</p>
							<Stars total={currentProduct.rating} />
						</Rating>

						<section>
							<ReviewList>
								{currentProduct.customerReviews?.map((review) => (
									<li key={review.id} tabIndex={0}>
										<CustomerReview
											name={review.name}
											text={review.text}
											stars={review.stars}
										/>
									</li>
								))}
							</ReviewList>
						</section>
					</Reviews>
				</Container>
			)}
		</App>
	);
}
