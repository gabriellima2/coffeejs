import { useEffect, useState } from "react";

import Wrapper from "../components/Wrapper";
import Product from "../components/Product";

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
			<Product currentProduct={currentProduct} />
		</Wrapper>
	);
}
