import * as Dialog from "@radix-ui/react-dialog";
import { BsList, BsX } from "react-icons/bs";

import { Nav } from "../Nav";

export function SidebarMobile() {
	return (
		<Dialog.Root>
			<Dialog.Trigger style={{ background: "none", border: "none" }}>
				<BsList style={{ fontSize: "30px", cursor: "pointer" }} />
			</Dialog.Trigger>
			<Dialog.Content
				style={{
					width: "350px",
					height: "100vh",

					padding: "30px 10px",
					backgroundColor: "#0f0f0f",
					position: "absolute",
					top: 0,
					right: 0,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "space-between",
					zIndex: "20000",
				}}
			>
				<Dialog.Close style={{ background: "none", border: "none" }}>
					<BsX
						style={{
							fontSize: "40px",
							cursor: "pointer",
							transform: "translateX(115px)",
						}}
					/>
				</Dialog.Close>
				<Nav />
			</Dialog.Content>
		</Dialog.Root>
	);
}
