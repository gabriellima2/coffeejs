import { useState } from "react";

export function useFetch() {
	const [isLoading, setIsLoading] = useState(false);
	const [errorRequest, setErrorRequest] = useState({ message: null });

	const makeRequisition = async (url, options = null) => {
		setIsLoading(true);

		try {
			const response = await fetch(url, options);
			const data = await response.json();
			setIsLoading(false);

			if (data.erro) throw new Error();

			return data;
		} catch (err) {
			setErrorRequest({ message: "Por favor, verifique o CEP digitado!" });
		}
	};

	const clearState = () => {
		setIsLoading(false);
		setErrorRequest({ message: null });
	};

	return {
		clearState,
		errorRequest,
		isLoading,
		makeRequisition,
	};
}
