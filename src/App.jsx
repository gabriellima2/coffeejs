import AppRoutes from "./Routes";
import GlobalStyles from "./GlobalStyles";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <AppRoutes />  
      </Provider>
    </>
  );
}

export default App;
