import { useEffect, useContext } from "react";

import { PopupContext } from "../../context/PopupContext";

import { Container } from "./styles";

export default function Popup() {
	const { isVisible, hidePopup } = useContext(PopupContext);

	useEffect(() => {
		if (isVisible) {
			const time = setTimeout(() => hidePopup(), 3000);

			return () => clearTimeout(time);
		}
	}, [isVisible]);

	if (!isVisible) return null;

	return (
		<Container>
			<p>Carrinho atualizado!</p>
		</Container>
	);
}
