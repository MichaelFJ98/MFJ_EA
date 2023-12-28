import React from "react";
import default_img from "../../images/default.png"

export default function ProductCardBig({name, description, price}){

    return(
        <div className="flex m-2 p-2 w-7/12 rounded-lg border-2 border-black flex-row ">
            <img src={default_img} className="w-48"></img>
            <div className="flex flex-col px-2 w-full bg-slate-200 ">
                <h1 className="text-black text-xl bg-blue-200 w-min text-center py-2 font-bold">{name}</h1>
                <p className="font-normal">{description}</p>
            </div>  
            <div className="w-32 bg-slate-300 mx-2">
                <h1 className="text-red-600 font-bold ">€{price}</h1>
            </div>  
            
        </div>
    )
}