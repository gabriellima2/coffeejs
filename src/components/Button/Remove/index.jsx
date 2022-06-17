import { BsFillTrashFill } from "react-icons/bs";

import { Button } from "./styles";

export function Remove({ actionToClick }) {
	return (
		<Button type="button" onClick={actionToClick}>
			<BsFillTrashFill />
		</Button>
	);
}
