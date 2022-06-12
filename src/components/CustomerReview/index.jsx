import { BsFillPersonFill } from "react-icons/bs";

import { Stars } from "../Stars";

import {
	Container,
	Data,
	Description,
	UserPhoto,
	Text,
	Rating,
} from "./styles";

const date = new Intl.DateTimeFormat("pt-BR", {
	day: "numeric",
	month: "short",
	year: "numeric",
});

export function CustomerReview({ name, text, stars }) {
	return (
		<Container>
			<Data>
				<UserPhoto aria-label={`Foto de ${name}`}>
					<i>
						<BsFillPersonFill />
					</i>
				</UserPhoto>
				<Text>
					<h1>{name}</h1>
					<small>{date.format()}</small>
					<Description>{text}</Description>
				</Text>
			</Data>

			<Rating>
				<Stars total={stars} />
			</Rating>
		</Container>
	);
}
