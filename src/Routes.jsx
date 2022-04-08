import Home from "./pages/Home";
import ShowProduct from "./pages/ShowProduct";
import ShowCart from "./pages/ShowCart";

import { ThemeContext } from "./context/theme";
import { PopupContext } from "./context/popup";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

export default function AppRoutes() {
    return (
        <ThemeContext>
            <PopupContext>
                <Router>
                    <Routes>
                        <Route path="/" exact element={<Home />}/>
                        <Route path="/:id" element={<ShowProduct />}/>
                        <Route path="/cart" element={<ShowCart />}/>
                    </Routes>
                </Router>
            </PopupContext>
        </ThemeContext>

    );
}
