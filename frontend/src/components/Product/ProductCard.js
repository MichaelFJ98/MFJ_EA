import React from "react";
import default_img from "../../images/default.png"

export default function ProductCard(){
    return(
        <div className="flex m-2 p-2 w-fit rounded-lg border-2 border-black flex-col ">
            <img src={default_img} className="w-48"></img>
            <div className="flex flex-col px-2">
                <h1 className="text-black text-xl bg-blue-200 w-min text-center py-2 font-bold">p_name</h1>
                <h1 className="text-red-600 font-bold">€29,98</h1>
            </div>    
        </div>
    )
}