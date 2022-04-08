import { useState, useContext } from "react";

import { useSelector } from "react-redux";
import { dataProductSelector } from "../../redux/reducers/dataProducts";

import { Link } from "react-router-dom";

import Logo from "../Logo";

import { theme } from "../../context/theme";

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
    ActionButtons,
    Cart,
    ProductsTotal
} from "./styles";


export default function Header() {
    const [ menuIsActive, setMenuIsActive ] = useState(false);
    const { changeTheme, themes } = useContext(theme);

    const { cartData } = useSelector(dataProductSelector);

    const handleMenu = () => setMenuIsActive(!menuIsActive);

    return (
        <Container>
            <Logo />

            <MenuMobileButton
            onClick={handleMenu}
            menuIsActive={menuIsActive}>
                {
                    !menuIsActive ? <BsList /> : <BsX />
                }
            </MenuMobileButton>
            <MenuMobile menuIsActive={menuIsActive}></MenuMobile>

            <Nav menuIsActive={menuIsActive}>
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
                <Cart><Link to="/cart"><ProductsTotal>{cartData.totalQuantity}</ProductsTotal><BsCart2 /></Link></Cart>
            </ActionButtons>
            
        </Container>
    );
}
