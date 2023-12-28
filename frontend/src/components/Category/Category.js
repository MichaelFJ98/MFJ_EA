import React,  {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ProductCardBig from "../Product/ProductCardBig";




export default function Category(){

    const {cat_id} = useParams();
    const[category, setCategory] = useState({});
    const[products, setProducts] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:8080/category/getCat/${cat_id}`)
        .then(res => res.json())
        .then((result) => {
            setCategory(result);
        });
    }, {});

    

    useEffect(()=> {
        fetch(`http://localhost:8080/product/cat_id/${cat_id}`)
        .then(res => res.json())
        .then((result) => {
            setProducts(result);
        }
    )
    }, [])


    return(
           <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl text-center py-4">Alle producten uit de categorie "{category.name}"</h1>
            {products.map(product=>(
                    <ProductCardBig
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    />
                    ))}
           </div> 
            
    )
}