import React from "react";
import default_img from "../../images/default.png"
import { PlusIcon } from '@heroicons/react/24/outline'
import { addItemToShoppingCart } from "../../services/ShoppingCartService";
import { isAuthenticated } from "../../services/AuthService";

export default function ProductCard({product}){

    const addToCart = isAuthenticated() ?(
                        <button onClick={() => { addItemToShoppingCart(product)}}>
                            <PlusIcon className="bg-green-400 rounded-full w-8 h-8 "></PlusIcon>
                        </button>
                    ) : <div></div>

    return(
        <div className="flex m-2 p-2 w-fit rounded-lg border-2 border-black flex-col ">
            <img src={default_img} className="w-52"></img>
            <div className="flex flex-row">
                <div className="flex flex-col px-2">
                    <h1 className="text-black text-xl bg-blue-200 w-min text-center py-2 font-bold">{product.name}</h1>
                    <p className="font-normal">{product.description}</p>
                    <h1 className="text-red-600 font-bold">€{product.price}</h1>
                </div>
                <div>
                    {addToCart}
                </div>
            </div>
        </div>
    )
}