import { useParams } from "react-router-dom";
import all_product from "../../Assets/Assets/all_product";
import BreadCrum from "../breadcrum/breadCrum";
const Product = () => {
    const {productId} = useParams()
    const product = all_product.find((e)=>  e.id === Number(productId));
    console.log(product);
    return ( 
        <BreadCrum product={product} />
    );
}
 
export default Product;