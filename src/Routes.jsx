import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { MyCart } from "./pages/MyCart";

export default function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/mycart" element={<MyCart />} />
			</Routes>
		</Router>
	);
}
