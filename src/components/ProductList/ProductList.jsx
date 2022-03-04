import "./productList.css"
import Product from "../Product/Product"
import {products} from "../../data"
function Productlist() {
    return (
        <div className ="p1">
            <div className="p1-text">
                <h1 className="p1-title">
                Create & inSpire
           </h1>
                <p className="p1-desc">
                There are some projects i created during the time i started to learn to become a developer. Maybe Its have some a mistake but hopefully you enjoy it!! With reference document from another source on the internet. 
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
    