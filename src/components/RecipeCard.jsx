import {useState} from "react";

import {useNavigate} from "react-router-dom";
import {AiTwotoneEdit} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
import AddRecipeModel from "./AddRecipeModel.jsx";
import {useGlobalRecipe} from "../contexts/recipeContext.jsx";

const RecipeCard = ({recipe}) => {
    const [isAddRecipeModel, setIsAddRecipeModel] = useState(false)
    const navigate = useNavigate()
    const {deleteRecipe} = useGlobalRecipe()

    return (
        <>
            <div className={'recipe-card w-60 p-2 shadow shadow-black/40 rounded relative'}>
                <div className="edit-delete-icon absolute flex gap-2 text-2xl bg-white right-0">
                    <AiTwotoneEdit className={'cursor-pointer'} onClick={()=>setIsAddRecipeModel(true)}/>
                    <MdDelete className={'cursor-pointer'} onClick={()=>deleteRecipe(recipe.id)}/>
                </div>
                <img src={recipe.mediaUrl} alt="recipe-img" className={'w-full aspect-square rounded cursor-pointer'} onClick={()=>navigate(`/recipe-detail/${recipe.id}`)}/>
                <h1 className={'text-lg font-bold line-clamp-1'}>{recipe.recipeName}</h1>
                <p className={'w-full flex justify-between pr-6'}><b>Cuisine Type:</b> {recipe.cuisineType}</p>
                <p className={'w-full flex justify-between'}><b>Ingredients: </b> <span className={'cursor-pointer'}>See Recipe ></span></p>
                <p className={'w-full flex justify-between'}><b>Instructions: </b> <span className={'cursor-pointer'}>See Recipe ></span></p>
            </div>
            {
                isAddRecipeModel && <AddRecipeModel setIsAddRecipeModel={setIsAddRecipeModel} recipe={recipe}/>
            }
        </>
    );
};

export default RecipeCard;