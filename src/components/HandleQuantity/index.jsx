import { useState } from "react";
import { Container, Decrement, Increment } from "./styles.js";

export default function HandleQuantity() {
    const [ productQuantity, setProductQuantity ] = useState(1);

    const handleDecrement = () => {
        setProductQuantity(productQuantity > 1 ? (prevState) => prevState - 1 : 1);
    }

    const handleIncrement = () => setProductQuantity((prevState) => prevState + 1);

    return (
        <Container>
            <Decrement onClick={handleDecrement}>-</Decrement>
            <p>{productQuantity}</p>
            <Increment onClick={handleIncrement}>+</Increment>
        </Container>
    );
}
