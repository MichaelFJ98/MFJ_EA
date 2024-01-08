import React from "react";
import ShoppingElement from "./ShoppingElement.js";
import { getShoppingCart } from "../../services/ShoppingCartService.js";



export default function Shoppingcart(){

    const products = getShoppingCart();

    return(
        <div className="flex flex-col ">
            <h1 className="text-center font-bold text-2xl p-4">All your shopping items</h1>
            <div className="flex flex-col">
                {products.map(product=> (<ShoppingElement product= {product}/>))}
            </div>
            <div className="flex flex-col items-center m-4">
            <button className="font-bold p-4 w-fit bg-blue-400">Order now</button>
            </div>
            

        </div>
    )
}