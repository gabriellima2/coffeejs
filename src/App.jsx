import AppRoutes from "./Routes";
import GlobalStyles from "./GlobalStyles";

import { Provider } from "react-redux";
import store from "./redux/store";

import theme from "./assets/theme";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles theme={theme}/>
        <AppRoutes />  
      </Provider>
    </>
  );
}

export default App;
