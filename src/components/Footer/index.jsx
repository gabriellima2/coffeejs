import Logo from "../Logo"

import { FooterStyle, MainInformation, Nav, List, ListItem, AreaDev, Name } from "./styles";

import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
    return (
        <FooterStyle>
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
        </FooterStyle>
    );
}
