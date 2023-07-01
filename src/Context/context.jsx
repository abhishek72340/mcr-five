import { createContext, useContext } from "react";

const recipeContext =createContext();

const RecipeProvider=({children})=>{
    return(
        <recipeContext.Provider>
{children}
        </recipeContext.Provider>
    )
}
const  useRecipe=()=>useContext(recipeContext);
export {useRecipe,RecipeProvider}