import React,  {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Product/ProductCard";

//Creates a singular row template for a category which products get displayed inside

export default function CategoryRow({name, cat_id}){

    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(false)

    // fetch all the products that have the same cat_id
    const fetchAPI = async ()=> {
        setLoading(true);
        try{
            const res = await fetch(`http://localhost:8080/product/cat_id/${cat_id}`)
            const data = await res.json();
            if(data) {setProducts(data)}
        }catch(error){
            console.error(error)
        }
        setLoading(false);
    }

    useEffect(()=> {
        fetchAPI();
    },[]);

    // display all products with the productcard component
    return(
        <div className="flex m-2 p-2 w-screen h-fit rounded-lg border-2 border-black font-bold flex-col ">
            <h1 className="text-black text-2xl bg-blue-200 h-min text-center py-2">{name}</h1>
            <div className="h-full bg-red-200 flex flex-row">
                {products.map(product=>(
                        <ProductCard
                        product= {product}
                        />
                    ))}
            </div>
            <Link className="font-bold underline text-right px-2 hover:text-blue-500" to={`category/${cat_id}`}>See more -></Link>
                
        </div>
    )
}