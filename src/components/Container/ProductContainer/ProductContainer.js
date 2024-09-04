import Product from "./Product";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";

const ProductContainer=()=> {
    return <div className="flex">
        <Product/>
        <Product2/>
        <Product3/>
        <Product4/>
    </div>
}

export default ProductContainer;