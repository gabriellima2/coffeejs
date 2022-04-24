import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ShowProduct from "./pages/ShowProduct";
import ShowCart from "./pages/ShowCart";

import { ThemeProvider } from "styled-components";

import { PopupContextProvider } from "./context/PopupContext";

import theme from "./assets/theme";

export default function AppRoutes() {
	return (
		<ThemeProvider theme={theme}>
			<PopupContextProvider>
				<Router>
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/:id" element={<ShowProduct />} />
						<Route path="/cart" element={<ShowCart />} />
					</Routes>
				</Router>
			</PopupContextProvider>
		</ThemeProvider>
	);
}
