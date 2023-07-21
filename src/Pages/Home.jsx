import {useState} from "react";

import Filter from "../components/Filter.jsx";
import {useGlobalRecipe} from "../contexts/recipeContext.jsx";
import RecipeCard from "../components/RecipeCard.jsx";
import AddRecipeModel from "../components/AddRecipeModel.jsx";

const Home = () => {
    const [isAddRecipeModel, setIsAddRecipeModel] = useState(false)
    const {allRecipes, filteredData} = useGlobalRecipe()

    return (
        <>
            <div className={'px-6 py-8'}>
                <Filter/>
                <div className="all-recipe pt-6">
                    <h1 className={'text-2xl font-bold'}>All Recipies: {name}</h1>
                    <div className="all-recipe flex gap-4 flex-wrap">
                        {
                            filteredData.map((recipe)=>(
                                <RecipeCard key={recipe.id} recipe={recipe} />
                            ))
                        }
                        <div className={'add-recipe-card w-60 p-2 shadow shadow-black/40 rounded flex justify-center items-center text-5xl text-black/40 cursor-pointer min-h-[200px]'} onClick={()=>setIsAddRecipeModel(true)}>
                            +
                        </div>
                    </div>
                </div>
            </div>
            {isAddRecipeModel && <AddRecipeModel setIsAddRecipeModel={setIsAddRecipeModel}/>}
        </>
    );
};

export default Home;