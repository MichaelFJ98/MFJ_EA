import React,  {useState, useEffect} from "react";
import ProductCard from "../Product/ProductCard";



export default function CategoryRow({name}){

    const[products, setProducts] = useState([])

    useEffect(()=> {
        fetch("http://localhost:8080/product/getAll")
        .then(res => res.json())
        .then((result) => {
            setProducts(result);
            console.log(result)
        }
    )
    }, [])

    return(
        <div className="flex m-2 p-2 w-screen h-fit rounded-lg border-2 border-black font-bold flex-col ">
            <h1 className="text-black text-2xl bg-blue-200 h-min text-center py-2">{name}</h1>
            <div className="h-full bg-red-200 flex flex-row">
                {products.map(product=>(
                        <ProductCard
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        />
                    ))}
            </div>
                
        </div>
    )
}