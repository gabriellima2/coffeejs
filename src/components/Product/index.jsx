import { ChangeQuantityButton, RemoveButton } from "../Buttons";

import { Container, ProductData, ProductInfo, Price } from "./styles";

export function Product({ attrProduct }) {
	return (
		<Container bgColor={attrProduct.id % 2 === 0}>
			<ProductData>
				<img src={attrProduct.image.src} alt={attrProduct.image.alt} />
				<p>{attrProduct.name}</p>
			</ProductData>
			<ProductInfo>
				<Price>
					<span>Preço</span> R${attrProduct.price.toFixed(2)}
				</Price>
				<p>
					<ChangeQuantityButton quantity={attrProduct.quantity} />
				</p>
				<Price>
					<span>Total</span> R$
					{(attrProduct.price * attrProduct.quantity).toFixed(2)}
				</Price>
			</ProductInfo>
			<RemoveButton />
		</Container>
	);
}
