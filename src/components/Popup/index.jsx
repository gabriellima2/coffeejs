import { useState, useEffect, useContext } from "react";

import { popup } from "../../context/popup";

import { Container } from "./styles";

export default function Popup() {
    const { isVisible, hidePopup } = useContext(popup);

    useEffect(() => {
        if (isVisible) {
            const time = setTimeout(() => hidePopup(), 3000);

            return () => clearTimeout(time);
        }
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <Container>
            <p>Adicionado ao carrinho!</p>
        </Container>
    );
}
