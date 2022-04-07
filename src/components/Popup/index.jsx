import { useState, useEffect } from "react";

import { Container } from "./styles";

export default function Popup() {
    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {
        if (isVisible) {
            const time = setTimeout(() => setIsVisible(false), 3000);

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
