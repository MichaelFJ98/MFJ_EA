import React from "react";
import default_img from "../../images/default.png"

//display a singular element of theshopping cart
export default function ShoppingElement(product){
    return(
        <div className="flex justify-center">
            <div className="flex w-9/12 bg-slate-500 p-2 ">
                <img src={default_img} className="w-52"></img>
                <div className="p-4 w-8/12">
                    <h1 className="font-bold text-xl">{product.product[0].name}</h1>
                    <p>{product.product[0].description}</p>
                </div>
                <div className="flex font-medium items-center justify-center bg-slate-100 w-2/12">
                    <p className="">Amount : {product.product[1]}</p>
                </div>
            </div>
        </div>
    )
}