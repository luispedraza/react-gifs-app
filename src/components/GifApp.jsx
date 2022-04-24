import { useState } from "react";
import AddCategory from "./AddCategory";
import { GifGrid } from "./GifGrid";
import "animate.css";


const GifApp = (props) => {


    const defaultCategories = [
        "Little Dogs"
    ]

    const [categories, setCategories] = useState(defaultCategories);

    const addNewCategory = (newCategory) => {
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
        <h2>My Gif App</h2>

        <AddCategory addCategory={addNewCategory} />
        
        <hr />

        <ol>
            {
                categories.map((cat, i) => {
                    return <GifGrid key={cat} category={cat} />;
                })
            }
        </ol>
        
        </>
    )

}

export default GifApp;