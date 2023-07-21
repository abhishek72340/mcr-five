import {createContext, useContext, useState, useEffect} from "react";

import {v4 as uuid} from "uuid";
import {recipes} from '../db/recipes.js'

const recipeContext = createContext()

const RecipeProvider = ({children}) => {
    const [inputData, setInputData] = useState({
        recipeName: '',
        ingredients: [],
        cookingInstructions: [],
        cuisineType: '',
        mediaUrl: ''
    })
    const [searchInput, setSearchInput] = useState('');
    const [allRecipes, setAllRecipes] = useState(recipes);

    useEffect(()=>{
        localStorage.setItem('allRecipe', JSON.stringify(allRecipes))
    }, [allRecipes])

    useEffect(()=>{
        setAllRecipes(JSON.parse(localStorage.getItem('allRecipe')))
    }, [])

    const inputChangeHandler = (e) => {
        const {name, value} = e.target
        if(name === 'ingredients' || name === 'cookingInstructions'){
            setInputData(prevState => ({...prevState, [name]: value}))
        }else{
            setInputData(prevState => ({...prevState, [name]: value}))
        }
    }

    const recipeDetails = (id) => {
        return allRecipes.find(recipe => recipe.id === id)
    }

    const addRecipe = (recipe) => {
        setAllRecipes(prevState => [...prevState, {id: uuid(), ...recipe}])
    }

    const deleteRecipe = (recipeId) => {
        setAllRecipes(prevState => prevState.filter(recipe => recipe.id !== recipeId))
    }

    const filteredData = allRecipes.filter(recipe => recipe.recipeName.toUpperCase().includes(searchInput.toUpperCase()))


    return(
        <recipeContext.Provider value={{allRecipes, recipeDetails, inputChangeHandler, addRecipe, inputData, setInputData, deleteRecipe, searchInput, setSearchInput, filteredData}}>
            {children}
        </recipeContext.Provider>
    )
}

const useGlobalRecipe = () => useContext(recipeContext)

export {RecipeProvider, useGlobalRecipe}