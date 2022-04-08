import ListProduct from "../ListProduct";

import Container from "../Container";

import {
    Main,
    TextArea,
    MostSoldButton,
    Catalog
} from "./styles";

export default function Initial() {
    return (
        <Container>
            <Main>
                <TextArea>
                    <h1>Café para começar seu dia</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, maiores?</h2>
                </TextArea>
                <MostSoldButton href="#">Mais vendidos</MostSoldButton>
            </Main>

            <Catalog>
                <ListProduct />
            </Catalog>
        </Container>
    );
}
