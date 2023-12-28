import React,  {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Product/ProductCard";



export default function CategoryRow({name, cat_id}){

    const[products, setProducts] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:8080/product/cat_id/${cat_id}`)
        .then(res => res.json())
        .then((result) => {
            setProducts(result);
        }
    )
    }, [])

    return(
        <div className="flex m-2 p-2 w-screen h-fit rounded-lg border-2 border-black font-bold flex-col ">
            <h1 className="text-black text-2xl bg-blue-200 h-min text-center py-2">{name}</h1>
            <div className="h-full bg-red-200 flex flex-row">
                {products.map(product=>(
                    <Link to="">
                        <ProductCard
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        />
                    </Link>
                    ))}
            </div>
            <Link className="font-bold underline text-right px-2 hover:text-blue-500" to={`category/${cat_id}`}>See more -></Link>
                
        </div>
    )
}