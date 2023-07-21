const RecipeDetailsCard = ({recipe}) => {

    const {mediaUrl, cuisineType, ingredients, cookingInstructions} = recipe;

    return (
        <div className={'flex flex-col lg:flex-row gap-4 shadow shadow-black/40 sm:w-[80%] p-2 rounded'}>
            <div className="left w-full flex items-start xl:items-stretch justify-center lg:w-auto">
                <img src={mediaUrl} alt="img" className={'w-96 2xl:h-full rounded object-fill'}/>
            </div>
            <div className="right text-lg flex-1">
                <p><b>Cousin: </b> {cuisineType}</p>
                <div className={'inline-block gap-2 mt-2'}>
                    <b>Ingredients: </b>
                    <div className={'inline'}>
                        {
                            ingredients.map(ingredient => (
                                <span>{ingredient}, </span>
                            ))
                        }
                    </div>
                </div>
                <div className={'my-4'}>
                    <b>Instructions: </b>
                    <ol className={'list-decimal pl-6'}>
                        {
                            cookingInstructions.map(instruction => (
                                <li>{instruction}</li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetailsCard;