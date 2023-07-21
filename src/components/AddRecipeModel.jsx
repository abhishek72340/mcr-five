import {useEffect} from "react";

import {GrClose} from 'react-icons/gr'
import {useGlobalRecipe} from "../contexts/recipeContext.jsx";

const AddRecipeModel = ({setIsAddRecipeModel, recipe}) => {
    const {inputChangeHandler, inputData, addRecipe, setInputData} = useGlobalRecipe()

    const submitHandler = (e) => {
        e.preventDefault()
        addRecipe(inputData)
        setIsAddRecipeModel(false)
    }

    useEffect(()=>{
        if(recipe){
            setInputData(recipe);
        }
        return(()=>{
            setInputData({
                recipeName: '',
                ingredients: [],
                cookingInstructions: [],
                cuisineType: '',
                mediaUrl: ''
            })
        })
    },[])

    return (
        <div className={'fixed z-10 inset-0 bg-black/40 flex justify-center items-center'}>
            <div
                className="recipe-card w-[90%] min-h-[200px] sm:w-96 bg-white rounded p-2 px-4 flex flex-col gap-2 pb-4 relative">
                <div className="close-icon absolute top-2 right-2 cursor-pointer"
                     onClick={() => setIsAddRecipeModel(false)}><GrClose onChange={inputChangeHandler}/></div>
                <h1 className={'text-2xl'}>Add Recipe</h1>
                <form onSubmit={submitHandler} className={'flex flex-col gap-2'}>
                    <label htmlFor="">
                        <input required type="text" name={'recipeName'} placeholder={'Recipe Name'}
                               className={'w-full border border-black/40 p-2 rounded'} onChange={inputChangeHandler} value={inputData.recipeName}/>
                    </label>
                    <label htmlFor="">
                        <input required type="text" name={'cuisineType'} placeholder={'Cuisine Type'}
                               className={'w-full border border-black/40 p-2 rounded'} onChange={inputChangeHandler} value={inputData.cuisineType}/>
                    </label>
                    <label htmlFor="">
                        <input required type="text" name={'mediaUrl'} placeholder={'Enter Image Url'}
                               className={'w-full border border-black/40 p-2 rounded'} onChange={inputChangeHandler} value={inputData.mediaUrl}/>
                    </label>
                    <label htmlFor="">
                        <input required type="text" name={'ingredients'}
                               placeholder={'Add Ingredients (Comma Sepereted)'}
                               className={'w-full border border-black/40 p-2 rounded'} onChange={inputChangeHandler} value={inputData.ingredients}/>
                    </label>
                    <label htmlFor="">
                        <input required type="text" name={'cookingInstructions'}
                               placeholder={'Add Instructions (Comma Sepereted)'}
                               className={'w-full border border-black/40 p-2 rounded'} onChange={inputChangeHandler} value={inputData.cookingInstructions}/>
                    </label>
                    <button type={'submit'} className={'bg-red-600 cursor-pointer p-2 rounded text-white'}>Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddRecipeModel;