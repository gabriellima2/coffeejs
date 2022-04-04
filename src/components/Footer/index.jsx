import Logo from "../Logo"

import { Container, MainInformation, Nav, List, ListItem, AreaDev, Name } from "./styles";

import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
    return (
        <Container>
            <MainInformation>
                <Logo />
                <Nav id="contact">
                    <List>
                        <ListItem><a href=""><BsGithub /></a></ListItem>
                        <ListItem><a href=""><BsLinkedin /></a></ListItem>
                    </List>
                </Nav>
            </MainInformation>
            <AreaDev>
                <Name>Gabriel</Name>
            </AreaDev>
        </Container>
    );
}
