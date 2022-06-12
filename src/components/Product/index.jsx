import { useDispatch } from "react-redux";

import { ChangeQuantityButton, RemoveButton } from "../Buttons";

import { removeProduct, updateProductData } from "../../redux/slices/cart";

import { Container, ProductData, ProductInfo, Price } from "./styles";

export function Product({ attrProduct }) {
	const dispatch = useDispatch();

	const handleClickRemoveButton = () => {
		dispatch(removeProduct(attrProduct.id));
	};

	const handleChangeQuantity = (newQuantity) => {
		dispatch(updateProductData({ id: attrProduct.id, newQuantity }));
	};

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
				<ChangeQuantityButton
					quantity={attrProduct.quantity}
					runAfterQuantityChange={handleChangeQuantity}
				/>
				<Price>
					<span>Total</span> R$
					{attrProduct.total.toFixed(2)}
				</Price>
			</ProductInfo>
			<RemoveButton actionToClick={handleClickRemoveButton} />
		</Container>
	);
}
