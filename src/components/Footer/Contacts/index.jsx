import React from "react";

import { contacts } from "../../../mocks";

import { Container, ListItem } from "./styles";

export function Contacts() {
	return (
		<Container>
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
		</Container>
	);
}
