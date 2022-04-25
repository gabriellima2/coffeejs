import { createContext, useState } from "react";

export const MobileMenuContext = createContext({
	activated: false,
	handleActivation: () => {},
	deactivated: () => {},
});

export function MobileMenuContextProvider(props) {
	const [activated, setActivated] = useState(false);

	const handleActivation = () => setActivated(!activated);

	const deactivated = () => setActivated(false);

	return (
		<MobileMenuContext.Provider
			value={{
				activated,
				handleActivation,
				deactivated,
			}}
		>
			{props.children}
		</MobileMenuContext.Provider>
	);
}
