import { useState } from "react";

export function useFetch() {
	const [isLoading, setIsLoading] = useState(false);
	const [errorRequest, setErrorRequest] = useState(false);

	const makeRequisition = async (url, options = null) => {
		setIsLoading(true);

		try {
			const response = await fetch(url, options);
			const data = await response.json();
			setIsLoading(false);

			if (data.erro) throw new Error();

			return data;
		} catch (err) {
			setErrorRequest(true);
		}

		setIsLoading(false);
	};

	const clearState = () => {
		setIsLoading(false);
		setErrorRequest(false);
	};

	return {
		clearState,
		errorRequest,
		isLoading,
		makeRequisition,
	};
}
