import ListProduct from "../ListProduct";
import Container from "../Container";

import { Button } from "../../GlobalStyles";

import { Main, TextArea, Catalog } from "./styles";

export default function Initial() {
	return (
		<Container>
			<Main>
				<TextArea>
					<h1>Não precisa de motivos para pedir pizza</h1>
					<h2>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
						maiores?
					</h2>
				</TextArea>
				<Button>Promoções</Button>
			</Main>

			<Catalog>
				<ListProduct />
			</Catalog>
		</Container>
	);
}
