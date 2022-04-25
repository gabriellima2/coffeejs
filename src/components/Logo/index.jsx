import { Link } from "react-router-dom";
import { LogoStyle } from "./styles";

export default function Logo() {
	return (
		<Link to="/">
			<LogoStyle>PIZZAJS</LogoStyle>
		</Link>
	);
}
