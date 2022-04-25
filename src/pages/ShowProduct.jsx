import { useEffect, useState } from "react";

import Wrapper from "../components/Wrapper";
import ProductDetails from "../components/ProductDetails";

import { useParams } from "react-router-dom";

import allProducts from "../data/allProducts";

export default function ShowProduct() {
	const [currentProduct, setCurrentProduct] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		setCurrentProduct(
			allProducts.filter((product) => {
				return product.id === Number(id) ? product : null;
			})
		);
	}, []);

	return (
		<Wrapper>
			<ProductDetails currentProduct={currentProduct} />
		</Wrapper>
	);
}
