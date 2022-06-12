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
	Content,
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
					<Content>
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
					</Content>
					<Summary>
						<h1>informações</h1>
						<section></section>

						<AmountsPayment>
							<p>
								subtotal<span>R$49,90</span>
							</p>
							<p>
								frete<span>R$5,00</span>
							</p>
						</AmountsPayment>
						<Total>
							total <span>R$54,90</span>
						</Total>
						<BuyButton type="button">Comprar</BuyButton>
					</Summary>
				</Container>
			)}
		</App>
	);
}
