import React, { useState, useEffect } from 'react';

const EditModal = ({ onClose, recipeToEdit, onUpdateRecipe }) => {
    const [recipe, setRecipe] = useState({ ...recipeToEdit });

    useEffect(() => {
        setRecipe({ ...recipeToEdit });
    }, [recipeToEdit]);

    const handleChange = (e) => {
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateRecipe(recipe);
        onClose();
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-75 bg-gray-900">
            <div className="bg-white p-6 rounded shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-bold mb-1">
                            Recipe Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={recipe.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ingredients" className="block font-bold mb-1">
                            Ingredients
                        </label>
                        <textarea
                            id="ingredients"
                            name="ingredients"
                            value={recipe.ingredients}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="instructions" className="block font-bold mb-1">
                            Cooking Instructions
                        </label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            value={recipe.instructions}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cuisine" className="block font-bold mb-1">
                            Cuisine Type
                        </label>
                        <input
                            type="text"
                            id="cuisine"
                            name="cuisine"
                            value={recipe.cuisine}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onClick={onClose}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Update Recipe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;