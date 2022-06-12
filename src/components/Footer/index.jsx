import React from "react";

import { Logo } from "../../infra/Logo";

import { Contacts } from "./Contacts";

import { Container, Company, MainContent, SmallContent } from "./styles";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
	return (
		<Container>
			<MainContent>
				<Company>
					<Logo width={90} />
				</Company>

				<section>
					<Contacts />
				</section>
			</MainContent>
			<SmallContent>
				<small>projeto pessoal. gabriel lima - {CURRENT_YEAR}</small>
			</SmallContent>
		</Container>
	);
}
