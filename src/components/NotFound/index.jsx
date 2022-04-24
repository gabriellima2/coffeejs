import { Main } from "./styles";

import { BsCartX } from "react-icons/bs";

export default function NotFound({ text }) {
	return (
		<Main>
			<h1>{text}</h1>
			<i>
				<BsCartX />
			</i>
		</Main>
	);
}
