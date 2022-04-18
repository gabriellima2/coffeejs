import { useState } from "react";

import { useSelector } from "react-redux";
import { cartSelect } from "../../redux/reducers/cart";

import { Link } from "react-router-dom";

import Logo from "../Logo";

import {
    BsList,
    BsX,
    BsCart2,
    BsSearch
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

    const { quantity } = useSelector(cartSelect.total);

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
                <Cart><Link to="/cart"><ProductsTotal>{quantity}</ProductsTotal><BsCart2 /></Link></Cart>
            </ActionButtons>
            
        </Container>
    );
}
