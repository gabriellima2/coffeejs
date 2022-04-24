function handleProductData(product, quantity) {
	const totalPrice = product.price * quantity;

	return {
		...product,
		totalPrice,
		totalQuantity: quantity,
	};
}

export default handleProductData;
