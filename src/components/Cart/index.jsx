import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { BsXLg, BsFillArrowLeftCircleFill } from "react-icons/bs";

import NotFound from "../NotFound";
import ActionsButtons from "../ActionsButtons";

import { cartSelect } from "../../redux/reducers/cart";
import { removeProducts, updateTotal } from "../../redux/actions/cart";

import { pages } from "../ActionsButtons/constants";

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
import { Link } from "react-router-dom";

export default function Cart() {
	const products = useSelector(cartSelect.products);
	const { price, quantity } = useSelector(cartSelect.total);

	const dispatch = useDispatch();

	useEffect(() => dispatch(updateTotal()), [products]);

	const handleRemove = (product) => {
		dispatch(removeProducts(product));
	};

	if (products.length === 0) {
		return <NotFound text="Carrinho Vazio!" />;
	}

	return (
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
							<ActionsButtons page={pages.ON_CART} product={product} />
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
	);
}
