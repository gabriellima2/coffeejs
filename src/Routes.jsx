import Home from "./pages/Home";
import Coffee from "./pages/Coffee";
import Cart from "./pages/Cart";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/:id" element={<Coffee />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </Router>
    );
}
