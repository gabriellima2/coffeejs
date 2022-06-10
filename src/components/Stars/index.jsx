import { BsStar, BsStarFill } from "react-icons/bs";

// [...Array(Number(5))] => Cria um array com Undef. com o tamanho definido.

export const Stars = ({ total }) => (
	<div id="review-stars">
		{[...Array(Number(5))].map((stars, index) => (
			<i
				key={index}
				aria-labelledby="review-stars"
				style={{ color: "#EABE18" }}
			>
				<span style={{ display: "none" }}>
					Estrela de avaliação {`${index + 1} de 5`}
				</span>
				{index + 1 <= total ? <BsStarFill /> : <BsStar />}
			</i>
		))}
	</div>
);
