import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export function Error({ message, icon, link }) {
	return (
		<Container>
			<h1>{message}</h1>
			<i>{React.createElement(icon, null)}</i>
			<Link to={link.href}>{link.text}</Link>
		</Container>
	);
}
