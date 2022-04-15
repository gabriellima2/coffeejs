import Home from "./pages/Home";
import ShowProduct from "./pages/ShowProduct";
import ShowCart from "./pages/ShowCart";

import { ThemeContextProvider } from "./context/ThemeContext";
import { PopupContextProvider } from "./context/PopupContext";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

export default function AppRoutes() {
    return (
        <ThemeContextProvider>
            <PopupContextProvider>
                <Router>
                    <Routes>
                        <Route path="/" exact element={<Home />}/>
                        <Route path="/:id" element={<ShowProduct />}/>
                        <Route path="/cart" element={<ShowCart />}/>
                    </Routes>
                </Router>
            </PopupContextProvider>
        </ThemeContextProvider>

    );
}
