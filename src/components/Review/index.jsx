import { BsStar, BsStarFill } from "react-icons/bs";
import { Stars } from "../Stars";

import { Container, Content, Data, Description } from "./styles";

const date = new Intl.DateTimeFormat("pt-BR", {
	day: "numeric",
	month: "short",
	year: "numeric",
});

export function Review({ name, text, stars }) {
	return (
		<Container>
			<Content>
				<Data>
					<h1>{name}</h1>
					<small>{date.format()}</small>
				</Data>

				<Stars total={stars} />
			</Content>

			<Description>{text}</Description>
		</Container>
	);
}
