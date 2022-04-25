import { useEffect } from "react";

import Header from "../Header";
import Footer from "../Footer";

import WrapperStyle from "./styles";

export default function Wrapper({ children }) {
	useEffect(() => window.scrollTo(0, 0));

	return (
		<WrapperStyle>
			<Header />
			{children}
			<Footer />
		</WrapperStyle>
	);
}
