import "./productList.css"
import Product from "../Product/Product"
import {products} from "../../data"
function Productlist() {
    return (
        <div className ="p1">
            <div className="p1-text">
                <h1 className="p1-title">
                Create & inSpire Its KArma.s.s
           </h1>
                <p className="p1-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                </p>
            </div>
            <div className="p1-list">
                {products.map((product) => 
                    (   
                        <Product key ={product.id} img ={product.img} link={product.link}/>
                    ))}
            </div>
        </div>
    )
}

export default Productlist
    