import React,  {useState, useEffect} from "react";
import CategoryRow from "./CategoryRow";



export default function CategoryList(){

    const[categories, setCategories] = useState([])
    const[loading, setLoading] = useState(false)

    const fetchAPI = async ()=> {
        setLoading(true);
        try{
            const res = await fetch("http://localhost:8080/category/getAll")
            const data = await res.json();
            if(data) {setCategories(data)}
        }catch(error){
            console.error(error)
        }
        setLoading(false);
    }

    useEffect(()=> {
        fetchAPI();
    },[]);

    return(
        <div className="flex flex-col ">
            {categories.map(category=>(
                    <CategoryRow
                    name={category.name}
                    cat_id={category.id}
                    />
                ))}
                
        </div>
    )
}