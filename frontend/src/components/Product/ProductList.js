import React,  {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ProductCardBig from "./ProductCardBig";



export default function ProductList(){
    //get weblink params
    const {textInput} = useParams()
    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(false)

    const fetchAPI = async ()=> {
        setLoading(true);
        try{
            const res = await fetch(`http://localhost:8080/product/getByString/${textInput}`)
            const data = await res.json();
            if(data) {setProducts(data)}
        }catch(error){
            console.error(error)
        }
        setLoading(false);
    }
    //on change of the textiput, fetch the api again.
    useEffect(()=> {
        fetchAPI();
    },[textInput]);

    //display all products 
    return(
        <div className="flex justify-center">
            <div className="flex m-2 p-2  h-fit rounded-lg border-2 border-black font-bold flex-col w-9/12">
                <h1 className="text-black text-2xl bg-blue-200 h-min text-center py-2">All products that contain "{textInput}"</h1>
                <div className="h-full bg-red-200 flex flex-col">
                    {products.map(product=>(
                            <ProductCardBig
                            product= {product}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}