import { useDispatch } from "react-redux";

import { Button } from "../Button";

import { removeProduct, updateProductData } from "../../redux/slices/cart";

import { Container, ProductData, ProductInfo, Price } from "./styles";

export function Product({ attrProduct }) {
	const dispatch = useDispatch();

	const handleClickRemoveButton = () => {
		dispatch(removeProduct(attrProduct.id));
	};

	const handleQuantityChange = (newQuantity) => {
		dispatch(updateProductData({ id: attrProduct.id, newQuantity }));
	};

	return (
		<Container elementPosition={attrProduct.index}>
			<ProductData>
				<img src={attrProduct.image.src} alt={attrProduct.image.alt} />
				<p>{attrProduct.name}</p>
			</ProductData>

			<ProductInfo>
				<Price>
					<span>Preço</span> R${attrProduct.price.toFixed(2)}
				</Price>
				<Button.ChangeQuantity
					quantity={attrProduct.quantity}
					callbackToHandleQuantity={handleQuantityChange}
				/>
				<Price>
					<span>Total</span> R$
					{attrProduct.total.toFixed(2)}
				</Price>
			</ProductInfo>

			<Button.Remove actionToClick={handleClickRemoveButton} />
		</Container>
	);
}
