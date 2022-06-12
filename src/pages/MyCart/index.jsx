import { BsCartXFill } from "react-icons/bs";
import { useSelector } from "react-redux";

import { Error } from "../../components/Error";
import { Product } from "../../components/Product";

import { App } from "../../layouts/App";

import { cartSelect } from "../../redux/slices/cart";

import { Title } from "../../GlobalStyles";
import {
	Container,
	ContentText,
	ProductsList,
	Summary,
	AmountsPayment,
	Total,
	BuyButton,
} from "./styles";

export function MyCart() {
	const { products, totals } = useSelector(cartSelect);

	return (
		<App>
			{products.length === 0 ? (
				<Error
					message={"Carrinho vazio"}
					icon={BsCartXFill}
					link={{ text: "Vamos às compras!", href: "/" }}
				/>
			) : (
				<Container>
					<section>
						<ContentText>
							<Title>seu carrinho</Title>
							<small>produtos</small>
						</ContentText>
						<section>
							<ProductsList>
								{products.map((product) => (
									<li key={product.id}>
										<Product attrProduct={product} />
									</li>
								))}
							</ProductsList>
						</section>
					</section>
					<Summary>
						<h1>informações</h1>
						<section></section>

						<AmountsPayment>
							<p>
								subtotal<span></span>
							</p>
							<p>
								frete<span></span>
							</p>
						</AmountsPayment>
						<Total>
							total <span>R$</span>
						</Total>
						<BuyButton type="button">Comprar</BuyButton>
					</Summary>
				</Container>
			)}
		</App>
	);
}
