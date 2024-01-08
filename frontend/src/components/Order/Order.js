import React from "react";
import { getShoppingCart, clearShoppingCart } from "../../services/ShoppingCartService.js";
import { useNavigate } from "react-router-dom";


export default function Order(){
    const getAmount = getShoppingCart().reduce((tot, el) => tot = tot + el[0].price * el[1], 0)
    const navigate = useNavigate();

    function payOrder(){
        clearShoppingCart();
        navigate("/");
    }
    
    return(
        <div className="flex flex-col items-center ">
            <h1 className="text-center font-bold text-2xl p-4">Checkout</h1>
            <p className="font-bold p-2">Your total amount is : €{getAmount}</p>
            <div className="flex flex-col items-center m-4">
                <button className="font-bold p-4 w-fit bg-blue-400" onClick={() => payOrder()} >Pay now</button>
            </div>
            

        </div>
    )
}