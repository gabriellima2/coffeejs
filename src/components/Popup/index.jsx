import { useState, useEffect, useImperativeHandle, forwardRef } from "react";

import { Container } from "./styles";

function Popup(props, ref) {
    const [ isVisible, setIsVisible ] = useState(false);

    const handleVisibility = () => setIsVisible((prevState) => !prevState);

    useImperativeHandle(ref, () => {
        return { handleVisibility };
    });

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

export default forwardRef(Popup);
