import { Provider } from "react-redux";

import AppRoutes from "./Routes";

import { store } from "./redux/store";

import { GlobalStyles } from "./GlobalStyles";

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
