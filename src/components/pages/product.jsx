import { useParams } from "react-router-dom";
import all_product from "../../Assets/Assets/all_product";
import BreadCrum from "../breadcrum/breadCrum";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import Description from "../Descriptions/Description";
const Product = () => {
    const {productId} = useParams()
    const product = all_product.find((e)=>  e.id === Number(productId));
    console.log(product);
    return ( <div className=" pl-[5%]">
        <BreadCrum product={product} />
        <ProductDisplay product ={product} />
        <Description />
        </div>
    );
}
 
export default Product;