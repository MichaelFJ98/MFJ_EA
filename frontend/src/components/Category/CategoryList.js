import React,  {useState, useEffect} from "react";
import CategoryRow from "./CategoryRow";

//displays all categories with products inside each category

export default function CategoryList(){

    const[categories, setCategories] = useState([])
    const[loading, setLoading] = useState(false)

    //fetch all categories on category endpoint
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


    // for each category create a category rowcomponent with given details
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