import {useNavigate, useParams} from "react-router-dom";
import {BiArrowBack} from 'react-icons/bi'
import RecipeDetailsCard from "../components/RecipeDetailsCard.jsx";
import {useGlobalRecipe} from "../contexts/recipeContext.jsx";

const RecipeDetailPage = () => {
    const {id} = useParams()
    const {recipeDetails} = useGlobalRecipe()
    const navigate = useNavigate()

    const recipe = recipeDetails(id)

    return (
        <div className={'recipe-details flex flex-col items-center gap-10 px-6 pt-12 pb-4 relative'}>
            <div className="back absolute left-4 top-2 flex items-center gap-2 cursor-pointer" onClick={()=>navigate('/')}>
                <BiArrowBack/> Back
            </div>
            <h1 className={'text-2xl font-bold'}>{recipe?.recipeName}</h1>
            <RecipeDetailsCard recipe={recipe}/>
        </div>
    );
};

export default RecipeDetailPage;