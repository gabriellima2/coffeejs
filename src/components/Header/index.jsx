import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import Logo from "../Logo";

import { addToCartContext } from "../../context/addToCartContext";
import { themeContext } from "../../context/themeContext";

import {
    BsList,
    BsX,
    BsCart2,
    BsSearch,
    BsBrightnessHigh,
    BsMoonFill
} from "react-icons/bs";

import {
    Container,
    MenuMobileButton,
    MenuMobile,
    Nav,
    LinksList,
    ItemList,
    ActionButtons
} from "./styles";

export default function Header() {
    const [ active, setActive ] = useState(false);

    const { changeTheme, themes } = useContext(themeContext);
    const { total } = useContext(addToCartContext);

    const handleActive = () => setActive(!active);

    return (
        <Container>
            <Logo />

            <MenuMobileButton
            onClick={handleActive}
            active={active}>
                {
                    !active ? <BsList /> : <BsX />
                }
            </MenuMobileButton>
            <MenuMobile active={active}></MenuMobile>

            <Nav active={active}>
                <LinksList>
                    <ItemList><Link to="/">Início</Link></ItemList>
                    <ItemList><a href="#catalog">Catálogo</a></ItemList>
                    <ItemList><a href="#contact">Contato</a></ItemList>
                </LinksList>
            </Nav>

            <ActionButtons>
                <button><BsSearch /></button>
                <button onClick={changeTheme}>
                    {
                        themes.type === "light" ? <BsBrightnessHigh /> : <BsMoonFill />
                    }
                </button>
                <button><span>{total}</span><BsCart2 /></button>
            </ActionButtons>
            
        </Container>
    );
}
