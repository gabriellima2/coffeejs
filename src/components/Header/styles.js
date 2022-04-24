import styled from "styled-components";

import media from "../../assets/mediaQueries";
import colors from "../../assets/colors";

export const Container = styled.header`
	width: 100%;
	height: 100px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;

	padding: 10px 40px;

	background-color: ${({ theme }) => theme.bgColors.third};
`;

export const MenuMobileButton = styled.button`
	display: flex;
	border: none;
	padding: 5px;
	color: ${({ menuIsActive }) =>
		!menuIsActive ? ({ theme }) => theme.fontColor : "#f1f1f1"};
	font-size: 2.5em;
	background: none;
	z-index: 4000;
	cursor: pointer;
	order: 1;

	@media screen and (min-width: ${media.default}) {
		display: none;
	}
`;

export const MenuMobile = styled.div`
	width: ${({ menuIsActive }) => (!menuIsActive ? 0 : 100)}vw;
	height: 100%;
	position: absolute;
	right: ${({ menuIsActive }) => (!menuIsActive ? -60 : 0)}%;
	top: 0;
	background-color: rgba(0, 0, 0, 0.9);
	display: ${({ menuIsActive }) => (!menuIsActive ? "none" : "flex")};
	z-index: 3000;

	@media screen and (min-width: ${media.default}) {
		display: none;
	}
`;

export const Nav = styled.nav`
	width: 100%;
	height: 50%;
	display: flex;
	align-items: center;
	position: absolute;
	right: 0;
	top: 160px;
	visibility: ${({ menuIsActive }) => (!menuIsActive ? "hidden" : "visible")};
	z-index: 4000;

	@media screen and (min-width: ${media.default}) {
		position: static;
		visibility: visible;
		flex: 1;
	}

	@media screen and (min-width: ${media.medium}) {
		width: 60%;
		flex: none;
	}
`;

export const LinksList = styled.ul`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	@media screen and (min-width: ${media.default}) {
		flex-direction: row;
	}
`;

export const ItemList = styled.li`
	height: 45px;
	width: 60%;

	a {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.1em;
		color: #f1f1f1;

		&:active,
		&:hover {
			transition: all 0.2s ease-in;
			color: ${colors.blue};
		}

		@media screen and (min-width: ${media.default}) {
			font-size: 1em;
		}
	}
`;

export const ActionButtons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	order: 2;
	padding: 10px 0px;

	@media screen and (min-width: ${media.default}) {
		width: auto;
		justify-content: initial;
		gap: 30px;
		padding: initial;
	}

	button {
		padding: 5px 10px;
		border: none;
		font-size: 1em;
		cursor: pointer;
		background: none;
	}
`;

export const Cart = styled.div`
	position: relative;
	display: flex;
	align-items: center;

	a {
		font-size: 1.1em;
	}
`;

export const ProductsTotal = styled.span`
	position: absolute;
	top: -8px;
	right: -10px;

	padding: 2px 5px;

	font-size: 0.7em;
	color: #000;

	border-radius: 50%;
	background-color: ${colors.blue};
`;
