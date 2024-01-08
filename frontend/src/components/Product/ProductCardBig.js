import React from "react";
import default_img from "../../images/default.png"
import { PlusIcon } from '@heroicons/react/24/outline'
import { addItemToShoppingCart } from "../../services/ShoppingCartService";
import { isAuthenticated } from "../../services/AuthService";
//bigger version of Productcard
export default function ProductCardBig({product}){
    //if the user is logged in add a "addtocart button" on the productcard
    const addToCart = isAuthenticated() ?(
        <button onClick={() => { addItemToShoppingCart(product)}}>
            <PlusIcon className="bg-green-400 rounded-full w-8 h-8 "></PlusIcon>
        </button>
    ) : <div></div>

    return(
        <div className="flex m-2 p-2 w-7/12 rounded-lg border-2 border-black flex-row ">
            <img src={default_img} className="w-48"></img>
            <div className="flex flex-col px-2 w-full bg-slate-200 ">
                <h1 className="text-black text-xl bg-blue-200 w-min text-center py-2 font-bold">{product.name}</h1>
                <p className="font-normal">{product.description}</p>
            </div>  
            <div className=" flex flex-col justify-between p-2 w-32 bg-slate-300 mx-2">
                <h1 className="text-red-600 font-bold ">€{product.price}</h1>
                {addToCart}
            </div>  
            
        </div>
    )
}