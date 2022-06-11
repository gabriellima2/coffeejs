import { BsCartXFill } from "react-icons/bs";
import { useSelector } from "react-redux";

import { Error } from "../../components/Error";

import { App } from "../../layouts/App";

import { cartSelect } from "../../redux/slices/cart";

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
				<div>Ola</div>
			)}
		</App>
	);
}
