import React from "react";

import { links } from "../../../mocks";

import { Container, List, ListItem } from "./styles";

export function Nav({ color, closeSidebarOnClick }) {
	return (
		<Container>
			<List>
				{links.map((link) => (
					<ListItem color={color} key={link.id}>
						<a href={link.href} onClick={closeSidebarOnClick}>
							<i>{React.createElement(link.icon, null)}</i>
							{link.title}
						</a>
					</ListItem>
				))}
			</List>
		</Container>
	);
}
