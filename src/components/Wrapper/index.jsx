import Header from "../Header";
import Footer from "../Footer";

import WrapperStyle from "./styles";

export default function Wrapper({ children }) {
	return (
		<WrapperStyle>
			<Header />
			{children}
			<Footer />
		</WrapperStyle>
	);
}
