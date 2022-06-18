import { Circle } from "./styles";

import { colors } from "../../assets/styles";

export function Loading({ color }) {
	return <Circle color={color}></Circle>;
}

Loading.defaultProps = {
	color: colors.accent.orange,
};
