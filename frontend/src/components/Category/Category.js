import React,  {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ProductCardBig from "../Product/ProductCardBig";


//displays all products in a category

export default function Category(){
    //use params in weblink
    const {cat_id} = useParams();
    const[category, setCategory] = useState({});
    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(false)

    //fetch category getcat endpoint with given catID to retrieve category
    const fetchAPI = async ()=> {
        setLoading(true);
        try{
            const res = await fetch(`http://localhost:8080/category/getCat/${cat_id}`)
            const data = await res.json();
            if(data) {setCategory(data)}
        }catch(error){
            console.error(error)
        }
        setLoading(false);
    }

    useEffect(()=> {
        fetchAPI();
    },{});

    //fetch products endpoint to get all products related tocategory id
    const fetchAPI2 = async ()=> {
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
        fetchAPI2();
    }, [])

    
    return(
           <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl text-center py-4">Alle producten uit de categorie "{category.name}"</h1>
            {products.map(product=>(
                    <ProductCardBig
                        product={product}
                    />
                    ))}
           </div> 
    )
}