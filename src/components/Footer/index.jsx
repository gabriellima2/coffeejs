import React from "react";

import { Logo } from "../../infra/Logo";

import { Contacts } from "./Contacts";

import { Container, Company } from "./styles";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
	return (
		<Container>
			<Company>
				<Logo width={70} />
				<small>projeto pessoal. gabriel lima - {CURRENT_YEAR}</small>
			</Company>

			<Contacts />
		</Container>
	);
}
