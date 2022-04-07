import AppRoutes from "./Routes";
import GlobalStyles from "./GlobalStyles";

import { ThemeContextProvider } from "./context/themeContext";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeContextProvider>
            <GlobalStyles />
              <AppRoutes />  
          </ThemeContextProvider>
      </Provider>
    </>
  );
}

export default App;
