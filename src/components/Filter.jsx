import {useGlobalRecipe} from "../contexts/recipeContext.jsx";


const Filter = () => {
    const {searchInput, setSearchInput} = useGlobalRecipe()

    return (
        <div className={'filter flex flex-col sm:flex-row sm:items-center gap-2 sm:border border-black/40 rounded'}>
            <input type="search" className={'rounded px-4 outline-0 py-2'} placeholder={'Search Recipe...'} value={searchInput} onChange={(e)=> setSearchInput(e.target.value)}/>
            <div className={'flex items-center gap-4 border-l-2 border-black/60 pl-4'}>
                <p className={'font-bold text-xl'}>Filters:</p>
                <label htmlFor="name" className={'flex items-center gap-1'}>
                    <input type="radio" name="filter" id="name" defaultValue={true}/> Name
                </label>
                <label htmlFor="ingredients" className={'flex items-center gap-1'}>
                    <input type="radio" name="filter" id="ingredients"/> Ingredients
                </label>
                <label htmlFor="cuisine" className={'flex items-center gap-1'}>
                    <input type="radio" name="filter" id="cuisine"/> Cuisine
                </label>
            </div>
        </div>
    );
};

export default Filter;