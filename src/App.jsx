import AppRoutes from "./Routes";
import GlobalStyles from "./GlobalStyles";

import { ThemeContextProvider } from "./context/themeContext";
import { AddToCartContextProvider } from "./context/addToCartContext";

function App() {
  return (
    <>
      <AddToCartContextProvider>
        <ThemeContextProvider>
            <GlobalStyles />
              <AppRoutes />  
          </ThemeContextProvider>
      </AddToCartContextProvider>
    </>
  );
}

export default App;
