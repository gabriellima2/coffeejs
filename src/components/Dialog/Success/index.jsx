import * as RadixDialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";

import { Loading } from "../../Loading";

import { Container, Check, ConfirmButton } from "./styles";

function Completed() {
	return (
		<Container>
			<Check>
				<BsCheck2Circle />
			</Check>
			<div>
				<h1>Pedido finalizado</h1>
				<small>Será entregue em até 45 minutos.</small>
			</div>
			<ConfirmButton href="/">Voltar ao início</ConfirmButton>
		</Container>
	);
}

function Processing() {
	return (
		<Container>
			<Loading color="green" />
			<h1>Processando...</h1>
		</Container>
	);
}

export function Success({ isOpen }) {
	const [isProcessing, setIsProcessing] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setIsProcessing(false), 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<RadixDialog.Root open={isOpen}>
			<RadixDialog.Content>
				{isProcessing ? <Processing /> : <Completed />}
			</RadixDialog.Content>
		</RadixDialog.Root>
	);
}
