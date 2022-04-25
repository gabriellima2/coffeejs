import { useContext, useEffect } from "react";
import { BsList, BsX } from "react-icons/bs";
import { MobileMenuContext } from "../../../context/MobileMenuContext";

import { AreaMenu, Button } from "./styles";

export default function MobileMenu() {
	const { handleActivation, deactivated, activated } =
		useContext(MobileMenuContext);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => deactivated();

	return (
		<>
			<Button onClick={handleActivation} isActive={activated}>
				{activated ? <BsX /> : <BsList />}
			</Button>
			<AreaMenu isActive={activated}></AreaMenu>
		</>
	);
}
