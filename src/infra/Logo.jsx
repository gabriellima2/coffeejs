import logoPizzaJS from "../assets/img/logo-pizzajs.svg";

export const Logo = (props) => (
	<img
		width={props.width || 130}
		src={logoPizzaJS}
		alt="Logo da Pizza JS icon de pizza"
	/>
);
