import { useSelector } from "react-redux";
import { dataProductSelector } from "../redux/reducers/dataProducts";

import Wrapper from "../components/Wrapper";

export default function Cart() {
    const { productsToCart } = useSelector(dataProductSelector);

    return (
        <Wrapper>
            <main>
                {
                    productsToCart.products.map((product) => (
                        <div key={product.id}>
                            <img src={product.image.src} alt="" />
                            <p>{product.name}</p>
                        </div>
                    ))
                }
            </main>
        </Wrapper>
    );
}
