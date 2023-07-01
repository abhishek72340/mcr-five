import React, { useState } from 'react';
const AddModal = ({ onClose, onAddRecipe }) => {
    const [recipe, setRecipe] = useState({
        name: '',
        ingredients: '',
        instructions: '',
        cuisine: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddRecipe(recipe);
        onClose();
    };
   
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Add Recipe</h2>
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
                        ></textarea>
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
                        ></textarea>
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
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Add Recipe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default  AddModal;