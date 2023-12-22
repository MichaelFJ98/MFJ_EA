import React,  {useState, useEffect} from "react";
import CategoryRow from "./CategoryRow";



export default function CategoryList(){

    const[categories, setCategories] = useState([])

    useEffect(()=> {
        fetch("http://localhost:8080/category/getAll")
        .then(res => res.json())
        .then((result) => {
            setCategories(result);
            console.log(result)
        }
    )
    }, [])

    return(
        <div className="flex flex-col ">
            {categories.map(category=>(
                    <CategoryRow
                    name={category.name}
                    />
                ))}
                
        </div>
    )
}