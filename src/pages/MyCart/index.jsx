import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsXLg, BsFillArrowLeftCircleFill } from "react-icons/bs";

import Wrapper from "../../components/Wrapper";
import NotFound from "../../components/NotFound";
import ActionsButtons from "../../components/ActionsButtons";

import { cartSelector } from "../../redux/reducers/cart";
import { removeProducts, updateTotal } from "../../redux/actions/cart";

import { renderPages } from "../../constants";

import {
	Container,
	Content,
	Products,
	Product,
	Data,
	Remove,
	Details,
	Card,
	BuyButton,
} from "./styles";

export function MyCart() {
	const products = useSelector(cartSelector.products);
	const { price, quantity } = useSelector(cartSelector.total);

	const dispatch = useDispatch();

	useEffect(() => dispatch(updateTotal()), [products]);

	const handleRemove = (product) => {
		dispatch(removeProducts(product));
	};

	if (products.length === 0) {
		return (
			<Wrapper>
				<NotFound text="Carrinho Vazio!" />
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<Container>
				<h1>Seu Carrinho</h1>
				<Content>
					<Products>
						{products.map((product) => (
							<Product key={product.id}>
								<img src={product.image.src} alt={product.image.alt} />
								<Data>
									<p>{product.name}</p>
									<p>R${product.totalPrice.toFixed(2)}</p>
								</Data>
								<ActionsButtons page={renderPages.ON_CART} product={product} />
								<Remove onClick={() => handleRemove(product)}>
									<BsXLg />
								</Remove>
							</Product>
						))}
					</Products>

					<Card>
						<Link to="/">
							<BsFillArrowLeftCircleFill />
						</Link>
						<h1>Total</h1>
						<Details>
							<p>Quantidade: {quantity}</p>
							<p>Frete: Grátis</p>
							<p>Valor: R${price.toFixed(2)}</p>
						</Details>

						<BuyButton>Finalizar Compra!</BuyButton>
					</Card>
				</Content>
			</Container>
		</Wrapper>
	);
}
