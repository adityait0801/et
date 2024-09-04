import ProductBar from "./ProductBar/ProductBar";
import SideBar from "./SideBar/SideBar";

const SecondaryContainer=()=> {
    return <div className="flex bg-gray-800">
       <SideBar/>
       <ProductBar/>
    </div>
}

export default SecondaryContainer;