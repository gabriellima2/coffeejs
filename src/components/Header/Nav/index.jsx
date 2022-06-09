import React from "react";

import { links } from "../../../mocks";

import { Container, List, ListItem } from "./styles";

export function Nav({ color }) {
	return (
		<Container>
			<List>
				{links.map((link) => (
					<ListItem color={color} key={link.id}>
						<a href={link.href}>
							<i>{React.createElement(link.icon, null)}</i>
							{link.title}
						</a>
					</ListItem>
				))}
			</List>
		</Container>
	);
}
