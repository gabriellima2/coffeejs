import React, { useEffect } from "react";

export function ScrollToTop(Component) {
	return (props) => {
		useEffect(() => window.scrollTo(0, 0), []);

		return <Component {...props} />;
	};
}
