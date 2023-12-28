import React,  {useState, useEffect} from "react";

export default function Category(){

    const[name, setName] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("cat_name")
        console.log({name});
        fetch("http://localhost:8080/category/add",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:  JSON.stringify({name})
        }).then(()=> {
            console.log('new category added');
            setName("");
            window.location.reload();
        }) 

        
    }

    return(
        <div>

        
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                        <label for="username" className="block text-sm font-medium leading-6 text-gray-900">Category Name</label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input type="text" name="cat_name" id="cat_name"  value={name}
                                    onChange={(e) => setName(e.target.value)} 
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                    placeholder="category name"/>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form>
            
        </div>
    );
}
