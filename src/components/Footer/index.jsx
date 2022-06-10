import React from "react";

import { Logo } from "../../infra/Logo";

import { contacts } from "../../mocks";

import {
	Container,
	Company,
	List,
	ListItem,
	MainContent,
	SmallContent,
} from "./styles";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
	return (
		<Container>
			<MainContent>
				<Company>
					<Logo width={90} />
				</Company>

				<section>
					<List>
						{contacts.map((contact) => (
							<ListItem key={contact.id}>
								<a
									href={contact.href}
									title={`Link para ${contact.title.toUpperCase()}`}
								>
									{React.createElement(contact.icon, null)}
								</a>
							</ListItem>
						))}
					</List>
				</section>
			</MainContent>
			<SmallContent>
				<small>projeto pessoal. gabriel lima - {CURRENT_YEAR}</small>
			</SmallContent>
		</Container>
	);
}
