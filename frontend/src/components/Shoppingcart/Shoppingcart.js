import React from "react";
import ShoppingElement from "./ShoppingElement.js";
import { getShoppingCart , isEmptyCart} from "../../services/ShoppingCartService.js";
import { Link } from "react-router-dom";


//display all products in the shoppingcart
export default function Shoppingcart(){
    //get the shoppinglist
    const products = getShoppingCart();
    //check if the shoppingcart is empty, if it is you won't be able to order products.
    const orderNow = isEmptyCart() ? <div></div> : <Link className="font-bold p-4 w-fit bg-blue-400" to={`../order`}>Order now</Link>

    return(
        <div className="flex flex-col ">
            <h1 className="text-center font-bold text-2xl p-4">All your shopping items</h1>
            <div className="flex flex-col">
                {products.map(product=> (<ShoppingElement product= {product}/>))}
            </div>
            <div className="flex flex-col items-center m-4">
                {orderNow}
            </div>
            

        </div>
    )
}