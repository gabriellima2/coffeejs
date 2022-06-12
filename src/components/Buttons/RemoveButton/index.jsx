import { BsFillTrashFill } from "react-icons/bs";

import { Button } from "./styles";

export function RemoveButton({ actionToClick }) {
	return (
		<Button type="button" onClick={actionToClick}>
			<BsFillTrashFill />
		</Button>
	);
}
